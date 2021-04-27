module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'spotify-green': '#1BB954',
                's-purple1': '#c074b2',
                's-blue1': '#8ab5e8',
                's-purple2': '#552f6d',
                's-blue2': '#2c5e92',
            }
        },
        minHeight: {
            '0': '0',
            '600': '600px',
        }
    },
    variants: {
        extend: {
            brightness: ['hover', 'focus'],
        },
    },
    plugins: [],
}