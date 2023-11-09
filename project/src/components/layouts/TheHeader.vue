<template>
    <header class="bg-black opacity-90">
        <div class="max-w-7xl m-auto flex justify-between py-3 px-2">
            <div class="header-left flex">
                <the-burger/>
                <ul class="space-x-5 text-white pl-4 flex items-center">
                    <li class="hidden phone:block">
                        <button
                        @click="$router.push({path: '/resumes'})"
                        >
                            Мои резюме
                        </button>
                    </li>
                    <li class="hidden phone:block">
                        <button>Отклики</button>
                    </li>
                    <li class="hidden phone:block">
                        <button>Помошь</button>
                    </li>
                    <li class="hidden sm:block">
                        <button>Поиск</button>
                    </li>
                    <li class="hidden sm:block">
                        <button>Создать резюме</button>
                    </li>
                </ul>
            </div>
            <ul class="text-white">
                <div class="">
                    <div class="w-14 h-14 rounded-full bg-red-700 text-center py-3 text-xl ">
                        PP
                    </div>
                </div>
            </ul>
        </div>
    </header>
</template>

<script setup>

</script>