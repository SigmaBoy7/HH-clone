<template>
    <div class="max-w-7xl m-auto">
        <main>
            <div class="border-b pb-5 w-full">
                <app-input
                class="w-full mt-5 sm:w-2/4"
                placeholder="Профессия, должность, или компания"
                @push="(value) => $router.push({path: '/search', query: {'text': `${value}`}})"
                />
            </div>
            <div class="mt-5">
                <the-highest-paid-vacancy
                :mostPaidVacancyArray="mostPaidVacancyArray"
                />
            </div>
        </main>
    </div>
</template>

<script setup>
    import TheHighestPaidVacancy from "@/components/blocks/TheHighestPaidVacancy";
    import { getMostPaidVacancy } from '@/helpers/api'
    import { ref, onMounted } from "vue";

    const mostPaidVacancyArray = ref(null)


    const fetchVacancy = async() => {
        try {
            const vacancyData = await getMostPaidVacancy()
            mostPaidVacancyArray.value = vacancyData.results
            return mostPaidVacancyArray
        }catch{
            console.error
        }
    }

    onMounted(() => {
        fetchVacancy()
    })

</script>