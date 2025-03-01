const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const radio3 = document.getElementById('radio3');

const label1 = document.getElementById('auto-btn1');
const label2 = document.getElementById('auto-btn2');
const label3 = document.getElementById('auto-btn3');

function updateActiveLabel(selectedRadio) {
    [label1,label2,label3].forEach(label => label.classList.remove('slide-active'));

    const selectedLabel = document.querySelector(`label[for="${selectedRadio.id}"]`);

    if(selectedLabel) {
        selectedLabel.classList.add('slide-active');
    }
}

[radio1, radio2, radio3].forEach(radio => {
    radio.addEventListener('change', function() {
        updateActiveLabel(this)
    })
})

var counter = 1

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    updateActiveLabel(document.getElementById(`radio${counter}`));
    counter += 1
    if(counter > 3) {
        counter = 1;
    }
}, 5000)