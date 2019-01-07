export class SearchUI {
    constructor() {
        this._searchResultsContainer = document.querySelector('.search-result');
    }

    // Add info about one found user to layout
    addSeachResult(user) {
        const template = SearchUI._searchResultTemplate(user);
        this._searchResultsContainer.insertAdjacentHTML("afterbegin", template);
    }

    // Add only plain text to search container
    addPlainText(text) {
        const template = SearchUI._emptySearchResultTemplate(text);
        this._searchResultsContainer.insertAdjacentHTML("afterbegin", template);
    }
    // clean container of search results
    clearContainer() {
        this._searchResultsContainer.innerHTML = "";
    }

    showContainer() {
        if (this._searchResultsContainer.classList.contains('d-none'))
        this._searchResultsContainer.classList.remove('d-none');
    }

    hideContainer() {
        if (!this._searchResultsContainer.classList.contains('d-none'))
        this._searchResultsContainer.classList.add('d-none');
    }

    // template of one item from search results
    static _searchResultTemplate({avatar, city, full_name}) {
        return `
        <div class="owner-info d-flex align-items-center">
        <div class="owner-avatar">
            <img src="${avatar}">
        </div>
        <!-- /.owner-avatar -->
        <div class="d-flex flex-column">
            <span class="font-weight-bold">${full_name}</span>
            <span>${city}</span>
        </div>
        `;
    }

    // template for the case when only text should be shown in search results container
    static _emptySearchResultTemplate(text) {
        return `
        <div class="d-flex flex-column">
            <span class="font-weight-bold">${text}</span>
        </div>        
        `;
    }
}