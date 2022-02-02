var box = document.getElementById('notf')
var down = false;

function togNotf() {
    if (down) {
        box.style.display = 'none';
        down = false;
    }else {
        box.style.display = 'block';
        down = true;
    }
}
