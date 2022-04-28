const menu = () => {

    const menuButton = document.querySelector('.menu__button')
    const menu = document.querySelector('.fullscreen-menu')
    const header = document.querySelector('.header')
    const container = document.querySelector('.container')
    
    const openMenu = () => {

        header.classList.toggle('header--open-menu')

        container.classList.toggle('container--locked')

        menuButton.classList.toggle('menu__button--close')

        menu.classList.toggle('fullscreen-menu--open')

    }

    menuButton.addEventListener('click', openMenu)

}

menu()