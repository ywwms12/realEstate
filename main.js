let opn = document.getElementById('opn');
let cls = document.getElementById('cls');
let list = document.getElementById('list');

opn.addEventListener('click', function() {
    opn.style.display = 'none';
    list.style.display = 'block';
});
cls.addEventListener('click', function() {
    opn.style.display = 'block';
    list.style.display = 'none';
});