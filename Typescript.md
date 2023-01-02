### webpack에 typescript & babel을 적용하기.

-   타입스크립트의 환경설정을 할때 2가지 초이스가 있다.

    1. tsc가 ES5 코드로 트랜스파일링 하고, 타입체크까지 하게한다.
    2. 바벨이 TS코드를 트랜스파일링을 하고, tsc는 타입체크를 하게한다.

    -   2번째 방법이 더 좋아보임. (바벨이 tsc보다 더 유연한 트랜스파일링을 할 수 있고, 각툴의 역할이 명확하다.)

-   설치
    1. yarn add -D @babel/preset-typescript
    2. babel.config.json -> presets에 "@babel/preset-typescript" 추가
    3. yarn add -D @types/react @types/react-dom
    4. webpack에서 babel-loader test에 ts, tsx 추가, entry 포인트도 바꿔주자
    5. resolove extendsions에 ts, tsx추가하여 확장자없이 읽히도록 해주자.
    6. yarn add -D typescript
    7. npx tsc --init 으로 tsconfig.json 생성
