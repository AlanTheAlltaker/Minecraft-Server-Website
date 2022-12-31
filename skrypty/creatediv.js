const guidesContainer = document.querySelector('.poradniki');

const guidesData = [{
  title: 'PROPEL',
  subtitle: 'Zwieksza predkosc rzucania broni rzucanej i zwieksza zasieg lotu',
  img: 'https://lh3.googleusercontent.com/CFT5n4q2mTA_qQ9rPY6C7LwkdvSwzaEMRgq7UkL7BbngBNVoSPTPZjzrR2aWFWDJkIM2d4BvAuF80vulr589',
}, {
  title: 'INCENDIARY',
  subtitle: 'Bron rzucana podpala przeciwnikow. Niekompatybilne z HYDRODYNAMIC',
  img: 'https://lh3.googleusercontent.com/CFT5n4q2mTA_qQ9rPY6C7LwkdvSwzaEMRgq7UkL7BbngBNVoSPTPZjzrR2aWFWDJkIM2d4BvAuF80vulr589',
}, {
  title: 'RAZOR EDGE',
  subtitle: 'Zwieksza dmg broni rzucanej',
  img: 'https://lh3.googleusercontent.com/CFT5n4q2mTA_qQ9rPY6C7LwkdvSwzaEMRgq7UkL7BbngBNVoSPTPZjzrR2aWFWDJkIM2d4BvAuF80vulr589',
}, {
  title: 'LUCKY THROW',
  subtitle: 'Zwieksza drop rate itemow z mobow',
  img: 'https://lh3.googleusercontent.com/CFT5n4q2mTA_qQ9rPY6C7LwkdvSwzaEMRgq7UkL7BbngBNVoSPTPZjzrR2aWFWDJkIM2d4BvAuF80vulr589',
}, {
  title: 'HYDRODYNAMIC',
  subtitle: 'Pozwala uzywac bron rzucana pod woda. Niekompatybilne z INCENDIARY',
  img: 'https://lh3.googleusercontent.com/CFT5n4q2mTA_qQ9rPY6C7LwkdvSwzaEMRgq7UkL7BbngBNVoSPTPZjzrR2aWFWDJkIM2d4BvAuF80vulr589',
}, {
  title: 'SUPERCHARGE',
  subtitle: 'Redukuje czas potrzbny do przygotowania broni rzucanej do rzutu',
  img: 'https://lh3.googleusercontent.com/CFT5n4q2mTA_qQ9rPY6C7LwkdvSwzaEMRgq7UkL7BbngBNVoSPTPZjzrR2aWFWDJkIM2d4BvAuF80vulr589',
}, {
  title: 'EXPANSE',
  subtitle: 'Zwieksza pojemnosc amunicji broni rzucanej',
  img: 'https://lh3.googleusercontent.com/CFT5n4q2mTA_qQ9rPY6C7LwkdvSwzaEMRgq7UkL7BbngBNVoSPTPZjzrR2aWFWDJkIM2d4BvAuF80vulr589',
}, {
  title: 'SHARPSHOOTER',
  subtitle: 'Redukuje czas potrzebny do przygotowania kuszy do strzalu',
  img: 'https://preview.redd.it/ajm4c9xggac51.png?auto=webp&s=b028845d791bc0be763940bb7f97cf0fce457732',
}, {
  title: 'SPIKES',
  subtitle: 'Daje szanse na zadanie obrazen podczas zablokowania ataku tarcza',
  img: 'https://media.forgecdn.net/avatars/199/901/636909850537954133.png',
}, {
  title: 'FIREBRAND',
  subtitle: 'Uderzenie tarcza podpala przeciwnikow. Wiekszy poziom wydluza czas podpalenia',
  img: 'https://media.forgecdn.net/avatars/199/901/636909850537954133.png',
}, {
  title: 'PAYBACK',
  subtitle: 'Blok tarcza absorbuje 50% dmg. Dmg zadane uderzeniem tarcza jest zwiekszone przez zaobsorbowany dmg',
  img: 'https://media.forgecdn.net/avatars/199/901/636909850537954133.png',
}, {
  title: 'MARKSMAN',
  subtitle: 'Wyciaga strzaly z plecaka',
  img: 'https://media.forgecdn.net/avatars/477/479/637772195243234104.gif',
}, {
  title: 'FUNNELLING',
  subtitle: 'Wydropione bloki automatycznie sa chowane do plecaka',
  img: 'https://media.forgecdn.net/avatars/477/479/637772195243234104.gif',
}, {
  title: 'REPAIRMAN',
  subtitle: 'XP naprawia wszystkie mending itemy wewnatrz plecaka',
  img: 'https://media.forgecdn.net/avatars/477/479/637772195243234104.gif',
}, {
  title: 'LOOTED',
  subtitle: 'Wydropione itemy z mobow automatycznie sa chowane do plecaka',
  img: 'https://media.forgecdn.net/avatars/477/479/637772195243234104.gif',
}, {
  title: 'IMBUED HIDE',
  subtitle: 'Chroni plecak przed spaleniem',
  img: 'https://media.forgecdn.net/avatars/477/479/637772195243234104.gif',
}, {
  title: 'PRAISE THE SUN',
  subtitle: 'Itemy z wytrzymaloscia sa teraz automatycznie naprawiane podczas dnia',
  img: 'img/enchant.png',
}, {
  title: 'DISENGAGE',
  subtitle: 'Kiedy twoje serca spadna ponizej 3 - eksplodujesz. Nie otrzymasz dmg od eskplozji ale przeciwnicy i bloki juz tak',
  img: 'https://lh3.googleusercontent.com/ys4nE2iBXT01dLJ3Blgu3dPRKhtXJWZCe3JUoL2PWbatnsdMyduXvlSr6TdECUm6QZQINTGW_t7C-DZNvMkK=s400',
}, {
  title: 'JUGGER-NOG',
  subtitle: 'Daje dodatkowe serca',
  img: 'https://lh3.googleusercontent.com/ys4nE2iBXT01dLJ3Blgu3dPRKhtXJWZCe3JUoL2PWbatnsdMyduXvlSr6TdECUm6QZQINTGW_t7C-DZNvMkK=s400',
}, {
  title: 'VITALITY',
  subtitle: 'Daje zwiekszona regeneracje',
  img: 'https://lh3.googleusercontent.com/ys4nE2iBXT01dLJ3Blgu3dPRKhtXJWZCe3JUoL2PWbatnsdMyduXvlSr6TdECUm6QZQINTGW_t7C-DZNvMkK=s400',
}, {
  title: 'BLESSED',
  subtitle: 'Daje zwiekszona regeneracje podczas trzymania miecza',
  img: 'https://freepngimg.com/thumb/minecraft/80488-angle-symbol-pocket-edition-sword-minecraft-thumb.png',
}];

const guidesString = guidesData.map(({ title, subtitle, img }) => `
  <div class="poradnik"> <img src="${img}" /> <div class="name"><h3>${title}</h3><i>${subtitle}</i></div></div>
`).join('');

guidesContainer.innerHTML = guidesString