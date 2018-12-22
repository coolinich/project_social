import { AuthService } from './../services/auth';
import { Message } from './../modules/message';
import { Validation} from './../modules/validation';

export function LoginPage() {
    // Init Auth Service
    const auth = new AuthService();
    // Init Message Module
    const message = new Message();
    message.init();

    // Login UI elements
    const form = document.forms["loginForm"];
    const emailInput = form.elements["email"];
    const passwordInput = form.elements["password"];
    const formModal = document.forms["resetPswForm"];
    const emailModalInput = formModal["emailModal"];


    // Login handler - validates data in Login form, if correct - calls API to login and save user's data to localStorage
    function submitHandler(e) {
        e.preventDefault();

        const validation = new Validation(form);
        validation.init();

        if (!validation.check()) return message.show({text: "Fill in all marked fields correctly", error: true});
        
        auth.login(emailInput.value, passwordInput.value)
            .then((res) => {
                if (!res.error) {
                    localStorage.setItem("social_user_id", res.id);
                    localStorage.setItem("social_user_token", res.token);
                    window.location = "index.html";
                } else {
                    message.show({text: res.message, error: res.error});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Reset password handler - validates data in Reset Password form in modal dialog, if correct - calls API to reset password
    function resetPswHandler(e) {
        e.preventDefault();

        const validation = new Validation(formModal);
        validation.init();

        if (!validation.check()) return message.show({text: "Fill in valid email", error: true});

        auth.resetPsw(emailModalInput.value)
            .then((res) => {
                message.show({text: res.message, error: res.error});
                if (!res.error) {
                    $('.modal').modal('toggle');
                    formModal.reset();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    
    }


    form.addEventListener("submit", submitHandler);
    formModal.addEventListener("submit", resetPswHandler);
}
