<template>
    <div class="max-w-7xl m-auto">
        <main>
            <div class="border-b pb-5">
                <app-input
                class="w-full mt-5 sm:w-2/4"
                placeholder="Профессия, должность, или компания"
                @push="(n) => search(n)"
                />
            </div>
            <div class="flec flex-col">
                <div class="my-5 font-bold">
                    Найдено {{ vacancyData.count }} вакансий
                </div>
                <div
                v-for="item in vacancyData.results"
                :key="item.id"
                class="border-2 mb-3 p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
                >
                    <div class=" font-medium text-blue-500 text-lg">
                        {{ item.title }}
                    </div>
                    <div class="mt-2 font-bold text-lg">
                        от {{ item.salary_min }}$ до {{ item.salary_max }}$
                    </div>
                    <div class="flex flex-col mt-1 opacity-70">
                        <div class="">{{ item.location.area[2] }}</div>
                        <div class="flex font-medium">
                            {{ item.company.display_name }}
                        </div>
                    </div>
                </div>                
            </div>
            <div ref="observe" class="">
                Идет загрузка
            </div>
        </main>
    </div>
</template>

<script setup>
    import { getVacancy } from "@/helpers/api"
    import { ref, onMounted } from "vue";
    import { useRouter, useRoute } from 'vue-router'

    const router = useRouter()
    const route = useRoute()
    const vacancyData = ref({})
    const searchParam = ref(route.query.text)
    const observe = ref(null)

    const search = async(what) => {
        const data = await getVacancy(what)
        router.push({query: { text: `${what}` }})
        vacancyData.value.results = data.results
        vacancyData.value.count = data.count
    } 

    const loadMoreVacancy = async(what) => {
        const data = await getVacancy(what)
        vacancyData.value.results = [...vacancyData.value.results, ...data.results]
        vacancyData.value.count = data.count
    }

    const initSearchResults = async() => {
        const data = await getVacancy(route.query.text)
        vacancyData.value.results = data.results
        vacancyData.value.count = data.count
    }
    initSearchResults();

    onMounted(() => {
        
        const options = {
        rootMargin: "0px",
        threshold: 1.0,
        };
        
        const callback = (entries) => {
            if (entries[0].isIntersecting) {
                loadMoreVacancy(searchParam.value)
            }
        }

        const observer = new IntersectionObserver(callback, options);
        observer.observe(observe.value)
    })
</script>