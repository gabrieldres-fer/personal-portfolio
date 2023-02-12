interface Routes {
    name: string;
    scroll: number;
}

export const routes: Routes[] = [
    {
        name: 'Inicio',
        scroll: 0,
    },
    {
        name: '¿Quien Soy?',
        scroll: 500,
    },
    {
        name: 'Portafolio',
        scroll: 1130,
    },
    {
        name: 'Contactame',
        scroll: 2300,
    },
];

const navButtonsContainer = document.getElementById('navButtonsContainer');

routes.forEach((route) => {
    const btn = document.createElement('button');
    btn.classList.add(
        'md:mr-8',
        'cursor-pointer',
        'transition',
        'ease-in',
        'duration-200',
        'hover:text-[#35fd7e]'
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
