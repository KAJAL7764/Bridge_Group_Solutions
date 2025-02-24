let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector(".scrolling-wrapper");
    function scrollImages() {
        wrapper.scrollBy({ left: 250, behavior: 'smooth' });
        if (wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth) {
            wrapper.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }
    setInterval(scrollImages, 2000);
});