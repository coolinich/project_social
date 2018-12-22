export class Validation {
    constructor(form) {
        this._form = form;
        this._inputs = this._form.querySelectorAll("[data-pattern]");
    }

    // Add event handlers for all _inputs on _form
    init() {
        this._setEvents();
    }

    // Checks if values in _inputs match corresponding data-pattern regexp and if not, marked input as invalid  
    check() {
        let state = true;

        this._inputs.forEach((input) => {
            const regExp = new RegExp(input.dataset.pattern);
            if (!regExp.test(input.value)) {
                input.classList.add("is-invalid");
                state = false;
            }
        });

        return state;
    }

    // Creates event handlers for all _inputs on _form for "focus" event
    _setEvents() {
        this._inputs.forEach((input) => input.addEventListener("focus", (e) => this._onFocusHandler(e)));
    }

    // Removes "is-invalid" class on element
    _onFocusHandler(e) {
        e.target.classList.remove("is-invalid");
    }
}