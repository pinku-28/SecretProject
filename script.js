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

//for No, kailangan ko ng function na (DONE)
//magrarandomize ng position ng No everytime it is hovered (DONE)

function clickYes(){
    title.innerHTML = "YAY!";
    subtext.innerHTML = "you may request a movie (≧∇≦)ﾉ";
    removeButtons();
}

function hoverNo(){
    var i = Math.floor(Math.random() * (wrapperRect.width
        - buttonNoRect.width)) - 200 ;
    var j = Math.floor(Math.random() * (wrapperRect.height
        - buttonNoRect.height));

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

/*----------------------------------------------------------------*/
 
//create a function that creates chibiyanami.png (DONE)
//and accepts coordinates as arguments FunctionName(posX, posY) (DONE)

//create a function that gets mouse coordinates (DONE)
//and sets it as "posX" and "poxY" respectively (DONE)

document.addEventListener("click", function handleClick(event) {
    var chibi = document.getElementById("ayanami");
    
    posX = event.clientY - 35;
    posY = event.clientX - 22;
    createChibi(posX, posY)

    /* FOR DEBUGGING PURPOSES!!!!
       DELETE LATER!!!! */

    var textX = document.querySelector('.textX');
    var textY = document.querySelector('.textY');

    textX.innerHTML = posX;
    textY.innerHTML = posY;
})

function createChibi(coorX, coorY){
    var img = new Image(45); // width, height
    img.src = "chibiyanami.png";
    document.body.appendChild(img);

    img.style.position=  "absolute";
    img.style.top = coorX + "px";
    img.style.left = coorY + "px";
}

