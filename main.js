window.onload = init;

function init() {
    const images = document.getElementsByTagName("img");
    for (i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;

    }
}

function showAnswer(eventObj) {
    const image = eventObj.target;

    let name = image.id;
    name = "/image/" + name + ".jpg";
    image.src = name;
    setTimeout(reblur, 1500, image);
}

function reblur(image) {
    var name = image.id;
    name = "/image/" + name + "blur.jpg";
    image.src = name;
}