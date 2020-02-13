import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

const renderPage = (Component) => {
  console.log("rendered!");
  ReactDOM.render(
    <AppContainer>
    <HashRouter>
    <Component/>
    </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

setInterval(renderPage(App), 1000);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
