class Message {
    constructor() {
        this._messageContainer;
    }

    // Adds container for messages and initials _messageContainer property
    init() {
        this._setContainer();
    }

    // Adds message to layout
    show({text, error}) {
        const template = Message._createMessageTemplate(text, error);
        this._messageContainer.insertAdjacentHTML("afterbegin", template);
    }

    // Creates container for messages
    _setContainer() {
        const template = "<div class='message-container'></div>";
        document.body.insertAdjacentHTML("afterbegin", template);
        this._messageContainer = document.querySelector(".message-container");
    }

    // Creates template for message
    static _createMessageTemplate(text, error) {
        return `
            <div class="alert ${error ? 'alert-danger' : 'alert-success'}">${text}</div>
        `;
    }
}