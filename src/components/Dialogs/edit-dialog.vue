<template>
    <main class="flex justify-center">
        <Dialog :visible="visible" modal @update:visible="closeDialog" class="w-1/2">
            <template #header>
                <span class="text-2xl font-semibold">Editar cadastro</span>
            </template>
            <span>Preencha os dados abaixo para a mudança</span>
            <div class="py-4 flex justify-center">
                <InputText v-model="candidateName" required class="w-1/3 mr-2 !text-sm" minlength="3" maxlength="50"
                    placeholder="Seu nome" />
                <InputText v-model="candidateNumber" required class="w-1/3 mr-2 !text-sm"
                    placeholder="Número escolhido para candidato" />
                <Select v-model="selectedClass" :options="availablesClasses" optionLabel="name"
                    placeholder="Interface Homem Máquina" aria-required="true" class="!text-sm w-1/3" />
            </div>
            <div class="pt-2 flex justify-end gap-6">
                <Button type="button" class="w-1/4" label="Cancelar" severity="secondary" @click="closeDialog" />
                <Button @click="onUpdate" type="button" label="Confirmar"
                    class="active:scale-95 w-1/4 !border-[#1F3A78] !bg-[#1F3A78] hover:!bg-[#1E4A84]" />
            </div>
        </Dialog>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            candidateName: 'Senhora Lalá' as string,
            candidateNumber: '09' as string,
            selectedClass: null as string | null,
            availablesClasses: [
                { name: 'Fundamentos de Análise' },
                { name: 'Gerenciamento de TI' },
                { name: 'Interface Homem Máquina' },
                { name: 'Projeto de Extensão - REDES' },
                { name: 'Redes de Computadores' },
                { name: 'Sistemas Operacionais' }
            ] as Array<{ name: string }>,
        }
    },
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
        onUpdate(): void {
            this.$emit('update-candidate');
        }
    }
});
</script>
