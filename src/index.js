import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import IndexPage from './pages';

ReactDOM.render(<IndexPage />, document.getElementById('root'));
registerServiceWorker();
