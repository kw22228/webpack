# Webpack & Babel

### Webpack

-   모듈 번들러

    -   js, img, mp4 등 리소스들을 하나의 파일로 묶어줌

-   설치 플러그인 && 로더 (npm install {플러그인 && 로더} --save-dev)

    -   webpack tools

        -   webpack
        -   webpack-cli
        -   webpack-dev-server

    -   로더

        -   babel-loader
        -   ts-loader

        -   https://webpack.kr/guides/asset-modules/
        -   file-loader : webpack5 부터 asset모듈로 바뀜
        -   url-loader : webpack5 부터 asset모듈로 바뀜
        -   asset 로더 : webpack5부터 추가
        -   asset/resource : file-loader와 같음
        -   asset/inline : url-loader와 같음

        -   css-loader : javascript에서 모듈로 css파일을 불러온다.
        -   style-loader : javascript로 변경된 css코드를 html에 넣어주는 로더 (head부분에 inline으로 넣어줌)
        -   sass-loader

    -   플러그인

        -   html-webpack-plugin : template파일(html)에 js를 자동주입해준다
        -   clean-webpack-plugin : webpack 실행시 output(./dist)폴더를 정리후 실행한다
        -   mini-css-extract-plugin : 번들된 결과의 javascript에서 css코드만 따로뽑아 css파일로 만듬.

        -   webpack.BannerPlugin : 결과물(output)에 빌드 정보다 커밋 버전같은걸 추가
        -   webpack.DefinePlugin : 환경 변수를 추가 할 수 있음.
        -   webpack.HotModuleReplacementPlugin() : HMR을 활성화, devServer.Hot옵션까지 써줘야 브라우저가 자동으로 reload

---

### 실행 옵션

-   --mode : "development" || "production" || "none"
-   --entry: 모듈의 시작시점
-   --output: 번들된 결과를 출력하는 옵션

---

### Babel

-   3단계 빌드

    1. 파싱 : 코드를 받아서 토큰으로 하나하나 분해한다. (추상 구문트리로 변환)
    2. 변환 : 추상 구문트리를 변환한다. (es5로) -> plugin을 통해 변환
    3. 출력 : 변경된 결과물을 출력.

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
