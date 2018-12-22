// Libs
import 'jquery';
import 'bootstrap';
import 'popper.js';

// Styles
import './../css/style.css';

// Pages
import { LoginPage } from './controls/login';
import { SignupPage } from './controls/register';
import { HomePage } from './controls/home';
// Guard
import { AuthGuard } from './guard/auth.guard';
const guard = new AuthGuard();

const path = window.location.pathname;
const page = path.split('/').pop().slice(0, -5);


switch(page) {
    case 'login': 
        guard.check(page);    
        LoginPage();
        break;
    case 'index':
        guard.check(page);
        HomePage();
        break;
    case 'register':
        guard.check(page);    
        SignupPage();
        break;
}