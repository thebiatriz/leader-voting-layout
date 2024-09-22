<template>
    <div class="fixed top-0 w-full z-50">
        <Toolbar
            class="!border-[#8e96db] !bg-[#a1a7f5] !text-white flex justify-between items-center p-4 shadow-lg !rounded-none">
            <template #start>
                <div class="flex items-center space-x-4">
                    <span class="ml-3 md:ml-5 text-2xl font-bold md:text-3xl">Líder Uni-Classe</span>
                </div>
            </template>
            <template #end>
                <div class="hidden md:flex items-center space-x-4">
                    <Button icon="pi pi-user" severity="secondary" class="!rounded-full" />
                </div>
            </template>
        </Toolbar>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'toolbar',
    data() {
        return {

        }
    }
})
</script>