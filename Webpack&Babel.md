# Webpack & Babel

### Webpack

-   모듈 번들러

    -   js, img, mp4 등 리소스들을 하나의 파일로 묶어줌

-   설치 플러그인(npm install {플러그인} --save-dev)

    -   webpack
    -   webpack-cli
    -   webpack-dev-server

    -   babel-loader
    -   ts-loader
    -   file-loader
    -   css-loader
    -   sass-loader

    -   html-webpack-plugin
    -   mini-css-extract-plugin
    -   clean-webpack-plugin

---

### Babel

-   트랜스파일러

    -   ES6+ / ES.NEXT 소스코드를 IE같은 구형 브라우저에서도 동작할 수 있도록 바꿔줌

-   설치 플러그인 (npm install {플러그인} --save-dev)

    -   @babel/cli [babel이 실행될 수 있는 환경을 만들어줌]
    -   @babel/core [javascript파일을 변환시키는 여러가지 기능들을 포함하는 모듈]
    -   @babel/preset-env [Babel의 플러그인을 모아둔것]
    -   @babel/preset-react [react에 대한 플러그인]
    -   @babel/preset-typescript [typescript에 대한 플러그인]

-   사용법
    -   babel.config.json 파일 생성
