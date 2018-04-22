let popupBtn = document.getElementById('popup-btn'),
    overlay = document.getElementsByClassName('overlay')[0],
    custom = document.getElementsByClassName('custom')[0]
    main = document.getElementsByClassName('main')[0],
    inputs = document.getElementsByTagName('input'),
    iname = document.getElementById('name'),
    candidateName = '',
    age = document.getElementById('age'),
    candidateAge = '',
    male = document.getElementById('male'),
    female = document.getElementById('female'),
    candidateSex = '',
    views = document.getElementById('select'),
    candidateViews = '',
    bio = document.getElementById('bio'),
    candidateBio = '',
    personSkin = document.getElementById('person-skin'),
    candidateSkin = 0,
    personClothes = document.getElementById('person-clothes'),
    candidateClothes = 0,
    personHair = document.getElementById('person-hair'),
    candidateHair = 0,
    candidateShoes = 0,
    skinDiv = document.getElementsByClassName('skin')[0],
    slidesSkin = skinDiv.getElementsByClassName('skin-color'),
    hairDiv = document.getElementsByClassName('hair')[0],
    slidesHair = hairDiv.getElementsByClassName('hair-style'),
    clothesDiv = document.getElementsByClassName('clothes')[0],
    slidesClothes = clothesDiv.getElementsByClassName('clothes-style');

popupBtn.addEventListener('click', function(){
    overlay.style.display = 'none';
    main.style.display = 'none';
    custom.style.display = 'flex';
});

custom.addEventListener('change', function(){
    candidateName = iname.value;
    candidateAge = age.value;
    candidateViews = views.options[views.selectedIndex].value;
    candidateBio = bio.value;
    if (male.checked) {
        candidateSex = male.value;
        personSkin.classList.add('person-skin-1');
        for (let i = 0; i < 3; i++) {
            personSkin.classList.remove(`person-skin-${i+1}`);
            slidesSkin[i].style.display = 'none';
        }
        slidesSkin[0].style.display = 'block';
        personHair.classList.add('person-hair-1');
        slidesHair[0].style.display = 'block';
        for (let i = 3; i < 6; i++) {
            personHair.classList.remove(`person-hair-${i+1}`);
            slidesHair[i].style.display = 'none';
        }
        slidesClothes[0].style.display = 'block';
        for (let i = 3; i < 6; i++) {
            personClothes.classList.remove(`person-clothes-${i+1}`);
            slidesClothes[i].style.display = 'none';
        }
        personClothes.classList.add('person-clothes-1');
        personClothes.classList.remove('person-clothes-4');
    } else {
        candidateSex = female.value;
        personSkin.classList.add('person-skin-4');
        for (let i = 0; i < 3; i++) {
            personSkin.classList.remove(`person-skin-${i+1}`);
            slidesSkin[i].style.display = 'none';
        }
        slidesSkin[0].style.display = 'block';
        personHair.classList.add('person-hair-4');
        slidesHair[3].style.display = 'block';
        for (let i = 0; i < 3; i++) {
            personHair.classList.remove(`person-hair-${i+1}`);
            slidesHair[i].style.display = 'none';
        }
        slidesClothes[3].style.display = 'block';
        for (let i = 0; i < 3; i++) {
            personClothes.classList.remove(`person-clothes-${i+1}`);
            slidesClothes[i].style.display = 'none';
        }
        personClothes.classList.add('person-clothes-4');
        personClothes.classList.remove('person-clothes-1');
    }
});

function skinSlider() {
    let slideSkinIndex = 1,
        prev = skinDiv.querySelector('.prev'),
        next = skinDiv.querySelector('.next');

    showSlides(slideSkinIndex);

    function showSlides(n){
        if (n > slidesSkin.length) {
            slideSkinIndex = 1;
        };
        if (n < 1) {
            slideSkinIndex = slidesSkin.length;
        };
        for (let i = 0; i < slidesSkin.length; i++) {
            slidesSkin[i].style.display = 'none';
            if (male.checked) {
                for (let j = 1; j < 4; j++) {
                    personSkin.classList.remove(`person-skin-${j}`);
                }
            } else {
                for (let j = 4; j < 7; j++) {
                    personSkin.classList.remove(`person-skin-${j}`);
                }
            }
        };
        slidesSkin[slideSkinIndex - 1].style.display = 'block';
        if (male.checked) {
            personSkin.classList.add(`person-skin-${slideSkinIndex}`);
            candidateSkin = `person-skin-${slideSkinIndex}`;
            // console.log(candidateSkin);
        } else {
            personSkin.classList.add(`person-skin-${slideSkinIndex+3}`);
            candidateSkin = `person-skin-${slideSkinIndex+3}`;
            // console.log(candidateSkin);
        }
    };
    function plusSlides(n) {
        showSlides(slideSkinIndex += n);
    };
    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }
    prev.addEventListener('click', function(){
        plusSlides(-1);
    });
    next.addEventListener('click', function(){
        plusSlides(1);
    });
};
skinSlider();

function hairSlider() {
    let slideHairIndex = 1,
        prevHair = hairDiv.querySelector('.prev'),
        nextHair = hairDiv.querySelector('.next'); 

    showHairSlides(slideHairIndex);

    function showHairSlides(n){

        if (male.checked) {
            for (let k = 3; k < slidesHair.length; k++) {
                slidesHair[k].style.display = 'none';
                personHair.classList.remove(`person-hair-${k+1}`);
            }
            if (n > slidesHair.length-3) {
                slideHairIndex = 1;
                console.log(`n > slideHairIndex = ${slideHairIndex}`);
            };
            if (n < 1) {
                slideHairIndex = slidesHair.length-3;
            };
            for (let i = 0; i < slidesHair.length-3; i++) {
                slidesHair[i].style.display = 'none';
                for (let j = 1; j < 4; j++) {
                    personHair.classList.remove(`person-hair-${j}`);
                }
            };
            slidesHair[slideHairIndex - 1].style.display = 'block';
            personHair.classList.add(`person-hair-${slideHairIndex}`);
            candidateHair = `person-hair-${slideHairIndex}`;
        } else {
            for (let k = 0; k < slidesHair.length-3; k++) {
                slidesHair[k].style.display = 'none';
                personHair.classList.remove(`person-hair-${k+1}`);
            }
            if (n > slidesHair.length) {
                slideHairIndex = 4;
                console.log(`n > slideHairIndex = ${slideHairIndex}`);
            };
            if (n < 4) {
                slideHairIndex = slidesHair.length;
            };
            for (let i = 3; i < slidesHair.length; i++) {
                slidesHair[i].style.display = 'none';
                for (let j = 4; j < 7; j++) {
                    personHair.classList.remove(`person-hair-${j}`);
                }
            };
            slidesHair[slideHairIndex - 1].style.display = 'block';
            personHair.classList.add(`person-hair-${slideHairIndex}`);
            candidateHair = `person-hair-${slideHairIndex}`;
        }
    };

        function plusHairSlides(n) {
            showHairSlides(slideHairIndex += n);
        };

        prevHair.addEventListener('click', function(){
            plusHairSlides(-1);
        });
        nextHair.addEventListener('click', function(){
            plusHairSlides(1);
        });
    };
hairSlider();

function clothesSlider() {
    let slideClothesIndex = 1,
        prevClothes = clothesDiv.querySelector('.prev'),
        nextClothes = clothesDiv.querySelector('.next'); 

    showClothesSlides(slideClothesIndex);

    function showClothesSlides(n){

        if (male.checked) {
            for (let k = 3; k < slidesClothes.length; k++) {
                slidesClothes[k].style.display = 'none';
                personClothes.classList.remove(`person-clothes-${k+1}`);
            }
            if (n > slidesClothes.length-3) {
                slideClothesIndex = 1;
            };
            if (n < 1) {
                slideClothesIndex = slidesClothes.length-3;
            };
            for (let i = 0; i < slidesClothes.length-3; i++) {
                slidesClothes[i].style.display = 'none';
                for (let j = 1; j < 4; j++) {
                    personClothes.classList.remove(`person-clothes-${j}`);
                }
            };
            slidesClothes[slideClothesIndex - 1].style.display = 'block';
            personClothes.classList.add(`person-clothes-${slideClothesIndex}`);
            candidateClothes = `person-clothes-${slideClothesIndex}`;
        } else {
            for (let k = 0; k < slidesClothes.length-3; k++) {
                slidesClothes[k].style.display = 'none';
                personClothes.classList.remove(`person-clothes-${k+1}`);
            }
            if (n > slidesClothes.length) {
                slideClothesIndex = 4;
            };
            if (n < 4) {
                slideClothesIndex = slidesClothes.length;
            };
            for (let i = 3; i < slidesClothes.length; i++) {
                slidesClothes[i].style.display = 'none';
                for (let j = 4; j < 7; j++) {
                    personClothes.classList.remove(`person-clothes-${j}`);
                }
            };
            slidesClothes[slideClothesIndex - 1].style.display = 'block';
            personClothes.classList.add(`person-clothes-${slideClothesIndex}`);
            candidateClothes = `person-clothes-${slideClothesIndex}`;
        }
    };

        function plusClothesSlides(n) {
            showClothesSlides(slideClothesIndex += n);
        };

        prevClothes.addEventListener('click', function(){
            plusClothesSlides(-1);
        });
        nextClothes.addEventListener('click', function(){
            plusClothesSlides(1);
        });
    };
clothesSlider();
