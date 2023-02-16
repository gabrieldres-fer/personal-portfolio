interface Repository {
    link: string;
    description: string;
    title: string;
    imgUrl: string[];
}

export const repositories: Repository[] = [
    {
        link: 'https://github.com/gabrieldres-fer/covid-analytic',
        description:
            'La app se dedica a dar informacion de paises especificos sobre la infeccion del covid-19',
        title: 'Covid Analytic',
        imgUrl: [
            'https://img.icons8.com/color/48/null/javascript--v1.png',
            'https://img.icons8.com/color/48/null/tailwindcss.png',
            'https://img.icons8.com/color/48/ffffff/nextjs.png',
        ],
    },

    {
        link: 'https://github.com/gabrieldres-fer/url-shortener',
        description: 'App para acortar urls largas',
        title: 'Url Shortener',
        imgUrl: [
            'https://img.icons8.com/color/48/null/javascript--v1.png',
            'https://img.icons8.com/color/48/null/tailwindcss.png',
            'https://img.icons8.com/color/48/ffffff/nextjs.png',
        ],
    },

    {
        link: 'https://github.com/gabrieldres-fer/react-gifapp',
        description: 'Aplicacion construida por el consumo de la api de GIPHY',
        title: 'React Gifapp',
        imgUrl: [
            'https://img.icons8.com/color/48/null/javascript--v1.png',
            'https://img.icons8.com/color/48/null/tailwindcss.png',
            'https://img.icons8.com/color/48/ffffff/nextjs.png',
        ],
    },
];
