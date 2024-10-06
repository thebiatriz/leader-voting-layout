<template>
    <main class="flex justify-center">
        <Dialog :visible="visible" @update:visible="closeDialog" modal class="w-1/3">
            <template #header>
                <span class="text-2xl font-semibold">Deletar cadastro</span>
            </template>
            <span>Você confirma em deletar o seu cadastro como Líder?</span>
            <div class="pt-8 flex justify-end gap-6">
                <Button type="button" class="w-1/4 active:scale-95" label="Cancelar" severity="secondary"
                    @click="closeDialog" />
                <Button @click="onDelete" type="button" label="Confirmar"
                    class="active:scale-95 w-1/4 !border-[#1F3A78] !bg-[#1F3A78] hover:!bg-[#1E4A84]" />
            </div>
        </Dialog>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        visible: {
            type: Boolean,
            required: true
        },
    },
    methods: {
        closeDialog(): void {
            this.$emit('cancel-dialog');
        },
        onDelete(): void {
            this.$emit('delete-candidate');
        }
    }
});
</script>
