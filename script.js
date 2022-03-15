const colorButtons = document.querySelectorAll(".color");

colorButtons.forEach((color) => {
    color.addEventListener("click", () => {
        let colorNameClass = color.className;
        if (!color.classList.contains("color-active")) {
            let colorName = colorNameClass.slice(
                colorNameClass.indexOf("-") + 1,
                colorNameClass.length
            );
            resetActiveBtns();
            color.classList.add("color-active");
            setNewColor(colorName);

            // Fetch JSON
            fetch("https://api.jsonbin.io/b/622fe998061827674376e23c")
                .then((res) => res.json())
                .then((data) => {
                    switch (colorName) {
                        case "black":
                            renderData(data[0]);
                            break;
                        case "white":
                            renderData(data[1]);
                            break;
                        case "blue":
                            renderData(data[2]);
                            break;
                        case "green":
                            renderData(data[3]);
                            break;

                        // default:
                        //     appendData(data[1]);
                        //     break;
                    }
                })
                .catch((err) => console.error(err));
        }
    });
});

// resetting all color btns
function resetActiveBtns() {
    colorButtons.forEach((color) => {
        color.classList.remove("color-active");
    });
}

// set new color
function setNewColor(color) {
    document.querySelector(".product-img").src = `images/tshirt-${color}.png`;
}

// Render JSON to HTML
function renderData(data) {
    var heading = document.querySelector("#product-heading");
    heading.textContent = data.name;

    var productID = document.querySelector(".product-heading-id");
    productID.textContent = data.id;

    var price = document.querySelector(".product-price");
    price.textContent = data.price;

    var description = document.querySelector(".product-description");
    description.textContent = data.description;
}

var i = 0;
function buttonClick() {
    document.getElementById("nav-link-text").textContent = ++i;
}
