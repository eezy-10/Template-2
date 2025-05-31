const drpDown = document.querySelector('.dropdown');

const btn = document.querySelector('#btn');
btn.addEventListener('mousemove',() => {
    drpDown.style.display = 'block';
    drpDown.style.backgroundColor = 'white';
    drpDown.style.color = 'black';
    drpDown.style.right = '50%';
    // document.body.style.backgroundColor = 'black';
});
btn.addEventListener('mouseout',() =>{
    drpDown.style.display = 'hidden';
});