module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        fontFamily: {
            body: ['Poppins', 'sans-serif'],
            heading: ['Montserrat', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}