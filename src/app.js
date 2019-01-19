import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from '../src/components/WeatherApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true  // updates material-ui typography automatically when next major release happens (Q1 2019)

const jsx = (
    <WeatherApp />
);

ReactDOM.render(jsx, document.getElementById('app'));