<template>
    <main class="playwrite-font w-full">
        <h1 class="text-xl font-bold flex justify-center playwrite-font">BEM VINDO A VOTAÇÃO</h1>
        <div class="flex flex-col justify-center items-center">
            <Card class="mt-5 border w-11/12 md:w-9/12">
                <template #title>
                    <span class="text-lg font-semibold"> Cadastre o Líder </span>
                </template>
                <template #content>
                    <form @submit.prevent="submitForm">
                        <div class="pt-4 flex justify-center">
                            <InputText v-model="candidateName" required class="w-1/4 mr-2 !text-sm" minlength="3"
                                maxlength="50" placeholder="Nome do candidato"></InputText>
                            <InputText v-model="candidateNumber" required class="w-1/4 mr-2 !text-sm"
                                placeholder="Número escolhido para o candidato"></InputText>
                            <InputMask v-model="candidateRegistry" required class="w-1/4 mr-2 !text-sm"
                                placeholder="Matrícula do candidato" mask="9-9999999999"></InputMask>
                            <Select v-model="selectedClass" :options="availablesClasses" optionLabel="name"
                                placeholder="Escolha a turma" aria-required="true" class="!text-sm"></Select>
                        </div>
                        <div class="pt-8 flex justify-center">
                            <Button :disabled="!isFormValid" type="submit" class="w-1/5" severity="contrast"
                                label="Cadastrar"></Button>
                        </div>
                    </form>
                </template>
            </Card>

            <Card class="mt-16 border w-11/12 md:w-9/12">
                <template #title>
                    <span class="text-lg font-semibold"> Vote aqui </span>
                </template>
                <template #content>
                    <div class="pt-4">
                        <IconField>
                            <InputText class="w-full !text-sm" variant="filled" placeholder="Pesquisar Candidato">
                            </InputText>
                            <InputIcon class="pi pi-search"></InputIcon>
                        </IconField>
                    </div>
                    <div class="!text-sm pt-5 flex justify-end flex-col">
                        <span class="py-2">Filtrar por quantidade de votos</span>
                        <InputText v-model="voteQuantityString" class="!text-sm w-1/2 mb-4" @input="updateVoteQuantity"
                            placeholder="Quantidade de votos"></InputText>
                        <Slider v-model="voteQuantity" class="w-1/2"></Slider>
                    </div>

                    <div class="pt-8">
                        <Card class="border">
                            <template #title>
                                <span class="text-base font-semibold">Beatriz Monteiro </span>
                            </template>
                            <template #content>
                                <div class="flex flex-col pt-3">
                                    <span class="text-sm pb-2">Turma: Interface Homem Máquina </span>
                                    <span class="text-sm pb-2">Número: 08 </span>
                                    <span class="text-sm pb-2">Matrícula: 1-2024123456 </span>
                                </div>

                                <div class="flex justify-between pt-9">
                                    <span class="pt-4 flex justify-end">Quantidade de votos: 25 votos</span>
                                    <Button @click="toastVote" label="VOTAR" class="w-1/4" severity="contrast"></Button>
                                </div>
                            </template>
                        </Card>
                        <Paginator :rows="3" :total-records="3"
                            template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink">
                        </Paginator>
                    </div>
                </template>
            </Card>
        </div>
    </main>
</template>

<script lang="ts">
import { MessageToasts } from "@/utils/toast-messages.utils";
import { ToastService } from "@/utils/toast-service.utils";
import { defineComponent } from "vue";

export default defineComponent({
    name: "Home",
    data() {
        return {
            candidateName: '' as string,
            candidateNumber: '' as string,
            candidateRegistry: '' as string,
            selectedClass: null as string | null,
            availablesClasses: [
                { name: 'Fundamentos de Análise' },
                { name: 'Gerenciamento de TI' },
                { name: 'Interface Homem Máquina' },
                { name: 'Projeto de Extensão - REDES' },
                { name: 'Redes de Computadores' },
                { name: 'Sistemas Operacionais' }
            ] as Array<{ name: string }>,
            voteQuantity: 50 as number,
            voteQuantityString: '50',

        }
    },
    computed: {
        isFormValid(): boolean {
            return this.candidateName !== '' && this.candidateNumber !== '' && this.candidateRegistry !== '' && this.selectedClass !== null;
        },
        registryButtonClass(): string {
            return this.isFormValid
                ? '!border-[#8e96db] active:scale-95 !bg-[#a7aeff]'
                : '!border-[#8e96db] !bg-gray-400';
        }
    },
    methods: {
        submitForm(): void {
            if (this.isFormValid) {
                this.$toast.add(ToastService.success(MessageToasts.SUCCESS_CREATE_LEADER));
            }
        },
        updateVoteQuantity() {
            const value = Number(this.voteQuantityString);
            this.voteQuantity = isNaN(value) ? 0 : value;
        },
        toastVote(): void {
            this.$toast.add(ToastService.success(MessageToasts.SUCCESS_VOTE_LEADER));
        }
    },
    watch: {
        voteQuantity(newValue) {
            this.voteQuantityString = String(newValue);
        }
    }
});
</script>

<style scoped>
.playwrite-font {
    font-family: 'Playwrite_DE_Grund', sans-serif;
}

::v-deep .p-slider .p-slider-range {
    background-color: black !important;
}

::v-deep .p-slider .p-slider-handle {
    background-color: black !important;
}

::v-deep .p-slider .p-slider-handle:focus {
    outline: none !important;
    box-shadow: 0 0 0 3px gray !important;
}
</style>
