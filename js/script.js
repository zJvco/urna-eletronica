const vereador = [
    {
        id: 18234,
        name: 'Carla Zambelli',
        img: 'people-3.png',
        type: 'Vereador',
        partido: 'PNGJ'
    },
    {
        id: 12342,
        name: 'Arthur do Val',
        img: 'people-6.png',
        type: 'Vereador',
        partido: 'PATRIOTAS'
    }
]

const prefeito = [
    {
        id: 99,
        name: 'Kim Kataguiri',
        img: 'people-2.png',
        partido: 'MBL',
        type: 'Prefeito',
        vice: 'people-1.png'
    },
    {
        id: 22,
        name: 'Jannaina Paschoal',
        img: 'people-5.png',
        partido: 'PSL',
        type: 'Prefeito',
        vice: 'people-4.png'
    }
]

const dataNumAll = document.querySelectorAll('[data-number]');
const ns1 = document.getElementById('ns-1');
const ns2 = document.getElementById('ns-2');
const ns3 = document.getElementById('ns-3');
const ns4 = document.getElementById('ns-4');
const ns5 = document.getElementById('ns-5');
const brancoBtn = document.getElementById('brancoBtn');
const corrigeBtn = document.getElementById('corrigeBtn');
const confirmaBtn = document.getElementById('confirmaBtn');
const nuleVote = document.getElementById('voto-nulo');
const votoBranco = document.getElementById('voto-branco');
const containerInputsNumber = document.querySelector('.di-1');

const titleYourVoteText = document.querySelector('.title-your-vote');
const dd = document.querySelectorAll('.dd');
const helpDescription = document.querySelector('.help-description')
const rightsideScreenImages = document.querySelector('.rightside-screen');
const viceCont = document.querySelector('.bottomSmallImage');
const viceImage = document.querySelector('.bottomSmallImage img');
const titleFunction = document.querySelector('.title-role h2');
const topBiggerImage = document.querySelector('.topBiggerImage img');

const nameChar = document.getElementById('name');
const partyChar = document.getElementById('party');

var idInput = '';
var boolPrefeitoShow = false;

dataNumAll.forEach(data => {
    const dataNumber = data.dataset.number;

    data.addEventListener('click', () => {
        setScreenInput(dataNumber);
    });
});

function setScreenInput(dn) {
    if (ns1.value == '') {
        ns1.value = dn;
        idInput += dn;

        ns1.dataset.opacity = 'false';
        ns2.dataset.opacity = 'true';
    }
    else if (ns2.value == '') {
        ns2.value = dn;
        idInput += dn;

        if (boolPrefeitoShow) {
            showPrefeito();
        }
        
        ns2.dataset.opacity = 'false';
        ns3.dataset.opacity = 'true';
    }
    else if (ns3.value == '') {
        ns3.value = dn;
        idInput += dn;

        ns3.dataset.opacity = 'false';
        ns4.dataset.opacity = 'true';
    }
    else if (ns4.value == '') {
        ns4.value = dn;
        idInput += dn;

        ns4.dataset.opacity = 'false';
        ns5.dataset.opacity = 'true';
    }
    else if (ns5.value == '') {
        ns5.value = dn;
        idInput += dn;

        showDataVereador();

        ns5.dataset.opacity = 'false';
    }
    else return;
}

function showDataVereador() {

    if (idInput == vereador[0].id) {
        setDisplayToScreen();

        topBiggerImage.src = `img/${vereador[0].img}`;
        nameChar.innerText = vereador[0].name;
        partyChar.innerText = vereador[0].partido;

        idInput = '';

        confirm(false);        
    }
    else if (idInput == vereador[1].id) {
        setDisplayToScreen();

        topBiggerImage.src = `img/${vereador[1].img}`;
        nameChar.innerText = vereador[1].name;
        partyChar.innerText = vereador[1].partido;

        idInput = '';

        confirm(false);
    }
    else {
        nuleVote.style.display = 'block';

        idInput = '';

        confirm(false);
    }
}

function setDisplayToScreen() {
    dd.forEach(item => {
        item.style.display = 'block';
    });

    titleYourVoteText.style.display = 'block';
    helpDescription.style.display = 'block';
    rightsideScreenImages.style.display = 'flex';
}
 
function setDisplayNone() {
    dd.forEach(item => {
        item.style.display = 'none';
    });

    ns1.value = '';
    ns1.dataset.opacity = 'true';

    ns2.value = '';
    ns2.dataset.opacity = 'false';

    ns3.style.display = 'none';
    ns4.style.display = 'none';
    ns5.style.display = 'none';

    titleYourVoteText.style.display = 'none';
    helpDescription.style.display = 'none';
    rightsideScreenImages.style.display = 'none';
    nuleVote.style.display = 'none';
    votoBranco.style.display = 'none';

    titleFunction.innerText = prefeito[0].type;
}

brancoBtn.addEventListener('click', () => {
    votoBranco.style.display = 'block';

    containerInputsNumber.style.display = 'none';

    confirm(false);

    if (boolPrefeitoShow) confirm(true);
});

corrigeBtn.addEventListener('click', () => {
    idInput = '';

    ns1.value = '';
    ns2.value = '';
    ns3.value = '';
    ns4.value = '';
    ns5.value = '';

    ns1.dataset.opacity = 'true';

    titleYourVoteText.style.display = 'none';
    helpDescription.style.display = 'none';
    rightsideScreenImages.style.display = 'none';
    nuleVote.style.display = 'none';
    votoBranco.style.display = 'none';

    dd.forEach(item => {
        item.style.display = 'none';
    })
});

function showPrefeito() {
    if (idInput == prefeito[0].id) {
        setDisplayToScreen();

        nameChar.innerText = prefeito[0].name;
        partyChar.innerText = prefeito[0].partido;
        topBiggerImage.src = `img/${prefeito[0].img}`

        viceCont.style.display = 'block';
        viceImage.src = `img/${prefeito[0].vice}`;

        confirm(true);
    }

    else if (idInput == prefeito[1].id) {
        setDisplayToScreen();

        nameChar.innerText = prefeito[1].name;
        partyChar.innerText = prefeito[1].partido;
        topBiggerImage.src = `img/${prefeito[1].img}`

        viceCont.style.display = 'block';
        viceImage.src = `img/${prefeito[1].vice}`;

        confirm(true);
    }
    else {
        nuleVote.style.display = 'block';
        
        confirm(true);
    }
}

function showEndMessage() {
    const endPopupText = document.querySelector('.end-popup');
    const topsideViewsDatas = document.querySelector('.topside-view-datas');

    endPopupText.style.display = 'flex';
    containerInputsNumber.style.display = 'none';
    titleFunction.style.display = 'none';
    topsideViewsDatas.style.borderBottom = 'none';
}

function confirm(txtReturn) {
    confirmaBtn.addEventListener('click', () => {
        setDisplayNone();

        if (txtReturn) {
            showEndMessage();
        }
        else {
            boolPrefeitoShow = true;

            containerInputsNumber.style.display = 'block';
        }
    });

    return
}