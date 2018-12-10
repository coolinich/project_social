// Init User Service
const user = new UserService();
const img = new ImageService();
// Init User UI
const userUI = new UserUI();
// Init Image UI
const imageUI = new ImageUI();
//Init Message Module
const message = new Message();
message.init();


// UI elements
const inputCover = document.getElementById("coverImg");
const photosInputs = document.getElementById('userPhotos');
const photosCards = document.querySelector('.images-wrap .row.images');

// function gets all info about user and added it to layout 
function onLoad(e) {
    user.getInfo()
        .then((data) => {
            userUI.renderUserInfo(data);
            return data;
        })
        .then((data) => {
            imageUI.clearContainer();
            data.my_images.forEach((img) => imageUI.addImage(img));
        })
        .catch((error) => {
            console.log(error);
        });
}

// function for uploading and show new cover image in layout
function onCoverUpload(e) {
    if (inputCover.files.length) {
        const [newCover] = inputCover.files;
        user.uploadCover(newCover)
            .then(user.getInfo)
            .then((data) => userUI.setCover(data.cover))
            .catch((error) => {
                console.log(error);
            });
    }
}

// function for uploading and showing all user's images in layout
function onImagesUpload(e) {
    if (photosInputs.files.length) {
        const [...newImages] = photosInputs.files;
        user.uploadImages(newImages)
        .then((response) => {
            user.getInfo()
            .then((data) => {
                imageUI.clearContainer();
                data.my_images.forEach((img) => imageUI.addImage(img));
            })
            .catch(res => message.show({text: res.message, error: res.error}));
        })
        .catch(res => message.show({text: res.message, error: res.error}));
    }
}

// function for removing one image from server and layout
function onRemoveBtn(e) {
    if (e.target.parentElement.classList.contains('remove-wrap')) {
        const currentImgId = e.target.closest('.img-wrap').dataset.imgId;
        img.getInfo(currentImgId)
        .then((res) => {
            img.remove(res)
            .then((res) => imageUI.removeImage(currentImgId))
            .catch(res => message.show({text: res.message, error: res.error}));
         })
        .catch(res => message.show({text: res.message, error: res.error}));
    }
}

// Events
window.addEventListener("load", onLoad);
inputCover.addEventListener("change", onCoverUpload);
photosInputs.addEventListener("change", onImagesUpload);
photosCards.addEventListener("click", onRemoveBtn);