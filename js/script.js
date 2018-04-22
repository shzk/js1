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
    personClothes = document.getElementById('person-clothes'),
    personHair = document.getElementById('person-hair');

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
        personHair.classList.add('person-hair-1');
        personHair.classList.remove('person-hair-4');
    } else {
        candidateSex = female.value;
        personSkin.classList.add('person-skin-4');
        personSkin.classList.remove('person-skin-1');
        personClothes.classList.add('person-clothes-4');
        personClothes.classList.remove('person-clothes-1');
        personHair.classList.add('person-hair-4');
        personHair.classList.remove('person-hair-1');
    }
});