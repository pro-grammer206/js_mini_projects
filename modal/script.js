const toggle = document.getElementById('show');
const back = document.querySelector('main')
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
toggle.addEventListener('click',()=>{
    modal.style.display='block';
    // back.style.opacity='0.5'
    // modal.style.opacity='1'

})

close.addEventListener('click',()=>{
    modal.style.display='none';
    
})