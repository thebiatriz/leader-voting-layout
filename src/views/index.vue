<template>
    <main class="w-full">
        <div class="flex justify-end">
            <Button icon="pi pi-user" class="!border-[#8e96db] active:scale-95 !bg-[#a7aeff]"></Button>
        </div>
        <h1 class="text-4xl font-semibold flex justify-center">Bem vindo a votação</h1>
        <div class="flex justify-center">
            <Card class="mt-5 border">
                <template #title>
                    <span class="text-2xl"> Cadastre o Líder </span>
                </template>
                <template #content>
                    <div class="pt-4 flex justify-start">
                        <InputText class="w-1/4 mr-2" placeholder="Nome do candidato"></InputText>
                        <InputText class="w-1/4 mr-2" placeholder="Número escolhido para o candidato"></InputText>
                        <InputText class="w-1/4 mr-2" placeholder="Matrícula do candidato"></InputText>
                        <Select v-model="selectedClass" :options="availablesClasses" optionLabel="name"
                            placeholder="Escolha a turma"></Select>
                    </div>
                    <div class="pt-8 flex justify-center">
                        <Button class="!border-[#8e96db] active:scale-95 !bg-[#a7aeff] w-1/5" label="Cadastrar"></Button>
                    </div>
                </template>
            </Card>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ToastService } from '@/utils/toast-service.utils';
import { MessageToasts } from '@/utils/toast-messages.utils';

export default defineComponent({
    name: "Home",
    data() {
        return {
            selectedClass: null,
            availablesClasses: [
                { name: 'Fundamentos de Análise' },
                { name: 'Gerenciamento de TI' },
                { name: 'Interface Homem Máquina', },
                { name: 'Projeto de Extensão - REDES' },
                { name: 'Redes de Computadores' },
                { name: 'Sistemas Operacionais' }
            ]
        }
    },
});
</script>