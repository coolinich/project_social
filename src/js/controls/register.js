import { AuthService } from './../services/auth';
import { Message } from './../modules/message';
import { Validation} from './../modules/validation';

export function SignupPage() {
    //Init signUp service
    //const signUp = new signUpService();

    //Init auth service
    const signUp = new AuthService();

    //Init Message Module
    const message = new Message();
    message.init();

    //Registation UI elements
    const form = document.forms["signUpForm"];
    const emailInput = form.elements["email"];
    const passwordInput = form.elements["password"];
    const nicknameInput = form.elements["nick_name"];
    const first_nameInput = form.elements["first_name"];
    const last_nameInput = form.elements["last_name"];
    const phoneInput = form.elements["phone"];
    const gender_orientationInput = form.elements["gender"];
    const cityInput = form.elements["city"];
    const countryInput = form.elements["country"];
    const date_of_birth_dayInput = form.elements["day_of_birth"];
    const date_of_birth_monthInput = form.elements["month_of_birth"];
    const date_of_birth_yearInput = form.elements["year_of_birth"];

    //Registration handler - validates data in Registration form, if correct - creates object with data from Registration form, calls for register function and shows message with result
    function submitHandler(e) {
        e.preventDefault();
        
        const validation = new Validation(form);
        validation.init();
        if (!validation.check()) return message.show({text: "Fill in all marked fields correctly", error: true});

        let newUser = {
        email: emailInput.value,
        password: passwordInput.value,
        nickname: nicknameInput.value,
        first_name: first_nameInput.value,
        last_name: last_nameInput.value,
        phone: phoneInput.value,
        gender_orientation: gender_orientationInput.value,
        city: cityInput.value,
        country: countryInput.value,
        date_of_birth_day: date_of_birth_dayInput.value,
        date_of_birth_month: date_of_birth_monthInput.value,
        date_of_birth_year: date_of_birth_yearInput.value
    }

        signUp.register(newUser)
            .then(res => {
                if(!res.error) {
                    message.show({text: res.message, error: res.error});
                    setTimeout(() => window.location = "login.html", 3000);
                } else {
                    message.show({text: res.message, error: res.error});
                    passwordInput.value = '';
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Event handlers for registration form
    form.addEventListener("submit", submitHandler); 

}

