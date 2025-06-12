// Responsive Navbar
const menu = document.querySelector('#menu');
const icon = document.querySelector('#icon');
let iconVal = icon.classList.value;
let menuVisible = false;

menu.addEventListener('click', () => {
  const menubar = document.querySelector('#menubar');
  if (!menuVisible) {
    menubar.style.display = 'flex';
    icon.classList.value = 'fa-solid fa-xmark';
  } else {
    menubar.style.display = 'none';
    icon.classList.value = iconVal;
  }
  menuVisible = !menuVisible; // toggle the state
});


const slImg = document.querySelector('#slImg');
const slText1 = document.querySelector('#slText1');
const slText2 = document.querySelector('#slText2');
let showingFirst = true;
let sltxt1 = slText1.textContent;
let sltxt2 = slText2.textContent;

// setInterval(() => {
//   if (showingFirst) {
//     slImg.src = './slide2.jpg';
//     slText1.textContent = 'NEW GENERATION OF SKATING';
//     slText2.textContent = 'lorem dipsum ioler sit amit, consectetur adipisicing elit. Est odit dolorum voluptates.';
//   } else {
//     slImg.src = './slide1.jpg';
//     slText1.textContent = sltxt1;
//     slText2.textContent = sltxt2;
//   }
//   showingFirst = !showingFirst;
// }, 5000);


const slBtn = document.querySelectorAll('.slBtn');

slBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    // console.log("Clicked");
      if (showingFirst) {
      slImg.src = './slide2.jpg';
      slText1.textContent = 'NEW GENERATION OF SKATING';
      slText2.textContent = 'Lorem dipsum ioler sit amit, consectetur adipisicing elit. Est odit dolorum voluptates.';
    } else {
      slImg.src = './slide1.jpg';
      slText1.textContent = sltxt1;
      slText2.textContent = sltxt2;
    }
    showingFirst = !showingFirst;
  });
});


const testi1 = document.querySelector('#testi1');
const testi2 = document.querySelector('#testi2');
const testi3 = document.querySelector('#testi3');
const testi4 = document.querySelector('#testi4');


let tstBtn1 = document.querySelector('#tstBtn1');
let oldProp = tstBtn1.classList.value;
let newProp = tstBtn1.classList.value.replace('text-[8px]', 'text-[12px]').replace('text-white', 'text-orange-400');

tstBtn1.addEventListener('click',() => {
  tstBtn1.classList.value = newProp;
});
// tstBtn1.classList.value = oldProp;

const tstBtn2 = document.querySelector('#tstBtn2');
tstBtn2.addEventListener('click',() => {
  tstBtn2.classList.value = newProp;
  let stateChange = testi2.classList.value.replace('hidden', 'flex');
  testi1.classList.value += 'hidden';
  if(testi3.classList.value == 'block'){
    testi3.classList.value.replace('block', 'hidden');
  }
  if(testi4.classList.value == 'block'){
    testi4.classList.value.replace('block', 'hidden');
  }
  testi2.classList.value = stateChange;
});

const tstBtn3 = document.querySelector('#tstBtn3');
tstBtn3.addEventListener('click',() => {
  tstBtn3.classList.value = newProp;
  let stateChange = testi3.classList.value.replace('hidden', 'block');
  testi2.classList.value += 'hidden';
  testi1.classList.value += 'hidden';
  testi3.classList.value = stateChange;
});

const tstBtn4 = document.querySelector('#tstBtn4');
tstBtn4.addEventListener('click',() => {
  tstBtn4.classList.value = newProp;
});