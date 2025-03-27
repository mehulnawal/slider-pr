let next = document.getElementById("next");
let prev = document.getElementById("prev");
let img1 = document.getElementById("img1");
let h1Text = document.getElementById("h1Text");


// let images = ['url(./img1.jpeg)', 'url(./creed.jpg)', 'url(./batman.jpg)', 'url(./jeet.jpg)', 'url(./john-wick.jpg)', 'url(./thor.jpg)']

let images = ['./img1.jpeg', './creed.jpg', './batman.jpg', './jeet.jpg', './john-wick.jpg', './thor.jpg']

let i = 0;

next.addEventListener("click", function () {
    i++;
    if (i === images.length) {
        i = 0;
    }

    if (i == 0) {
        h1Text.innerText = "Captain America"
    }
    else if (i == 1) {
        h1Text.innerText = "Micheal B. Jordan"
    }
    else if (i == 2) {
        h1Text.innerText = "Batman"
    }
    else if (i == 3) {
        h1Text.innerText = "jeet Selal"
    }
    else if (i == 4) {
        h1Text.innerText = "John Wick"
    }
    else if (i == 4) {
        h1Text.innerText = "Thor"
    }
    img1.src = images[i];
});

prev.addEventListener("click", function () {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    img1.style.backgroundImage = images[i];
});

