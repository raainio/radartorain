$(document).ready(function () {

    // $(".mag")?.draggable();
    $(".mag2")?.draggable({
        drag: function (event, ui) {

            // Keep the left edge of the element
            // at least 100 pixels from the container
            // console.log('drag', ui);
            const width = $(".mag2").width();
            const height = $(".mag2").height();
            const width2 = $(".map2").width();
            const posX = 0 - ui.position.left;
            const posY = 0 - ui.position.top;
            console.log('posX', ui.position.left, posX);
            console.log('posY', ui.position.top, posY);

            $(".mag2").css('backgroundPositionX', posX);
            $(".mag2").css('backgroundPositionY', posY);
            $(".mag2").css('backgroundSize', width2);
            // ui.position.left = Math.min(100, ui.position.left);
            // console.log($('.mag2').css('backgroundPosition'));

        }
    }); // {scroll: true, containment: 'map'}

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


    const modalEl = $('#videoModal');
    const videoEl = document.getElementById("video");

    modalEl?.on('show.bs.modal', function (event) {
        try {
            videoEl?.play();
        } catch (e) {
            console.warn(e)
        }
    });
    modalEl?.on('hide.bs.modal', function (event) {
        try {
            videoEl?.pause();
        } catch (e) {
            console.warn(e)
        }
    });

});
