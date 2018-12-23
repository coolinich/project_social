import { UserService } from './../services/user';
import { ImageService } from './../services/image';
import { AuthService } from './../services/auth';
import { CommentService } from './../services/comment';
import { SearchService } from './../services/search';
import { UserUI } from './../ui/user';
import { ImageUI } from './../ui/image';
import { ImageModal } from './../ui/imageModal';
import { Message } from './../modules/message';
import { SearchUI } from '../ui/search';
const $ = require('jquery');


export function HomePage() {
  
    // Init User Service
    const user = new UserService();
    // Init Image Service
    const imageService = new ImageService();
    // Init Auth Service
    const authService = new AuthService();
    // Init Comments Service
    const commentService = new CommentService();
    // Init Search Service 
    const searchService = new SearchService();
    // Init User UI
    const userUI = new UserUI();
    // Init Image UI
    const imageUI = new ImageUI();
    // Init Image Modal UI
    const imageModal = new ImageModal();
    // Init Search UI
    const searchUI = new SearchUI();
    //Init Message Module
    const message = new Message();
    message.init();

    // UI page elements
    const inputCover = document.getElementById("coverImg");
    const photosInputs = document.getElementById('userPhotos');
    const photosCards = document.querySelector('.images-wrap .row.images');
    const logoutBtn = document.querySelector('#logout');
    // UI search elements
    const searchForm = document.forms["search"];
    const searchInput = searchForm.elements[0];

    // UI modal elements
    const addCommentForm = document.forms["addCommentForm"];
    const addCommentInput = document.forms["addCommentForm"]["comment"];
    const commentsWrap = document.querySelector(".current-image-comments-wrap");

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
                    {
                        if (error === '403')
                            window.location = './login.html';
                        else console.log(`error from catch ${error}`)
                    }
                });
        }
    }

    // function for uploading and showing all user's images in layout
    function onImagesUpload(e) {
        if (photosInputs.files.length) {
            const [...newImages] = photosInputs.files;
            user.uploadImages(newImages)
            .then((res) => {
                user.getInfo()
                .then((data) => {
                    imageUI.clearContainer();
                    data.my_images.forEach((img) => imageUI.addImage(img));
                })
                .catch(res => message.show({text: res.message, error: res.error}));
            })
            .catch(res => {
                if (res === '403')
                    window.location = './login.html';
                else console.log(`error from catch ${res}`)
            });
        }
    }

    // function for removing one image from server and layout
    function onImageCard(e) {
        if (e.target.classList.contains('on-hover')) {
            const currentImgId = e.target.closest('.img-wrap').dataset.imgId;
            imageService.getInfo(currentImgId)
            .then((res) => {
                $('#imageModal').modal('toggle');
                return res;
            })
            .then((res) => imageModal.renderInfo(res))
            .catch(res => message.show({text: res.message, error: res.error}));
            return;
        }
        if (e.target.parentElement.classList.contains('remove-wrap')) {
            const currentImgId = e.target.closest('.img-wrap').dataset.imgId;
            imageService.getInfo(currentImgId)
            .then((res) => {
                imageService.remove(res)
                .then((res) => imageUI.removeImage(currentImgId))
                .catch(res => {
                    if (res === '403')
                    window.location = './login.html';
                    else console.log(`error from catch ${res}`)
                });
            })
            .catch(res => message.show({text: res.message, error: res.error}));
            return;
        }
    }

    // function for adding comment to image
    function onCommentSubmit(e) {
        e.preventDefault();
        const currentImgId = document.querySelector('.current-image-stats').dataset.imgId;
        
        if (addCommentInput.value) {
            commentService.add(currentImgId, addCommentInput.value)
            .then((res) => {
                imageService.getInfo(currentImgId)
                .then((res) => {
                    imageModal.updateCommentsInfo(res);
                    addCommentForm.reset();
                })
                .catch(res => console.log(res));
            })
            .catch(res => {
                if (res === '403')
                    window.location = './login.html';
                else console.log(`error from catch ${res}`)
            });
        }  else console.log('Empty edit field');  
    }

    // function which handles clicks to edit and remove buttons on comment and execute corresponding actions
    function onCommentClick(e) {
        const currentImgId = document.querySelector('.current-image-stats').dataset.imgId;

    /* Вопросы: 
    1. мне не нравится, что тут внутри обработчика еще один обработчик, но не придумала как сделать по-другому, 
    ведь изначально нет всех элементов в DOM;
    2. вопрос уникальности форм редактирования - я сделала через разметку и id, не знаю, есть ли еще варианты;
    3. тут и в onImageCard просится switch/case вместо if, но не знаю, как для него написать условия
    */    
        if (e.target.parentElement.classList.contains('edit-comment-wrap')) {
            const commentId = e.target.closest("[data-comment-id]").dataset.commentId;
            const commentTextArea = document.querySelector(`[data-comment-id="${commentId}"] p.comment-text`);
            const commentEditForm = document.forms[`editCommentForm-${commentId}`];
            const editCommentInput = commentEditForm.elements[0];

            if (!editCommentInput.value) editCommentInput.value = commentTextArea.innerText; 

            commentTextArea.classList.toggle('d-none');
            commentEditForm.parentElement.classList.toggle('d-none');

            commentEditForm.addEventListener("submit", (e) => {
                e.preventDefault();
                commentService.edit(commentId, editCommentInput.value)
                .then((res) => {
                    if(res.error) console.log(`${res.message}`)
                    else {
                        imageService.getInfo(currentImgId)
                        .then((res) => {
                            imageModal.updateCommentsInfo(res);
                        })
                        .catch(res => console.log('Error with comments refresh'));
                        commentEditForm.reset();
                        }
                })
                .catch(res => {
                    if (res === '403')
                        window.location = './login.html';
                    else console.log(`error from catch ${res}`)
                });
            });

            return;   
        }
        
        if (e.target.parentElement.classList.contains('delete-comment-wrap')) {
            const commentId = e.target.closest("[data-comment-id]").dataset.commentId;
            commentService.remove(commentId, currentImgId)
            .then((res) => {
                imageService.getInfo(currentImgId)
                .then((res) => {
                    imageModal.updateCommentsInfo(res);
                })
                .catch(res => console.log('Error with comments refresh'));
            })
            .catch(res => {
                if (res === '403')
                    window.location = './login.html';
                else console.log(`error from catch ${res}`)
            });
            return;   
        }

    }

    // function which handles clicks and changes in search field
    function onSearchChange(e) {
        e.preventDefault();
        if (searchInput.value.length > 2) {
            searchService.searchUser(searchInput.value)
            .then((res) => {
                if (searchUI._searchResultsContainer.classList.contains('d-none'))
                searchUI._searchResultsContainer.classList.remove('d-none');
                
                if (res.length) {
                    searchUI.clearContainer();
                    res.forEach( user => searchUI.addSeachResult(user) );    
                } else {
                    searchUI.clearContainer();
                    searchUI.addPlainText("No search results, please, try another keyword");
                }
            })
            .catch(res => {
                if (res === '403')
                    window.location = './login.html';
                else {
                    console.log(`error from catch ${res}`)
                    searchUI.clearContainer();
                    searchUI.addPlainText("No search results, please, try another keyword");     
                }
            });
        }  else {
            searchUI.clearContainer();
            if (!searchUI._searchResultsContainer.classList.contains('d-none'))
                searchUI._searchResultsContainer.classList.add('d-none');
        }
    }

    // Events
    window.addEventListener("load", onLoad);
    inputCover.addEventListener("change", onCoverUpload);
    photosInputs.addEventListener("change", onImagesUpload);
    photosCards.addEventListener("click", onImageCard);
    addCommentForm.addEventListener("submit", onCommentSubmit);
    commentsWrap.addEventListener("click", onCommentClick);
    searchForm.addEventListener("submit", onSearchChange);
    searchInput.addEventListener("input", onSearchChange);
    logoutBtn.addEventListener("click", authService.logout);


    // Remove loader
    $('#imageModal').on('hidden.bs.modal', (e) => imageModal.loaderToggle());

}
