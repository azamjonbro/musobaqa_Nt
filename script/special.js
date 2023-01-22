let specialOffset = 0; // смещение сверху
let specialScrollOffset = 0 // смещение скрола
const sliderSpecialLine = document.querySelector('.special__slider-line');
const sliderSpecialCursor = document.querySelector('.special__slider-scroll-cursor');

// работа слайдера 

document.querySelector('.special__slider-down-btn').addEventListener('click', function(){
    specialOffset = specialOffset + 184;
    if (specialOffset > 368) {
        specialOffset = 0;
    }
    sliderSpecialLine.style.top = -specialOffset + 'px';
});

document.querySelector('.special__slider-up-btn').addEventListener('click', function(){
    specialOffset = specialOffset - 184;
    if (specialOffset < 0) {
        specialOffset = 368;
    }
    sliderSpecialLine.style.top = -specialOffset + 'px';
});

// работа слайдера 

// работа скрола

document.querySelector('.special__slider-down-btn').addEventListener('click', function(){
    specialScrollOffset = specialScrollOffset + 40;
    if (specialScrollOffset > 80) {
        specialScrollOffset = 0;
    }
    sliderSpecialCursor.style.bottom = -specialScrollOffset + '%';
});

document.querySelector('.special__slider-up-btn').addEventListener('click', function(){
    specialScrollOffset = specialScrollOffset - 40;
    if (specialScrollOffset < 0) {
        specialScrollOffset = 80;
    }
    sliderSpecialCursor.style.bottom = -specialScrollOffset + '%';
});

// работа скрола


