console.log("load rib");
var container = document.querySelectorAll('.container input');
container.forEach(el => {
    console.log(el);


    var currentLength = el.value.length;
    let maxLength = el.maxLength;
    let next = el;


    el.onkeyup = () => {
        currentLength = el.value.length;
        if (currentLength >= maxLength) {
            next = next.nextSibling;
            if (next == null) {
                console.log("null");
            }
        }
    };
});