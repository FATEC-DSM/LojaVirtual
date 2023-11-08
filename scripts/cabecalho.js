const button = document.querySelector('.open-close-menu');
const icon = button.children[0];

const headerMobile = document.querySelector('.header-mobile');

function openCloseMenu() {
  button.classList.toggle('open');

  const isOpen = button.classList.contains('open');

  if(isOpen) {
    icon.classList.replace('fa-bars', 'fa-x');
    headerMobile.style.transform = 'translateX(0%)';
    
  } else {
    icon.classList.replace('fa-x', 'fa-bars');
    headerMobile.style.transform = 'translateX(100%)';
  }
}