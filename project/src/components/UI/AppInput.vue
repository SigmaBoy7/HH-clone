<template>
    <div
    class="relative w-full">
        <input
        v-model="searchInput"
        @keydown.enter="push" 
        class="w-full border-2 py-2 px-2"
        >
        <div
        class="absolute left-0 w-full h-fit mt-1 shadow-[0px_12px_6px_0px_#00000024] bg-white"
        :class="{ 'block': isChipsActive, 'hidden': !isChipsActive }"
        ref="chips" 
        >
            <button
            class="flex flex-col p-3 w-full hover:bg-blue-500 md:p-2"
            v-for="item in chipsData"
            :key="item.id"
            >
                {{ item.name }}
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref, defineEmits, defineProps, watch, onMounted } from "vue"

    const searchInput = ref(null)
    const isChipsActive = ref(false)
    const chips = ref(null)
    const emits = defineEmits(["push", "chipsIsActive"])

    const props = defineProps({
        inputValue: {
            type: String,
            required: false
        },
        chipsData: {
            type: Array,
            required: false
        }
    })

    watch( () => props.inputValue, () => {
        searchInput.value = props.inputValue
    })

    watch( () => searchInput.value, () => {
        if (searchInput.value.length > 3 ){
            emits('chipsIsActive', searchInput.value)
            isChipsActive.value = true
        }
        if (searchInput.value.length <= 3 ){
            isChipsActive.value = false
        }
    })

    function push() {
        emits('push', searchInput.value)
    }

    onMounted(() => {
        document.addEventListener('click', function(item) {
            if (item.target !== chips.value){
                isChipsActive.value = false

            }
        })
    })

</script>

<script>
    export default {
        name: 'app-input'
    }
</script>
