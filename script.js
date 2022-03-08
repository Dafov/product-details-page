const COLOR_BTNS = document.querySelectorAll(".color");

COLOR_BTNS.forEach(color => {
    color.addEventListener('click', () => {
        let colorNameClass = color.className;
        if(!color.classList.contains('color-active')){
            let colorName = colorNameClass.slice(colorNameClass.indexOf('-') + 1, colorNameClass.length);
            resetActiveBtns();
            color.classList.add('color-active');
            setNewColor(colorName)
        }
    });
})

// resetting all color btns
function resetActiveBtns(){
    COLOR_BTNS.forEach(color => {
        color.classList.remove('color-active');
    });
}

// set new color on the banner right 
function setNewColor(color){
    document.querySelector('.product-img').src = `images/tshirt-${color}.png`;
}