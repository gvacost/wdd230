document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = document.querySelectorAll('main-scroll');

    // var options = {
    //     root: null, // use the viewport as the root
    //     rootMargin: '0px',
    //     threshold: 0.5 // trigger when 50% of the image is visible
    // };

    var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var lazyImage = entry.target;
                lazyImage.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
                lazyImage.classList.add('loaded');
                imageObserver.unobserve(lazyImage);
            }
        });
    }, options);

    lazyImages.forEach(function(lazyImage) {
        imageObserver.observe(lazyImage);
    });
});
