const logo = document.querySelector(".logo")
const mainList = document.querySelector(".main-list")
const sliderButtonNext = document.querySelector(".slider-button-next")
const sliderButtonPrev = document.querySelector(".slider-button-prev")
const sliderPerView = 4;
const sliders = document.querySelectorAll(".swiper-slide")
const tabs = document.querySelector(".slider-tabs")
const tabsPerView = sliders.length / sliderPerView;
 
logo.addEventListener("click", function (e) {
    e.stopPropagation()
    mainList.classList.add("show")
});
mainList.addEventListener("click", function (e) {
    e.stopPropagation()
    mainList.classList.remove("show")
});
var slider = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
    breakpoints: {
        800: {
            slidesPerView: 2
        },
        1024: {
            sliderPerView: 3
        }
    }


})

tabs.innerHTML = "";

for (let i = 0; i < tabsPerView; i++) {
    // tabs.innerHTML += `<div class="tab">
    //                     Категория ${i+1}
    //                    </div>`
    let tab = document.createElement("div")
    tab.classList.add("tab")
    tab.innerText = `Категория ${i + 1}`
    if (i === 0) {
        tab.classList.add("active")
    }
    tab.dataset.index = i;
    tabs.append(tab)
    tab.addEventListener("click", function () {
        console.log("activeIndex", slider.activeIndex);
        console.log("tabsPerView", tabsPerView);
        console.log("index", i)

    })
}
slider.on("slideChange", function () {
    console.log("activeIndex", slider.activeIndex);
    console.log("tabsPerView", tabsPerView);
    console.log("real.Index", slider.realIndex);
    document.querySelectorAll(".slider-tabs .tab").forEach(tab => {
        tab.classList.remove("active");
        if (tab.dataset.index <= slider.realIndex + tabsPerView && tab.dataset.index >= slider.realIndex) {
            tab.classList.add("active");


        }
    })
})
$(document).ready(function () {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
    });
    $('.slick-button-prev').on('click', function (){
        $('.slick-slider').slick('slickPrev');

    })
    $('.slick-button-next').on('click', function (){
        $('.slick-slider').slick('slickNext');

    })
});



