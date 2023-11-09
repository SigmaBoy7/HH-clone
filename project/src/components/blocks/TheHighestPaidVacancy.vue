<script setup>
    import { defineProps } from "vue";
    
    const props = defineProps({
        mostPaidVacancyArray: {
            type: Array,
            required: true
        }
    })

</script>

<template>
    <div class="flex flex-col max-w-2xl">
        <div class="mb-3">
            <p class=" text-lg uppercase font-medium">
                Самые высокооплачиваемые
            </p>
        </div>
        <div class="flex flex-wrap">
            <div class="flex flex-col border-2 w-72 h-42 p-3 rounded-lg m-1" v-for="item in props.mostPaidVacancyArray" :key="item.id">
                <div class=" font-medium">
                    {{ item.title }}
                </div>
                <div class="mt-2 font-thin">
                    от {{ item.salary_min }}$ до {{ item.salary_max }}$
                </div>
                <div class="flex flex-col mt-2 opacity-70">
                    <div class="">{{ item.location.area[2] }}</div>
                    <div class="flex font-medium">
                        {{ item.company.display_name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
