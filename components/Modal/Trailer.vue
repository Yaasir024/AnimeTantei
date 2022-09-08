<script setup>
import { emit } from 'process';

    const props = defineProps(["trailerId"])
    // const emits = defineEmits(["close"])

    const closeModal = () => {
        console.log('close')
        // emit("close")
    }
</script>


<template>
    <div class="modal bg-white w-[70vw] h-full max-h-[560px]">
        <iframe width="420" height="315" :src="`https://www.youtube.com/embed/${trailerId}`" frameborder="0" allowfullscreen="true"></iframe>
        <div class="absolute top-[-10px] right-[-10px] cursor-pointer z-20" @click="closeModal()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z"/></svg>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}
iframe {
  width: 100%;
  position: absolute;
  height: 100%;
  overflow: hidden;
}
</style>