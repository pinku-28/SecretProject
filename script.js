const wrapper = document.querySelector('.wrapper');
const title = document.querySelector('.title');
const subtext = document.querySelector('.note');
const buttonYes = document.querySelector('#buttonYes');
const buttonNo = document.querySelector('#buttonNo');
const header = document.querySelector('.header');
const forceNo = document.querySelector('.forceNo');
const choices = document.querySelector('.choices');

const wrapperRect = wrapper.getBoundingClientRect();
const buttonNoRect = buttonNo.getBoundingClientRect();

function clickYes(){
    title.innerHTML = "YAY!";
    subtext.innerHTML = "you may request a movie (≧∇≦)ﾉ";
    removeButtons();
}

function hoverNo(){
    const i = Math.floor(Math.random() * (wrapperRect.width
        - buttonNoRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height
        - buttonNoRect.height)) + 1;

    buttonNo.style.left = i + "px";
    buttonNo.style.top = j + "px";
}

function clickNo(){
    title.innerHTML = ":<";
    subtext.innerHTML = "awww okay 😉"
    removeButtons();
}

function removeButtons(){;
    forceNo.remove();
    buttonNo.remove();
    buttonYes.remove();
    choices.remove();
}


//for No, kailangan ko ng function na
//magrarandomize ng position ng No everytime it is hovered