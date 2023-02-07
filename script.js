const wrapper = document.querySelector('.wrapper');
const title = document.querySelector('.title');
const subtext = document.querySelector('.subtext');
const buttonYes = document.querySelector('#buttonYes');
const buttonNo = document.querySelector('#buttonNo');
const header = document.querySelector('.header');
const forceNo = document.querySelector('.forceNo');
const choices = document.querySelector('.choices');

const wrapperRect = wrapper.getBoundingClientRect();
const buttonNoRect = buttonNo.getBoundingClientRect();

//f̶o̶r̶ N̶o̶,̶ k̶a̶i̶l̶a̶n̶g̶a̶n̶ k̶o̶ n̶g̶ f̶u̶n̶c̶t̶i̶o̶n̶ n̶a̶ (̶D̶O̶N̶E̶)̶
//m̶a̶g̶r̶a̶r̶a̶n̶d̶o̶m̶i̶z̶e̶ n̶g̶ p̶o̶s̶i̶t̶i̶o̶n̶ n̶g̶ N̶o̶ e̶v̶e̶r̶y̶t̶i̶m̶e̶ i̶t̶ i̶s̶ h̶o̶v̶e̶r̶e̶d̶ (̶D̶O̶N̶E̶)̶

function clickYes(){
    title.innerHTML = "YAY!";
    subtext.innerHTML = "you may request a movie (≧∇≦)ﾉ";
    removeButtons();
}

function hoverNo(){
    var i = Math.floor(Math.random() * (wrapperRect.width
        - buttonNoRect.width)) - 150;
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
 
//c̶r̶e̶a̶t̶e̶ a̶ f̶u̶n̶c̶t̶i̶o̶n̶ t̶h̶a̶t̶ c̶r̶e̶a̶t̶e̶s̶ c̶h̶i̶b̶i̶y̶a̶n̶a̶m̶i̶.̶p̶n̶g̶ (̶D̶O̶N̶E̶)̶
//a̶n̶d̶ a̶c̶c̶e̶p̶t̶s̶ c̶o̶o̶r̶d̶i̶n̶a̶t̶e̶s̶ a̶s̶ a̶r̶g̶u̶m̶e̶n̶t̶s̶ F̶u̶n̶c̶t̶i̶o̶n̶N̶a̶m̶e̶(̶p̶o̶s̶X̶,̶ p̶o̶s̶Y̶)̶ (̶D̶O̶N̶E̶)̶

//c̶r̶e̶a̶t̶e̶ a̶ f̶u̶n̶c̶t̶i̶o̶n̶ t̶h̶a̶t̶ g̶e̶t̶s̶ m̶o̶u̶s̶e̶ c̶o̶o̶r̶d̶i̶n̶a̶t̶e̶s̶ (̶D̶O̶N̶E̶)̶
//a̶n̶d̶ s̶e̶t̶s̶ i̶t̶ a̶s̶ "̶p̶o̶s̶X̶"̶ a̶n̶d̶ "̶p̶o̶x̶Y̶"̶ r̶e̶s̶p̶e̶c̶t̶i̶v̶e̶l̶y̶ (̶D̶O̶N̶E̶)̶

document.addEventListener("click", function handleClick(event) {    
    posX = event.clientY - 35;
    posY = event.clientX - 22;
    createChibi(posX, posY)
})

function createChibi(coorX, coorY){
    var img = new Image(45); // width, height
    img.src = "chibiyanami.png";
    document.body.appendChild(img);

    img.className += "animated";

    img.style.top = coorX + "px";
    img.style.left = coorY + "px";

    img.style.transform = "rotate(" + Math.random() * 360 + "deg)";

    function deleteChibi(){
        img.remove();
    }

    setTimeout(deleteChibi, 900);
}