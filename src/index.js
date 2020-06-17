import './styles/index.css';

import * as tutiCode from './tuti.js';

Object.keys(tutiCode).forEach((fn) => {
    const result = tutiCode[fn]();

    const resultDiv = document.createElement('div');
    resultDiv.className = "result";

    const resultText = document.createTextNode(result);
    resultDiv.appendChild(resultText);

    const resultsContainer = document.getElementById("results");

    resultsContainer.append(resultDiv);
});
