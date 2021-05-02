module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        screens: {
            'xxs': '320px',
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: {
            colors: {
                'spotify-green': '#1BB954',
                's-purple1': '#c074b2',
                's-purple2': '#552f6d',
                's-blue1': '#8ab5e8',
                's-blue2': '#1E3164',
                's-blue3': '#305A8F',
                's-grey': '#1B1B1B',
                's-grey-text': '#919496'

            },
            minHeight: {
                '600': '600px',
            },
            maxHeight: {
                '1/5': '20%',
            },
            fontFamily: {
                'spotify': ['Montserrat', 'sans-serif'],
            },
            width: {
                'over': '108%',
                '85': '85%',
            },

        },
    },
    variants: {
        extend: {
            brightness: ['hover', 'focus'],
        },
    },
    plugins: [],
}