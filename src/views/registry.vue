<template>
    <main class="font-playwrite w-full">
        <h1 class="text-xl font-bold flex justify-center">BEM-VINDO A VOTAÇÃO</h1>
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
                                placeholder="Escolha a turma" aria-required="true"
                                class="!text-sm items-center"></Select>
                        </div>
                        <div class="pt-8 flex justify-center">
                            <Button :disabled="!isFormValid" type="submit" class="w-1/3 md:w-1/5" severity="contrast"
                                label="Cadastrar"></Button>
                        </div>
                    </form>
                </template>
            </Card>

            <Card class="mt-14 border w-11/12 md:w-9/12">
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

                    <span style="display: block;" class="!text-sm pt-9">Filtrar por quantidade de votos</span>
                    <div class="!text-sm pt-5 flex justify-between">
                        <InputText v-model="voteQuantityString" class="!text-sm w-1/2 mb-4" @input="updateVoteQuantity"
                            placeholder="Quantidade de votos"></InputText>
                        <Select v-model="classToFilter" :options="availablesClasses" optionLabel="name"
                            placeholder="Filtre por turma" aria-required="true" class="!text-sm items-center"></Select>
                    </div>
                    <Slider v-model="voteToFilter" class="w-1/2"></Slider>

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
                                    <span class="pt-4 flex justify-end">Quantidade de votos: {{ totalVotes }}
                                        voto(s)</span>
                                    <Button :raised="isVoted" @click="toastVote"
                                        :label="controlVoteButtonLabel(isVoted)" class="w-1/3 md:w-1/4"
                                        :severity="controlVoteButtonSeverity(isVoted)"></Button>
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
            voteToFilter: 50 as number,
            voteQuantityString: '50',
            classToFilter: null as string | null,
            isVoted: false as boolean,
            totalVotes: 0 as number
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
                this.clearRegistryFields();
            }
        },
        updateVoteQuantity() {
            const value = Number(this.voteQuantityString);
            this.voteToFilter = isNaN(value) ? 0 : value;
        },
        toastVote(): void {
            this.isVoted = !this.isVoted;
            if (this.isVoted) {
                this.totalVotes += 1;
                this.$toast.add(ToastService.success(MessageToasts.SUCCESS_VOTE_LEADER));
            } else {
                this.totalVotes -= 1;
                this.$toast.add(ToastService.info(MessageToasts.INFO_REMOVED_VOTE_LEADER, "Voto removido"));
            }
        },
        controlVoteButtonLabel(isVoted: boolean): string {
            return isVoted ? 'REMOVER VOTO' : 'VOTAR';
        },
        controlVoteButtonSeverity(isVoted: boolean): string {
            return isVoted ? 'secondary' : 'contrast';
        },
        clearRegistryFields(): void {
            this.candidateName = '';
            this.candidateNumber = '';
            this.candidateRegistry = '';
            this.selectedClass = null;
        }
    },
    watch: {
        voteToFilter(newValue) {
            this.voteQuantityString = String(newValue);
        }
    }
});
</script>

<style scoped>
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
