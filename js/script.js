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
    hairDiv = document.getElementsByClassName('hair')[0],
    clothesDiv = document.getElementsByClassName('clothes')[0];

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
        personSkin.classList.remove('person-skin-4');
        personClothes.classList.add('person-clothes-1');
        personClothes.classList.remove('person-clothes-4');
        // personHair.classList.add('person-hair-1');
        // for (let i = 3; i < 6; i++) {
        //     personHair.classList.remove(`person-hair-${i+1}`);
        //     slidesHair[i].style.display = 'none';
        // }
    } else {
        candidateSex = female.value;
        personSkin.classList.add('person-skin-4');
        personSkin.classList.remove('person-skin-1');
        personClothes.classList.add('person-clothes-4');
        personClothes.classList.remove('person-clothes-1');
        // personHair.classList.add('person-hair-4');
        // for (let i = 1; i < 3; i++) {
        //     personHair.classList.remove(`person-hair-${i+1}`);
        //     slidesHair[i].style.display = 'none';
        // }
    }
});

function skinSlider() {
    let slideIndex = 1,
        slides = skinDiv.getElementsByClassName('skin-color'),
        prev = skinDiv.querySelector('.prev'),
        next = skinDiv.querySelector('.next');

    showSlides(slideIndex);

    function showSlides(n){
        if (n > slides.length) {
            slideIndex = 1;
            console.log(`n > slideIndex = ${slideIndex}`);
        };
        if (n < 1) {
            slideIndex = slides.length;
        };
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
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
        slides[slideIndex - 1].style.display = 'block';
        if (male.checked) {
            personSkin.classList.add(`person-skin-${slideIndex}`);
            candidateSkin = `person-skin-${slideIndex}`;
            // console.log(candidateSkin);
        } else {
            personSkin.classList.add(`person-skin-${slideIndex+3}`);
            candidateSkin = `person-skin-${slideIndex+3}`;
            // console.log(candidateSkin);
        }
    };
    function plusSlides(n) {
        showSlides(slideIndex += n);
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
        slidesHair = hairDiv.getElementsByClassName('hair-style'),
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
