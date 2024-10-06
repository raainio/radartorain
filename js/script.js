$(document).ready(function () {

    $(".mag2")?.draggable({
        drag: function (event, ui) {

            const width = $(".map2").width();
            const height = $(".map2").height();
            const magSize = $(".mag2").width();

            const minLeft = Math.min(width - magSize, ui.position.left);
            const minTop = Math.min(height - magSize, ui.position.top);
            const maxLeft = Math.max(0, ui.position.left);
            const maxTop = Math.max(0, ui.position.top);
            const maxLeftDone = maxLeft === 0;
            const maxTopDone = maxTop === 0;
            const minLeftDone = minLeft === width - magSize;
            const minTopDone = minTop === height - magSize;

            if (maxLeftDone || maxTopDone || minLeftDone || minTopDone) {
                console.log('max done');
                if (maxLeftDone) {
                    ui.position.left = maxLeft;
                }
                if (minLeftDone) {
                    ui.position.left = minLeft;
                }
                if (maxTopDone) {
                    ui.position.top = maxTop;
                }
                if (minTopDone) {
                    ui.position.top = minTop;
                }
            }

            const posX = 0 - ui.position.left;
            const posY = 0 - ui.position.top;

            $(".mag2").css('backgroundPositionX', posX);
            $(".mag2").css('backgroundPositionY', posY);
            $(".mag2").css('backgroundSize', width);
        }
    });

    const scrollConfPos = [
        {name: '.navbar-brand', pos: 220},
        {name: '.title2', pos: 220},
        {name: '#contactMail', pos: 2200}
    ];

    function isScrolledIntoView(elem) {
        const minTopMargin = 220;
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

    $('#google_translate_element').bind('DOMNodeInserted', function (event) {
        $('.goog-te-menu-value span:first').html('LANGUAGE');
        const skipT = $('.goog-te-menu-frame.skiptranslate');
        setTimeout(function () {
            skipT.contents().find('.goog-te-menu2-item-selected .text').html('LANGUAGE');
        }, 100);
    });

});
