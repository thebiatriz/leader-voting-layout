<template>
    <main class="fixed top-0 w-full z-50">
        <Toolbar
            class="!border-black !bg-black !text-white flex justify-between items-center p-4 shadow-lg !rounded-none">
            <template #start>
                <div class="flex items-center space-x-4">
                    <span class="ml-3 md:ml-5 text-2xl font-bold md:text-3xl">Líder Uni-Classe ADS</span>
                    <Button @click="visibleInfoDialog = true" icon="pi pi-info-circle" text class="!rounded-full"
                        severity="info" aria-label="Informações sobre a página de votação para líder Uni-Classe" />
                </div>
            </template>
            <template #end>
                <div class="flex items-center space-x-4">
                    <Button @click="showToggleOptions($event)" :icon="controlToggleIcon(isToggleOpen)"
                        severity="secondary" type="button" class="!rounded-full" />
                    <Menu ref="menuPopUp" id="overlay_menu" :model="toggleOptions" :popup="true" />
                </div>
            </template>
        </Toolbar>

        <Dialog v-model:visible="visibleEditDialog" modal class="w-1/2">
            <template #header>
                <span class="text-2xl font-semibold">Editar cadastro</span>
            </template>
            <span>Preencha os dados abaixo para a mudança</span>
            <div class="py-4 flex justify-center">
                <InputText v-model="candidateName" required class="w-1/3 mr-2 !text-sm" minlength="3" maxlength="50"
                    placeholder="Senhora Lalá" />
                <InputText v-model="candidateNumber" required class="w-1/3 mr-2 !text-sm" placeholder="09" />
                <Select v-model="selectedClass" :options="availablesClasses" optionLabel="name"
                    placeholder="Interface Homem Máquina" aria-required="true" class="!text-sm w-1/3" />
            </div>
            <div class="pt-2 flex justify-end gap-6">
                <Button type="button" class="w-1/4" label="Cancelar" severity="secondary"
                    @click="visibleDeleteDialog = false" />
                <Button @click="toastEditCandidate" type="button" severity="contrast" label="Confirmar" class="w-1/4" />
            </div>
        </Dialog>

        <Dialog v-model:visible="visibleDeleteDialog" modal class="w-1/3">
            <template #header>
                <span class="text-2xl font-semibold">Deletar cadastro</span>
            </template>
            <span>Você confirma em deletar o seu cadastro como Líder?</span>
            <div class="pt-8 flex justify-end gap-6">
                <Button type="button" class="w-1/4" label="Cancelar" severity="secondary"
                    @click="visibleEditDialog = false" />
                <Button @click="toastDeleteCandidate" type="button" severity="contrast" label="Confirmar"
                    class="w-1/4" />
            </div>
        </Dialog>

        <Dialog v-model:visible="visibleInfoDialog" maximizable modal :style="{ width: '50rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <template #header>
                <span class="text-2xl font-semibold">Sobre a página de votação Uni-Classe ADS</span>
            </template>
            <p><span style="display: block;">Olá! Espero que esteja bem.</span><br>Essa página foi desenvolvida com o
                intuito de
                servir como um meio de
                votação de
                líder de sala para os estudantes do curso de Análise e Desenvolvimento de Sistemas (ADS) da
                Unifametro.<br>Aqui
                é possível que os alunos possam realizar o seu cadastro como líder e também escolher em quem gostariam
                de votar,
                assim como acompanhar o andamento final.<br> <span style="display: block" class="my-4">Com atenção,
                    desenvolvedora Beatriz Monteiro.</span>
            </p>
        </Dialog>
    </main>
</template>

<script lang='ts'>
import { MessageToasts } from '@/utils/toast-messages.utils';
import { ToastService } from '@/utils/toast-service.utils';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'toolbar',
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
            voteQuantity: 50 as number,
            voteQuantityString: '50' as string,
            visibleDeleteDialog: false as boolean,
            visibleEditDialog: false as boolean,
            visibleInfoDialog: false as boolean,
            toggleOptions: [
                {
                    label: 'Editar cadastro',
                    icon: 'pi pi-pencil',
                    command: () => {
                        this.openEditDialog(this.visibleDeleteDialog);
                    }
                },
                {
                    label: 'Deletar cadastro',
                    icon: 'pi pi-trash',
                    command: () => {
                        this.openDeleteDialog(this.visibleDeleteDialog);
                    }
                }
            ],
            isToggleOpen: false as boolean,
            toggleIcon: '' as string
        }
    },
    methods: {
        showToggleOptions(event: Event): void {
            this.isToggleOpen = !this.isToggleOpen;
            const ref = this.$refs.menuPopUp as any;
            ref.toggle(event);
        },
        openDeleteDialog(isVisible: boolean): void {
            this.isToggleOpen = !this.isToggleOpen;
            isVisible ? this.visibleDeleteDialog = false : this.visibleDeleteDialog = true;
        },
        openEditDialog(isVisible: boolean): void {
            this.isToggleOpen = !this.isToggleOpen;
            isVisible ? this.visibleEditDialog = false : this.visibleEditDialog = true;
        },
        toastDeleteCandidate(): void {
            this.visibleDeleteDialog = false;
            this.$toast.add(ToastService.success(MessageToasts.SUCCESS_DELETE_LEADER));
        },
        toastEditCandidate(): void {
            this.visibleEditDialog = false;
            this.$toast.add(ToastService.success(MessageToasts.SUCCESS_EDIT_LEADER));
        },
        controlToggleIcon(isToggleOpen: boolean): string {
            return isToggleOpen ? 'pi pi-times' : 'pi pi-bars';
        }
    }
})
</script>