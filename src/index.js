import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import ReduxRoot from './ReduxRoot';

ReactDOM.render(<ReduxRoot />, document.getElementById('root'));

serviceWorker.unregister();
