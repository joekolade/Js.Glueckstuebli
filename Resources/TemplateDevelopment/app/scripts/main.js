console.log('\'Allo \'Allo!');

var nav_ul = document.querySelector('.menu > ul');

var open_sub = function(elem) {
    if(!elem) return;
    var isOpen = elem.classList.contains('open') || false;

    if(nav_ul.querySelector('li.open')) {
        nav_ul.querySelector('li.open').classList.remove('open');
    }
    if(!isOpen){
        elem.classList.add('open');
    }
};

nav_ul.addEventListener('click', function(e){

    if(e.target.tagName == 'LI') {
        e.stopPropagation();
        open_sub(e.target);
        e.preventDefault();
    }
    if(e.target.tagName == 'UL') {
        e.stopPropagation();
        open_sub(e.target.parentNode);
        e.preventDefault();
    }
});


setTimeout(function () {
    document.body.classList.add('loaded');
}, 330);
