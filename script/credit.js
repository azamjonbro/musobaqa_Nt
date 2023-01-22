let creationOffset = 0; // смещение от левого края
let creationScrollOffset = 0 // смещение скрола
const creationSliderLine = document.querySelector('.creation__slider-line');
const creationSpecialCursor = document.querySelector('.creation__navigation-cursor');

// работа слайдера 

document.querySelector('.creation__navigation-btn2').addEventListener('click', function(){
    creationOffset = creationOffset + 340;
    if (creationOffset > 1020) {
        creationOffset = 0;
    }
    creationSliderLine.style.right = creationOffset + 'px';
});

document.querySelector('.creation__navigation-btn1').addEventListener('click', function(){
    creationOffset = creationOffset - 340;
    if (creationOffset < 0) {
        creationOffset = 1020;
    }
    creationSliderLine.style.right = creationOffset + 'px';
});

// работа слайдера 

document.querySelector('.creation__navigation-btn2').addEventListener('click', function(){
    creationScrollOffset = creationScrollOffset + 25;
    if (creationScrollOffset > 75) {
        creationScrollOffset = 0;
    }
    creationSpecialCursor.style.right = -creationScrollOffset + '%';
});

document.querySelector('.creation__navigation-btn1').addEventListener('click', function(){
    creationScrollOffset = creationScrollOffset - 25;
    if (creationScrollOffset < 0) {
        creationScrollOffset = 75;
    }
    creationSpecialCursor.style.right = -creationScrollOffset + '%';
});


