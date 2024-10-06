import { ToastService } from '@/utils/toast-service.utils';
import { MessageToasts } from '@/utils/toast-messages.utils';

export function handleLogin(loginData: { registry: string, password: string }, context: any): void {
    const { registry, password } = loginData;
    context.userRegistry = registry;
    context.userPassword = password;

    if (password === '' || registry === '') {
        context.$toast.add(ToastService.error(MessageToasts.ERROR_USER_LOGIN, "Erro ao entrar"));
    } else {
        context.visibleRegistryDialog = false;
    }
}