<template>
    <main class="fixed top-0 w-full z-50">
        <Toolbar
            class="!border-[#1F3A78] !bg-[#1F3A78] !text-white flex justify-between items-center p-4 shadow-lg !rounded-none">
            <template #start>
                <div class="flex items-center space-x-4">
                    <span class="ml-3 md:ml-5 text-2xl font-bold md:text-3xl">Líder Uni-Classe</span>
                    <Button @click="visibleInfoDialog = true" icon="pi pi-info-circle" text
                        class="!rounded-full !text-[#CFA34B] hover:!bg-slate-500" severity="warn"
                        aria-label="Informações sobre a página de votação para líder Uni-Classe" />
                </div>
            </template>
            <template #end>
                <div class="flex items-center space-x-4">
                    <Button @click="showToggleOptions($event)" :icon="controlToggleIcon(isToggleOpen)"
                        severity="secondary" type="button" class="!rounded-full" />
                    <Menu ref="menuPopUp" id="overlay_menu" :model="toggleOptions" :popup="true" @hide="onMenuHide" />
                </div>
            </template>
        </Toolbar>

        <EditDialog :visible="visibleEditDialog" @cancel-dialog="visibleEditDialog = false"
            @update-candidate="toastEditCandidate"></EditDialog>

        <DeleteDialog :visible="visibleDeleteDialog" @cancel-dialog="visibleDeleteDialog = false"
            @delete-candidate="toastDeleteCandidate" />

        <AboutDialog :visible="visibleInfoDialog" @cancel-dialog="visibleInfoDialog = false" />

        <LogoutDialog :visible="visibleLogoutDialog" @cancel-dialog="visibleLogoutDialog = false"
            @logout-user="onLogout" />
    </main>
</template>

<script lang='ts'>
import { getWindowScroll } from '@/utils/adjust-screen.utils';
import { MessageToasts } from '@/utils/toast-messages.utils';
import { ToastService } from '@/utils/toast-service.utils';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'toolbar',
    data() {
        return {
            voteQuantity: 50 as number,
            voteQuantityString: '50' as string,
            visibleDeleteDialog: false as boolean,
            visibleEditDialog: false as boolean,
            visibleInfoDialog: false as boolean,
            visibleLogoutDialog: false as boolean,
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
                },
                {
                    label: 'Sair',
                    icon: 'pi pi-sign-out',
                    command: () => {
                        this.openLogoutDialog(this.visibleLogoutDialog);
                    }
                }
            ],
            isToggleOpen: false as boolean,
            toggleIcon: '' as string,
        }
    },
    methods: {
        showToggleOptions(event: Event): void {
            this.isToggleOpen = !this.isToggleOpen;
            const ref = this.$refs.menuPopUp as any;
            ref.toggle(event);
        },
        openDeleteDialog(isVisible: boolean): void {
            isVisible ? this.visibleDeleteDialog = false : this.visibleDeleteDialog = true;
        },
        openEditDialog(isVisible: boolean): void {
            isVisible ? this.visibleEditDialog = false : this.visibleEditDialog = true;
        },
        openLogoutDialog(isVisible: boolean): void {
            isVisible ? this.visibleLogoutDialog = false : this.visibleLogoutDialog = true;
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
        },
        onMenuHide(): void {
            this.isToggleOpen = false;
        },
        onLogout(): void {
            this.visibleLogoutDialog = false;
            getWindowScroll();
            location.reload();
        }
    }
})
</script>