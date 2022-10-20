# EsLint

-   ES(EcmaScript) + Lint => 에러가있는 코드에 표시를 달아놓음
-   Javascript 스타일 가이드를 따르지 않거나 문제가 있는 안티패턴들을 찾아주고 일관된 코드 스타일 작성 가능.
-   코딩 컨벤션 및 안티 패턴들을 자동 검출 해주므로 휴먼 에러 방지가능

### 적용

1. npm install eslint --save-dev

2. node_modules/.bin/eslint --init -> 질문에 맞게 체크

3. .eslintrc.js 생성.

### extends

-   eslint:recommended : eslint가 추천하는 기능 (여러가지 rules 세트이다)
-   airbnb : airbnb의 코드 스타일 세트
-   standard: javascript 코드 스타일 세트

### 플러그인

npm install {플러그인} --save-dev

-   eslint-config-airbnb : airbnb 코드 스타일 세트를 제공해줌 _(npx install-peerdeps --dev eslint-config-airbnb)_ 로 깔아줘야함
-   eslint-config-prettier : eslint의 코드 변환을 프리터어와 겹치면 꺼버림 (프리티어 우선)
-   eslint-plugin-prettier : prettier의 규칙을 eslint의 기능으로 넣어버림
-   eslint-plugin-import
-   eslint-plugin-html
