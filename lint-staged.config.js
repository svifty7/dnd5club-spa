module.exports = {
    '*.{js,jsx,vue,ts,tsx}': [
        'vue-cli-service lint',
        'yarn run build',
        'gh-pages -d dist -b gh-pages'
    ]
};
