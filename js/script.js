$(document).ready(function () {

    // ============================================
    // SHRINKING HEADER ON SCROLL
    // ============================================

    function handleNavbarScroll() {
        const navbar = $('#mainNav');
        const headerBanner = $('.header-banner');
        const headerBadge = $('#headerBadge');
        const scrollTop = $(window).scrollTop();
        const headerHeight = headerBanner.length ? headerBanner.outerHeight() : 100;

        // When scrolled past the header banner, add scrolled class
        if (scrollTop > headerHeight - 80) {
            navbar.addClass('navbar-scrolled');
        } else {
            navbar.removeClass('navbar-scrolled');
        }

        // Hide header badge when scrolling down
        if (scrollTop > 100) {
            headerBadge.addClass('hidden');
        } else {
            headerBadge.removeClass('hidden');
        }
    }

    // Initial check
    handleNavbarScroll();

    // Handle scroll
    $(window).scroll(function () {
        handleNavbarScroll();
        updateActiveNavLink();
    });

    // ============================================
    // SMOOTH SCROLL FOR NAVIGATION LINKS
    // ============================================

    $('a[href^="#"]').on('click', function (e) {
        const target = $(this.getAttribute('href'));

        if (target.length) {
            e.preventDefault();
            const navHeight = $('#mainNav').outerHeight();
            const offsetTop = target.offset().top - navHeight - 10; // Offset for fixed header + small margin

            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 800, 'swing');
        }
    });

    // ============================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // ============================================

    function updateActiveNavLink() {
        const navHeight = $('#mainNav').outerHeight();
        const scrollPos = $(window).scrollTop() + navHeight + 50;

        $('#mainNav .nav-link').each(function () {
            const currLink = $(this);
            const refElement = $(currLink.attr('href'));

            if (refElement.length &&
                refElement.position().top <= scrollPos &&
                refElement.position().top + refElement.height() > scrollPos) {
                $('#mainNav .nav-link').removeClass('active');
                currLink.addClass('active');
            }
        });
    }

    // ============================================
    // VIDEO MODAL HANDLERS
    // ============================================

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

    // ============================================
    // GOOGLE TRANSLATE CUSTOMIZATION
    // ============================================

    $('#google_translate_element').bind('DOMNodeInserted', function (event) {
        $('.goog-te-menu-value span:first').html('LANGUAGE');
        const skipT = $('.goog-te-menu-frame.skiptranslate');
        setTimeout(function () {
            skipT.contents().find('.goog-te-menu2-item-selected .text').html('LANGUAGE');
        }, 100);
    });

    // ============================================
    // SCROLL ANIMATIONS FOR ELEMENTS
    // ============================================

    function isScrolledIntoView(elem) {
        const docViewTop = $(window).scrollTop();
        const docViewBottom = docViewTop + $(window).height();
        const elemTop = $(elem).offset().top;
        const elemBottom = elemTop + $(elem).height();
        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
    }

    // Animate elements on scroll (if needed in future)
    $(window).scroll(function () {
        $('.fade-in-on-scroll').each(function () {
            if (isScrolledIntoView(this)) {
                $(this).addClass('visible');
            }
        });
    });

    // ============================================
    // MOBILE MENU AUTO-CLOSE
    // ============================================

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

});
