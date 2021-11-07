var dark_theme = document.getElementById("theme-switcher");
dark_theme.onclick = function () {
    document.body.classList.toggle("switch-theme");
    if (document.body.classList.contains("switch-theme")) {
        dark_theme.src = "assets/imgs/moon2.png";
    } else {
        dark_theme.src = "assets/imgs/sun.png";
    }
};

document.addEventListener("mousemove", parallax);
function parallax(e) {
    var el = document.getElementById("myImage");
    const speed = el.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX * speed) / 500;
    const y = (window.innerHeight - e.pageY * speed) / 500;

    el.style.transform = "translateX(" + -x + "px) translateY(" + -y + "px)";
}

var cityImg = document.getElementById("cityImg");
var ciarr = ["assets/imgs/city_01.jpeg", "assets/imgs/city_02.jpeg"];
var indexI = 0;
cityImg.onclick = function () {
    indexI++;
    if (indexI == ciarr.length) indexI = 0;
    fadeOut(cityImg);
    cityImg.src = ciarr[indexI];
};

function fadeOut(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.05;
    }, 1);
};

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("week");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        fadeOut(x[i]);
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

function openForm() {
    document.getElementById("qform").style.display = "block";
}

function closeForm() {
    document.getElementById("qform").style.display = "none";
}

function submitForm() {
    document.getElementById("qform").style.display = "none";
}

function hideShowTextArea(value) {
    if (value == "Y") {
        document.getElementById("q5-l").style.display = "flex";
        document.getElementById("q5-ta").style.display = "flex";
    } else {
        document.getElementById("q5-l").style.display = "none";
        document.getElementById("q5-ta").style.display = "none";
    }
}

var menu = document.getElementById("topMenu");
var menubtn = document.getElementById("menu-btn");
var menuOpened = false;

menubtn.onclick = function () {
    const x = menu.offsetWidth;
    if (menuOpened) {
        menuOpened = false;
        var tx = 0;
        var timer = setInterval(function () {
            if (tx >= 3) {
                clearInterval(timer);
                menu.style.display = "none";
            }
            var px = menu.offsetLeft;
            console.log(px);
            menu.style.transform = "translateX(" + px + "px)";
            tx += 0.1;
        }, 1);

    } else {
        menu.style.display = "block";
        menuOpened = true;
        var tx = 0;
        var timer = setInterval(function () {
            if (tx >= 1) {
                clearInterval(timer);
            }
            var px = menu.offsetLeft;
            console.log(px);
            menu.style.transform = "translateX(" + -px + "px)";
            tx += 0.1;
        }, 1);
    }
}