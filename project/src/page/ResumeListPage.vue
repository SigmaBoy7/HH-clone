<template>
    <div class="max-w-7xl pt-10 m-auto">
        <div class="flex justify-between">
            <div class="font-bold text-3xl text-gray-700">
                Мои резюме
            </div>
            <div class="inline-block">
                <button
                class="py-1 px-3 border-2 hover:bg-gray-100"
                @click="$router.push({path: '/resume/create'})"
                >
                    Создать резюме
                </button>
            </div>
        </div>
        <div class="flex flex-col">

        </div>
    </div>
</template>

<script setup>

</script>