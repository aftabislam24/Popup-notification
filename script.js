let submitBtn = document.querySelector(`.submit`);
let popupBody = document.querySelector(`.pop-up`);
let closePopupBtn = document.querySelector(`.close-popup`);

function openPopup(){
    popupBody.classList.add('display-popup')
}
function closePopup(){
    popupBody.classList.remove(`display-popup`);
}

submitBtn.addEventListener(`click`,openPopup);
closePopupBtn.addEventListener(`click`,closePopup);