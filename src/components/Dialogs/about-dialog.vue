<template>
    <main class="flex justify-center">
        <Dialog :visible="visible" @update:visible="closeDialog" maximizable modal :style="{ width: '50rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <template #header>
                <span class="text-2xl font-semibold">Sobre a página de votação Uni-Classe</span>
            </template>
            <p><span style="display: block;">Olá! Espero que esteja bem.</span><br>Essa página foi desenvolvida com o
                intuito de
                servir como um meio de
                votação de
                líder de sala para os estudantes dos cursos disponibilizados da
                Unifametro.<br>Aqui
                é possível que os alunos possam realizar o seu cadastro como líder e também escolher em quem gostariam
                de votar,
                assim como acompanhar o andamento final.<br> <span style="display: block" class="my-4">Com atenção,
                    desenvolvedora Beatriz Monteiro.</span>
            </p>
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
    }
});
</script>