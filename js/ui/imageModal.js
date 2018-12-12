class ImageModal {
    constructor() {
        this._imageInfoContainer = document.querySelector("#imageModal .current-image-info");
        this._imgTag = document.querySelector(".current-image img");
        this._commentContainer = document.querySelector(".current-image-comments-wrap");
        this._loader = document.getElementById("loading");
    }

    // function for rendering content in modal (calls all required methods)
    renderInfo(image) {
        this.clearModal();
        this.clearComments();
        this.setBaseInfo(image);
        this.setImg(image);
        this.setComments(image);
        this.loaderToggle();
    }

    // function for updating only blocks of comments in modal
    updateCommentsInfo(image) {
        this.clearComments();
        this.setComments(image);
    }

    // function for changing states of loader in modal
    loaderToggle() {
        this._loader.classList.toggle("hidden");
    }

    // function adds info about image to modal layout
    setBaseInfo(image) {
        const template = ImageModal._basicInfoTemplate(image);
        this._imageInfoContainer.insertAdjacentHTML("afterbegin", template);
    }

    // function adds URL of image to modal layout
    setImg({url}) {
        this._imgTag.src = url;
    }

    // function adds all comments for image to layout
    setComments({comments, owner}) {
        let template = "";
        comments.forEach((comment) => template += ImageModal._commentTemplate(comment, owner._id));
        this._commentContainer.insertAdjacentHTML("afterbegin", template);
    }

    // clears container with info about image
    clearModal() {
        this._imageInfoContainer.innerHTML = "";
    }

    // clears container with comments
    clearComments() {
        this._commentContainer.innerHTML = "";
    }
    
    // template of one comment
    static _commentTemplate({owner, avatar, full_name, text, time_update, _id, sub_comments}, ownerId) {
        const currentUserId = localStorage.getItem("social_user_id");
        const isOwner = currentUserId == owner || currentUserId == ownerId;
        return `
        <div class="comment-item" data-comment-id="${_id}" mb-4">
            <div class="comment-item-details d-flex">
                <div class="comment-owner-avatar">
                    <img src="${avatar}" alt="">
                </div>
                <!-- /.comment-owner -->
                <div class="comment-item-info d-flex flex-column">
                    <h6 class="font-weight-bold">${full_name}</h6>
                    <p class="comment-text">${text}</p>
                    <div class="edit-comment-form mt-4 d-none">
                        <form name="editCommentForm-${_id}">
                            <input type="text" name="editedComment-${_id}" id="editedComment-${_id}" class="form-control form-control-sm" value="${text}" required>
                            <button type="submit" class="btn btn-primary btn-sm mt-3">Submit</button>
                        </form>
                    </div>                       
                    <!-- /.edit-comment-form -->
                    <span class="text-secondary">${time_update}</span>
                </div>
                <!-- /.comment-item-info -->
                <div class="ml-auto">
                    ${isOwner ? '<div class="edit-comment-wrap"><i class="fas fa-edit"></i></div> <div class="delete-comment-wrap"><i class="fas fa-trash-alt"></i></div>': ''}
                </div>
            </div>
            <!-- /.comment-item-details -->
            <div class="sub-comments"></div>
            <!-- /.sub-comments -->
        </div>
        <!-- /.comment-item -->
        `;
    }

    // template of image info 
    static _basicInfoTemplate({_id, owner, views, likes}) {
        return `
            <div class="owner-info d-flex align-items-center">
                <div class="owner-avatar">
                    <img src="${owner.avatar}" alt="">
                </div>
                <!-- /.owner-avatar -->
                <div class="d-flex flex-column">
                    <span class="font-weight-bold">${owner.full_name}</span>
                    <span class="text-secondary">${owner.city}</span>
                </div>
            </div>
            <!-- /.owner-info -->
            <div class="current-image-stats d-flex ml-auto" data-img-id="${_id}">
                <div class="views-count d-flex flex-column align-items-center">
                    <i class="fas fa-eye"></i>
                    <span class="font-weight-bold">${views.length}</span>
                </div>
                <div class="likes-count d-flex flex-column align-items-center ml-4">
                    <i class="fas fa-thumbs-up"></i>
                    <span class="font-weight-bold">${likes.length}</span>
                </div>
            </div>
            <!-- /.image-statistics -->
        `;
    }
}