function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.backgroundColor = color;
}

function openNav() {
    document.getElementById('toggle').style.width = "100%";
}

function closeNav() {
    document.getElementById('toggle').style.width = "0%";
}