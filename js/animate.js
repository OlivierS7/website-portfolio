function isElementInViewport(elem) {
    let $elem = $(elem);

    // Get the scroll position of the page.
    let mid = $(window).scrollTop() + Math.floor($(window).height() / 4);

    // Get the position of the element on the page.
    let elemTop = Math.round( $elem.offset().top );
    let elemBottom = elemTop + $elem.height();
    return ((mid < elemBottom) && (mid > elemTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    let $elem = $('#competence .square');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});