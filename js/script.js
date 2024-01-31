$(document).ready(function () {

    $(".mag").draggable();

    const scrollConfPos = [
        {name: '.navbar-brand', pos: 120},
        {name: '#contactMail', pos: 2200}
    ];

    function isScrolledIntoView(elem) {
        const minTopMargin = 120;
        const docViewTop = $(window).scrollTop();
        if (docViewTop < minTopMargin) {
            return false;
        }
        const docViewBottom = docViewTop + $(window).height();
        const elemTop = $(elem).offset().top;
        const elemBottom = elemTop + $(elem).height();
        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
    }

    $(window).scroll(function () {

        const activeElements = scrollConfPos
            .filter(c => isScrolledIntoView(c.name))
            .map(c => $(c.name));
        const inactiveElements = scrollConfPos
            .filter(c => !isScrolledIntoView(c.name))
            .map(c => $(c.name));

        for (const el of activeElements) {
            el.removeClass('hidden');
            el.addClass('visible');
        }
        for (const el of inactiveElements) {
            el.addClass('hidden');
            el.removeClass('visible');
        }
    });


    const modalEl = $('#exampleModal');
    const videoEl = document.getElementById("video");

    modalEl?.on('show.bs.modal', function (event) {
        try {
            videoEl.play();
        } catch (e) {
            console.warn(e)
        }
    });
    modalEl?.on('hide.bs.modal', function (event) {
        try {
            videoEl.pause();
        } catch (e) {
            console.warn(e)
        }
    });

});
