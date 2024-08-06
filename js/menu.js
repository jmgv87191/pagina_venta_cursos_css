(function(){

    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    const sectionAcercaDe = document.querySelector('.nav__acercaDe');
    const linkAcercaDe = document.querySelector('.link__acercaDe');
    const sectionPrecios = document.querySelector('.nav__precios');
    const sectionContacto = document.querySelector('.nav__contacto');
    const sectionTestimonio = document.querySelector('.nav__testimonios');
    const link_Testimonio = document.querySelector('.link__testimonios');
    const link__precios = document.querySelector('.link__precios');

    const scrollAcercaDe = document.querySelector('.about')
    const scrollPrecios = document.querySelector('.price')
    const scrollContacto = document.querySelector('.footer__container')
    const scrollTestimonio = document.querySelector('.testimony')


    openButton.addEventListener('click',()=>{
        menu.classList.add('nav__link--show')
    })

    closeMenu.addEventListener('click',()=>{
        menu.classList.remove('nav__link--show')
    })

/* Scroll */

    sectionAcercaDe.addEventListener('click',(event)=>{
        event.preventDefault();

        scrollAcercaDe.scrollIntoView({
            behavior: 'smooth'
        })

    })

    linkAcercaDe.addEventListener('click',(event)=>{
        event.preventDefault();

        scrollAcercaDe.scrollIntoView({
            behavior: 'smooth'
        })

    })

    sectionPrecios.addEventListener('click',(event)=>{
        event.preventDefault();

        scrollPrecios.scrollIntoView({
            behavior: 'smooth'
        })

    })

    link__precios.addEventListener('click',(event)=>{
        event.preventDefault();

        scrollPrecios.scrollIntoView({
            behavior: 'smooth'
        })

    })

    sectionContacto.addEventListener('click',(event)=>{
        event.preventDefault();

        scrollContacto.scrollIntoView({
            behavior: 'smooth'
        })

    })

    sectionTestimonio.addEventListener('click',(event)=>{
        event.preventDefault();

        scrollTestimonio.scrollIntoView({
            behavior: 'smooth'
        })

    })

    link_Testimonio.addEventListener('click',(event)=>{
        event.preventDefault();

        scrollTestimonio.scrollIntoView({
            behavior: 'smooth'
        })

    })







})();