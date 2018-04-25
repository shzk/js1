let popupBtn = document.getElementById('popup-btn'),
    overlay = document.getElementsByClassName('overlay')[0],
    custom = document.getElementsByClassName('custom')[0]
    main = document.getElementsByClassName('main')[0],
    inputs = document.getElementsByTagName('input'),
    iname = document.getElementById('name'),
    candidateName = '',
    age = document.getElementById('age'),
    candidateAge = 0,
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
    skinDiv = document.getElementsByClassName('skin')[0],
    slidesSkin = skinDiv.getElementsByClassName('skin-color'),
    hairDiv = document.getElementsByClassName('hair')[0],
    slidesHair = hairDiv.getElementsByClassName('hair-style'),
    clothesDiv = document.getElementsByClassName('clothes')[0],
    slidesClothes = clothesDiv.getElementsByClassName('clothes-style'),
    readyBtn = document.getElementById('ready'),
    mainCards = document.getElementsByClassName('main-cards')[0],
    // candidateDiv = document.getElementsByClassName('main-cards-item')[0].cloneNode(true),
    reset = document.getElementById('reset'),
    voting = document.getElementById('voting'),
    crime = document.getElementById('crime');

popupBtn.addEventListener('click', function(){
    overlay.style.display = 'none';
    main.style.display = 'none';
    custom.style.display = 'flex';
});
if (!iname.value || iname.value == '') {
    candidateName = 'Default guy'
} else {
    candidateName = iname.value;
}
if (age.value == '') {
    candidateAge = '60';
} else {
    candidateAge = age.value;
}
if (!male.checked || !female.checked) {
    candidateSex = 'Default Sex';
} 
if (!views.options[views.selectedIndex]) {
    candidateViews = 'Default Views';
} else {
    candidateViews = views.options[views.selectedIndex].value;
}
if ( !bio.value) {
    candidateBio = 'Default Bio';
} else {
    candidateBio = bio.value;
}

custom.addEventListener('change', function(){
    if (!iname.value || iname.value == '') {
        candidateName = 'Default guy'
    } else {
        candidateName = iname.value;
    }
    
    if (age.value == '') {
        candidateAge = 'Default age';
    } else {
        candidateAge = age.value;
    }
    if (!male.checked || !female.checked) {
        candidateSex = 'Default Sex';
    } 
    if (!views.options[views.selectedIndex]) {
        candidateViews = 'Default Views';
    } else {
        candidateViews = views.options[views.selectedIndex].value;
    }
    if ( !bio.value) {
        candidateBio = 'Default Bio';
    } else {
        candidateBio = bio.value;
    }
    if (male.checked) {
        candidateSex = male.value;
        personSkin.classList.add('person-skin-1');
        for (let i = 0; i < 3; i++) {
            personSkin.classList.remove(`person-skin-${i+4}`);
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
        } else {
            personSkin.classList.add(`person-skin-${slideSkinIndex+3}`);
            candidateSkin = `person-skin-${slideSkinIndex+3}`;
        }
    };
    function plusSlides(n) {
        showSlides(slideSkinIndex += n);
    };
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

readyBtn.addEventListener('click', function(e){
    e.preventDefault();
    let candidatePhoto = document.getElementsByClassName('person')[0].cloneNode(true);
    custom.style.display = 'none';
    main.style.display = 'block';
    let candidateDiv = document.getElementsByClassName('main-cards-item')[0].cloneNode(true);
    candidateDiv.id = 'clone';
    candidateDiv.querySelector('.photo').classList.remove('photo-1');
    candidateDiv.querySelector('.photo').appendChild(candidatePhoto);
    candidateDiv.querySelector('.result-count').textContent = '0%';
    candidateDiv.querySelector('.progress-bar').classList.remove('progress-bar-1');
    candidateDiv.querySelector('.progress-bar').classList.add('progress-bar-3');
    candidateDiv.querySelector('.name').textContent = candidateName;
    candidateDiv.querySelector('.age').textContent = `${candidateAge} лет`;
    candidateDiv.querySelector('.sex').textContent = candidateSex;
    candidateDiv.querySelector('.views').textContent = candidateViews;
    candidateDiv.querySelector('.bio').textContent = candidateBio;
    mainCards.appendChild(candidateDiv);
});

function randomizer(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
};

voting.addEventListener('click', function(){
    let rand1 = randomizer(1, 98);
        document.getElementsByClassName('result-count')[2].textContent = `${rand1}%`;
        document.getElementsByClassName('progress-bar')[2].style.height = `${rand1}%`;
        
    let rand2 = randomizer(1, 99-rand1);
        document.getElementsByClassName('result-count')[1].textContent = `${rand2}%`;
        document.getElementsByClassName('progress-bar')[1].style.height = `${rand2}%`;
    let rand3 = 100-rand1-rand2;
        document.getElementsByClassName('result-count')[0].textContent = `${rand3}%`;
        document.getElementsByClassName('progress-bar')[0].style.height = `${rand3}%`;
});

crime.addEventListener('click', function(){
    let rand1 = randomizer(26, 98);
        document.getElementsByClassName('result-count')[2].textContent = `${rand1}%`;
        document.getElementsByClassName('progress-bar')[2].style.height = `${rand1}%`;
        
    let rand2 = randomizer(1, 99-rand1);
        document.getElementsByClassName('result-count')[1].textContent = `${rand2}%`;
        document.getElementsByClassName('progress-bar')[1].style.height = `${rand2}%`;
    let rand3 = 100-rand1-rand2;
        document.getElementsByClassName('result-count')[0].textContent = `${rand3}%`;
        document.getElementsByClassName('progress-bar')[0].style.height = `${rand3}%`;
});

reset.addEventListener('click', function(){
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName('result-count')[i].textContent = `0 %`;
        document.getElementsByClassName('progress-bar')[i].style.height = `0%`;
    }
    for (let j = 0; j < inputs.length; j++) {
        inputs[j].value= '';
    }
    document.getElementById('clone').remove();
    main.style.display = 'none';
    custom.style.display = 'flex';
});
