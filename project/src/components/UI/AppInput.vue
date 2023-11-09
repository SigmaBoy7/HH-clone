<template>
    <input
    v-model="searchInput"
    @keydown.enter="push" 
    class="border-2 py-2 px-2"
    >
</template>

<script setup>
    import { ref, defineEmits } from "vue"

    const searchInput = ref(null)
    const emits = defineEmits(["push"])

    function push() {
        emits('push', searchInput.value)
    }

</script>

<script>
    export default {
        name: 'app-input'
    }
</script>
