
// Menu

const toggle = document.getElementById('navToggle'),
      nav    =    document.getElementById('navBar')


toggle.addEventListener('click', () => {
  nav.classList.toggle('show')

  if(nav.classList.contains('show')) {
    toggle.setAttribute('src', 'assets/img/menu-buguer-close.svg')
  }else {
    toggle.setAttribute('src', 'assets/img/menu-buguer-open.svg')
  }
})


// Close Menu Mobile

const linkItem = document.querySelectorAll('.nav__link')

function closeMenu() {
  nav.classList.remove('show')
  toggle.setAttribute('src', 'assets/img/menu-buguer-open.svg')
}

linkItem.forEach(e => e.addEventListener('click', closeMenu))

function colorLink() {
  linkItem.forEach( l => l.classList.remove('active') )
  this.classList.add('active')
}

linkItem.forEach(l => l.addEventListener('click', colorLink))
