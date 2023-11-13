<template>
    <div ref="outsidePopUp" class="fixed flex z-50 justify-center min-h-screen w-screen items-center left-0 top-0 bg-black/50">
        <div ref="popup" class="fixed mt-12 h-screen max-w-screen px-3 py-4 bg-white rounded-xl md:w-fit md:h-fit">
            <div class="flex flex-col">
                <div class="flex justify-between items-center mb-5">
                    <slot 
                    name="popup-title"
                    ></slot>
                    <button
                    class="text-3xl ml-3 self-start"
                    @click="emits('close', $refs.popup)"
                    >
                        x
                    </button>
                </div>
                <div class="mb-20 flex flex-col items-left">
                    <div class="max-h-96 overflow-auto md:overflow-x-hidden scrollbar-hide">
                        <button
                        class="flex justify-between w-full mb-5 mr-5 cursor-pointer"
                        v-for="item, idx in props.data"
                        @click="emits('jobSelected', item)"
                        :key="idx"    
                        >   
                            <div>
                                {{ item }}
                            </div>
                            <div class="">
                                >
                            </div>
                        </button>
                    </div>
                    <div ref="endScroll" class="border-t-2 mt-5">
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script setup>
    import { defineEmits, defineProps, onMounted, ref } from 'vue';

    const emits = defineEmits(['close', 'clickOutside', 'popupCreate', 'jobSelected'])
    const outsidePopUp = ref(null)

    const props = defineProps({
        data: {
            type: Array,
            required: false
        }

    })

    emits('popupCreate')

    onMounted(() => {
        document.addEventListener('click', function(item) {
            if (item.target === outsidePopUp.value){
                emits('clickOutside')
            }
        })
    })

</script>
