module.exports = {
    '*.{js,jsx,vue,ts,tsx}': [
        'vue-cli-service lint',
        'vue-cli-service build',
        'gh-pages -d dist -b gh-pages'
    ]
};
