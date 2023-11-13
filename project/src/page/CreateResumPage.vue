<template>
    <div class="flex m-auto sm:h-screen sm:min-h-screen">
        <transition name="slide-fade">
            <create-page-popup
            ref="popup"
            v-if="isPopUpVisible"
            :data="popupData"
            @popupCreate="getJobsName"
            @close="closePopUp"
            @clickOutside="closePopUp"
            @jobSelected="(n) => writeSelectedJob(n)"
            >
                <template
                v-slot:popup-title
                >
                <span class=" text-lg font-bold">Уточните специальность, чтобы видеть более подходящие вакансии</span>
                </template>
            </create-page-popup> 
        </transition>

        <div 
        class="w-full sm:flex"
        >
            <div class="pt-20 pb-28 px-5 bg-slate-100 sm:bg-gray-100 sm:pt-52 sm:w-2/5 sm:h-full sm:flex sm:flex-col sm:items-center sm:text-center">
                <div class="mb-8">
                    <div class="w-14 h-14 rounded-full bg-red-700 text-center py-3 text-xl text-white">
                        PP
                    </div>
                </div>
                <span class="text-xl font-bold p-2 bg-white rounded-xl sm:pl-6 sm:p-0 sm:bg-inherit">Кем вы хотите работать?</span>
            </div>
            <div class="pt-5 px-5 sm:w-full sm:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                <div class="flex flex-col sm:mt-10 lg:mt-20 lg:mx-40">
                    <span class="text-xl font-bold mb-5">Профессия</span>
                    <app-input
                    class=""
                    :inputValue="selectedJobName"
                    :chipsData="chipsData"
                    @chipsIsActive="(q) => getChipsData(q)"
                    />
                    <div class="flex flex-wrap mt-3">
                        <button
                        v-for="item in exampleJobName"
                        :key="item.id"
                        @click="showPopUp(item.job)"
                        class="px-2 py-1 m-1 border-2 rounded-2xl hover:border-black"
                        >
                            {{ item.job }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import CreatePagePopup from "@/components/popup/CreatePagePopup"
    import { getExampleJobsName } from '@/helpers/db-api'
    import { onMounted, ref, watch } from 'vue';
    import { getJobByCommonName } from '@/helpers/db-api'
    import { getJobByQ } from '@/helpers/db-api'

    let exampleJobName = ref(null)
    let isPopUpVisible = ref(false)
    let popupData = ref(null)
    let selectedJobName = ref(null)
    let selectedCommonJobName = ref(null)
    let chipsData = ref(null)
    const popup = ref(null)


    const getJobsName = async() => {
        const data = await getJobByCommonName(selectedCommonJobName.value)
        popupData.value  = data.associatedNames
    }

    const showPopUp = (job) => {
        selectedCommonJobName.value = job
        isPopUpVisible.value = true
    }
    const closePopUp = () => {
        popupData = ref(null)
        selectedCommonJobName = ref(null)
        isPopUpVisible.value = false
    }

    const writeSelectedJob = (job) => {
        selectedJobName.value = job
        closePopUp()
    }

    const getChipsData = async(q) => {
        const data = await getJobByQ(q)
        console.log(data)
        chipsData.value = data
    }

    onMounted(async () => {
        exampleJobName.value = await getExampleJobsName()
    })

    watch( () => selectedCommonJobName.value, () => {
        getJobsName()
    })

</script>

<style>
    .slide-fade-enter-active {
        transition: all 0.5s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateZ(500px);
        opacity: 0;
    }
</style>