module.exports = {
    presets: [
        // './my-babel-preset.js',
        [
            '@babel/preset-env',
            {
                //타겟 브라우저 설정
                targets: {
                    chrome: '79',
                    ie: '11',
                },
                useBuiltIns: 'usage', // 'entry' || false
                corejs: {
                    version: 3, // 2
                },
            },
        ],
    ],
};
