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
        -   sass-loader : https://github.com/webpack-contrib/sass-loader
        -   node-sass : sass코드를 css로 변형해줌

    -   플러그인

        -   html-webpack-plugin : template파일(html)에 js를 자동주입해준다
        -   clean-webpack-plugin : webpack 실행시 output(./dist)폴더를 정리후 실행한다
        -   mini-css-extract-plugin : 번들된 결과의 javascript에서 css코드만 따로뽑아 css파일로 만듬.

        -   webpack.BannerPlugin : 결과물(output)에 빌드 정보다 커밋 버전같은걸 추가
        -   webpack.DefinePlugin : 환경 변수를 추가 할 수 있음.
        -   webpack.HotModuleReplacementPlugin() : HMR을 활성화, devServer.Hot옵션까지 써줘야 브라우저가 자동으로 reload

        -   copy-webpack-plugin: webpack의 externals에 등록한 서드파티 라이브러리를 entry폴더에 따로 저장해줌 (index.html에 따로 script 저장해줘야함.)

-   개발 서버 (devServer) https://jeonghwan-kim.github.io/series/2020/01/02/frontend-dev-env-webpack-intermediate.html

    -   설치
        -   npm i -D webpack-dev-server
    -   config 설정
        -   contentBase: output으로 설정한 경로를 지정해주면됨.(dist)
        -   publicPath: 브라우저로 통해 접근하는 경로. default "/"
        -   host: 개발환경에서 도메인을 맞춰야할때 사용 (day.domain.com)
        -   overlay: 빌드할때 오류를 터미널대신 브라우저에 출력해줌
        -   port : 개발서버 포트를 설정. 기본값 8080
        -   stats: 메세지의 수준을 정할수 있음 (none || errors-only || minimal || normal || verbose)
        -   historyApiFallBack: SPA 개발시, 404가 발생하면 index.html로 리다이렉트 해줌.

-   최적화 (Optimization)

    -   minimizer
        -   css-minimizer-webpack-plugin : html-webpack-plugin처럼 html대신 css를 압축함. (optimization이라는 프로퍼티에 인스턴스 생성해줘야함)
        -   terser-webpack-plugin : js파일을 압축함
    -   splitChunks
        -   chunks: 'all' -> entry 포인트가 여러개일때 js들에 "중복된 코드"가있을수있는데 이것을 전부 제거해준다.

-   다이나믹 임포트
    엔트리 포인트를 여러개 준것처럼 빌드된다.

-   externals (제외)
    -   axios같은 서드파티 라이브러리는 node_modules에 있기때문에 빌드파일에서 제외하면 최적화 된다. (빌드할때 제외되기 때문에 copy-webpack-plugin을 써서 엔트리 포인트에 파일을 따로 복사해준다.)

```javascript
import(/* webpackChunkName: "math" */ './math.js').then(m => {
    const sum = m.default;
    const result = sum(1, 2);

    document.body.innerHTML = result;
});
```

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

-   폴리필

    -   바벨 폴리필 또는 corejs를 사용한다. (babel.config.js) 확인
    -   corejs를 사용하기위해서 npm에서 설치해야함 (없으면 빌드시 오류)

-   설치 플러그인 (npm install {플러그인} --save-dev)

    -   @babel/cli [babel이 실행될 수 있는 환경을 만들어줌]
    -   @babel/core [javascript파일을 변환시키는 여러가지 기능들을 포함하는 모듈]
    -   @babel/preset-env [Babel의 플러그인을 모아둔것]
    -   @babel/preset-react [react에 대한 플러그인]
    -   @babel/preset-typescript [typescript에 대한 플러그인]

-   사용법
    1.  babel.config.json 파일 생성
    2.  babel 플러그인 또는 프리셋 설정
    3.  npx babel app.js
