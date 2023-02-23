interface Routes {
    name: string;
    scroll: number;
}

const screenWidth = window.innerWidth;
const portfolio = document.getElementById('portfolio');
const aboutMe = document.getElementById('aboutme');
const contactMe = document.getElementById('contactme');

export const routes: Routes[] = [
    {
        name: 'Inicio',
        scroll: 0, 
    },
    {
        name: '¿Quien Soy?',
        scroll: (aboutMe.getBoundingClientRect().top + window.pageYOffset) - 200,
    },
    {
        name: 'Portafolio',
        scroll: (portfolio.getBoundingClientRect().top + window.pageYOffset) - 200,
    },
    {
        name: 'Contactame',
        scroll: (contactMe.getBoundingClientRect().top + window.pageYOffset),
    },
];

const navButtonsContainer = document.getElementById('navButtonsContainer');

routes.forEach(route => {
    const btn = document.createElement('button');

    btn.classList.add(
        'md:mr-8',
        'cursor-pointer',
        'transition',
        'ease-in',
        'duration-200',
        'hover:text-[#35fd7e]',
    );

    btn.innerText = route.name;
    navButtonsContainer.appendChild(btn);

    btn.addEventListener('click', () => {
        window.scroll({
            top: route.scroll,
            behavior: 'smooth',
        });
    });
});
