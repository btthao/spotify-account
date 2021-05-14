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
        zIndex: {
            "0": 0,
            "10": 10,
            "20": 20,
            "30": 30,
            "40": 40,
            "50": 50,
            "70": 70,
            "100": 100,
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
            padding: {
                'trending-85': '85%',
                'trending-50': '50%',
                'trending-90': '90%',
                'trending-40': '40%',
                'item-100': '100%',
            },
            minHeight: {
                '600': '600px',
            },
            maxHeight: {
                '1/5': '20%',
                '120': '120rem',
            },
            maxWidth: {
                'xxxs': '10rem',
                'xxs': '15rem',
                '50': '50%',
            },
            fontFamily: {
                'spotify': ['Montserrat', 'sans-serif'],
            },
            width: {
                'over': '108%',
                '85': '85%',
            },
            gridTemplateColumns: {
                'track': '1.1fr 1fr 0.2fr'
            }

        },
    },
    variants: {
        extend: {
            brightness: ['hover', 'focus'],
        },
    },
    plugins: [],
}