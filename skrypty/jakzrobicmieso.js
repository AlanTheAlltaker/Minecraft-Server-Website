const guidesContainer = document.querySelector('.container');

const guidesData = [{
    number: '1',
    img: 'img/butch/butch1.png',
    guide: 'Zabij zwierze',
}, {
    number: '2',
    img: 'img/butch/butch2.png',
    guide: 'Scraftuj hak',
}, {
    number: '3',
    img: 'img/butch/butch3.png',
    guide: 'Powies hak pod blokiem',
}, {
    number: '4',
    img: 'img/butch/butch4.png',
    guide: 'Powies cialo na haku',
}, {
    number: '5',
    img: 'img/butch/butch5.png',
    guide: 'Scraftuj tasak',
}, {
    number: '6',
    img: 'img/butch/butch6.png',
    guide: 'Uzyj tasak na ciele',
}];

const guidesString = guidesData.map(({ number, img, guide }) => `
<div class="mar">
<div class="border">
    <div class="step">
        <div class="border">
            <div class="number">
                ${number}
            </div>
        </div>
        <img src="${img}" alt="">
        <div class="guide">
           ${guide}
        </div>
    </div>
</div>
</div>
`).join('');

guidesContainer.innerHTML = guidesString