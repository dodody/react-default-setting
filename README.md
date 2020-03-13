This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# react-default-setting



필요할 때마다 스윽 가져다 쓰자 이말이야~

- 코드 스타일링을 위한 eslint(js 문법만 관리), ~~prettier(코드 스타일 관련 작업)~~

  >  eslint-config-airbnb(airbnb 코드 스타일)

  > [참고] https://velog.io/@velopert/eslint-and-prettier-in-react


- 기본 모듈

  > styled-component, react-router-dom, cross-env, node-sass, prop-types


- 디렉토리 구조 (수정하기)

       src
        ├── components
        │   ├── Avatar
        │   │   ├── Avatar.jsx
        │   │   └── Avatar.scss
        │   ├── Dropdown
        │   │   ├── Dropdown.jsx
        │   │   └── dropdown.module.scss
        │   ├── Input
        │   │   ├── Input.jsx
        │   │   └── Input.scss
        ├── index.js
        ├── Routes
        │   ├── 404
        │   │   ├── 404.jsx
        │   │   └── 404.module.scss
        │   ├── Home
        │   │   ├── Home.jsx
        │   │   └── home.module.scss
        │   └── routes.client.jsx
        ├── store
        │   ├── actions
        │   │   ├── auth.actions.js
        │   ├── configStore.js
        │   ├── languages.js
        │   └── reducers
        │       ├── auth.reducer.js
        └── styles
            ├── animate.scss
            ├── Button.scss
            ├── main.scss
            ├── reset.css
            ├── settings.scss
            └── shared.scss

- 커밋 스타일
  > [참고] https://seesparkbox.com/foundry/semantic_commit_messages

     | 언제?                              | 커밋메시지                              |
     | ---------------------------------- | --------------------------------------- |
     | 기능추가                           | feat: 🕹 기능추가                      |
     | 버그픽스                           | fix: 🚒 버그픽스                        |
     | 리팩토링                           | refactor: 🚧 리팩토링                    |
     | 프로덕션과 상관없는 패키징 등 코드       | chore: 📦 패키지추가, 배포스크립트 등등 |
     | 리드미 추가                        | docs: 📮 리드미 수정                    |
     | 스타일 추가                        | style: 🌻 스타일 추가, 수정             |





# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
