<template>
    <main class="card flex justify-center">
        <Dialog :visible="visible" :closable="false" modal pt:root:class="!border-0 !bg-transparent"
            pt:mask:class="backdrop-blur-sm">
            <form @submit.prevent="onSubmit">
                <div class="flex flex-col px-8 py-8 gap-6 rounded-2xl"
                    style="background-image: radial-gradient(circle at left top, #1F3A78, #000000);">
                    <img :src="loginImage" alt="Imagem de martelo da caixa de Login" class="block mx-auto w-10 h-10" />
                    <div class="inline-flex flex-col gap-2">
                        <label for="username" class="text-indigo-100 font-semibold">Matrícula do Portal</label>
                        <InputMask v-model="inputUserRegistry" id="registration" mask="9-9999999999"
                            class="!bg-white/20 !border-0 !p-4 !text-white w-80" />
                    </div>
                    <div class="inline-flex flex-col gap-2">
                        <label for="password" class="text-indigo-100 font-semibold">Senha do Portal</label>
                        <InputText v-model="inputUserPassword" id="password" maxlength="50"
                            class="!bg-white/20 !border-0 !p-4 !text-white w-80" type="password" />
                    </div>
                    <div class="flex items-center gap-4">
                        <Button label="Entrar" type="submit" text
                            class="!p-4 w-full !text-white !border !border-[#1F3A78] hover:!bg-white/10" />
                    </div>
                </div>
            </form>
        </Dialog>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            loginImage: require('@/assets/images/law-hammer.svg'),
            inputUserRegistry: this.userRegistry,
            inputUserPassword: this.userPassword,
        }
    },
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        userRegistry: {
            type: String,
            required: true
        },
        userPassword: {
            type: String,
            required: true
        },
    },
    methods: {
        onSubmit(): void {
            this.$emit('user-login', { registry: this.inputUserRegistry, password: this.inputUserPassword });
        }
    }
});
</script>
