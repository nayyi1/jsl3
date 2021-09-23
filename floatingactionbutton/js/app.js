// UI
const btns = document.querySelector('.btns');
const btnprimary = document.getElementById('btnprimary');

btnprimary.addEventListener('click',function(){
	btns.classList.toggle('show');
})