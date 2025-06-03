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