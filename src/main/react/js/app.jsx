require("!style!css!sass!../css/app.scss"); //Include the css file using loaders from webpack/babel

import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './components/hello-world.jsx';


render(
    <HelloWorld />,
    document.getElementById('react')
);