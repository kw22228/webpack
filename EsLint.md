# EsLint

-   ES(EcmaScript) + Lint => 에러가있는 코드에 표시를 달아놓음
-   Javascript 스타일 가이드를 따르지 않거나 문제가 있는 안티패턴들을 찾아주고 일관된 코드 스타일 작성 가능.
-   코딩 컨벤션 및 안티 패턴들을 자동 검출 해주므로 휴먼 에러 방지가능

### 적용

1. npm install eslint --save-dev

2. node_modules/.bin/eslint --init -> 질문에 맞게 체크

3. .eslintrc.js 생성.

### 플러그인

npm install {플러그인} --save-dev

-   eslint-config-airbnb
-   eslint-config-prettier
-   eslint-plugin-import
-   eslint-plugin-html
