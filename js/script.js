let header = document.querySelector('header');
let linkMenu = document.querySelector('.m-memu a');
let closeMenu = document.querySelector('.close-menu');
let docWidth = window.innerWidth;

if (docWidth <= 1000) {
    linkMenu.addEventListener('click', e => {
        e.preventDefault();

        if (header.classList.contains('on')) {
            header.style.left = '-300px';
            header.classList.remove('on');
        } else {
            header.style.left = 0;
            header.classList.add('on');
        }
    });

    closeMenu.addEventListener('click', e => {
        e.preventDefault();

        header.style.left = '-300px';
        header.classList.remove('on');
    });

    $(document).mouseup(function (e) {
        let header = $('header');

        if (!header.is(e.target) &&
            header.has(e.target).length === 0) {
            $('header').css({
                left: '-300px'
            });
            $('header').removeClass('on');
        }
    });
}
