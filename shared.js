var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectplanbuttons = document.querySelectorAll('.plan button');
var toggeButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var crossButton = document.querySelector('.mobile-nav__closer');
var ctaButton = document.querySelector('.main-nav_item--cta');


//backdrop.style.display = 'block';
//console.dir(backdrop);
//console.dir(planbuttons);

for (var i = 0; i < selectplanbuttons.length; i++) {
	selectplanbuttons[i].addEventListener('click', function(){
		//modal.style.display = 'block';  //used this method coz open class was overwriting the modal class
		modal.classList.add('open');
		backdrop.classList.add('open');
	});
}

	backdrop.addEventListener('click', function(){
		mobileNav.classList.remove('open');
		closeMode();
	});
	
	crossButton.addEventListener('click', function(){
		mobileNav.classList.remove('open');
		backdrop.classList.remove('open');
	});
	
	
if (modalNoButton) {
	modalNoButton.addEventListener('click', closeMode);
}
	
	
function closeMode(){
	if (modal) {
		//modal.style.display = 'none';  //used this method coz open class was overwriting the modal class
		modal.classList.remove('open');
	}	
		
		backdrop.classList.remove('open');
	};

	toggeButton.addEventListener('click', function(){
		//mobileNav.style.display = 'block';
		//backdrop.style.display = 'block';
		mobileNav.classList.add('open');
		backdrop.classList.add('open');
		
	});
	
ctaButton.addEventListener('animationstart', function(event) {
	console.log('animation started', event);
})

ctaButton.addEventListener('animationend', function(event) {
	console.log('animation ended', event);
})

ctaButton.addEventListener('animationiteration', function(event) {
	console.log('animation iteration', event);
})