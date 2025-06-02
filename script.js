// Responsive Navbar
const menu = document.querySelector('#menu');
const icon = document.querySelector('#icon');
let iconVal = icon.classList.value;
let select = true;

menu.addEventListener('click', () =>{
  if(select){
  const menubar = document.querySelector('#menubar');
  menubar.style.display = 'flex';
  icon.classList.value = 'fa-solid fa-xmark';
  menu.addEventListener('click', () => {
    console.log('clicked');
    menubar.style.display = 'none';
    return (icon.classList.value = iconVal);
  });
  menubar.style.display = 'flex';
  }
  select = !select;
});


// const slImg = document.querySelector('#slImg');
// const slText1 = document.querySelector('#slText1');
// const slText2 = document.querySelector('#slText2');
// let showingFirst = true;
// let sltxt1 = slText1.textContent;
// let sltxt2 = slText2.textContent;

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


// const slBtn = document.querySelectorAll('.slBtn');

// slBtn.forEach(btn => {
//   btn.addEventListener("click", () => {
//     // console.log("Clicked");
//       if (showingFirst) {
//       slImg.src = './slide2.jpg';
//       slText1.textContent = 'NEW GENERATION OF SKATING';
//       slText2.textContent = 'lorem dipsum ioler sit amit, consectetur adipisicing elit. Est odit dolorum voluptates.';
//     } else {
//       slImg.src = './slide1.jpg';
//       slText1.textContent = sltxt1;
//       slText2.textContent = sltxt2;
//     }
//     showingFirst = !showingFirst;
//   });
// });