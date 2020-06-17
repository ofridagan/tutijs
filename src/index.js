import './styles/index.css';

import * as tutiCode from './tuti.js';

Object.keys(tutiCode).forEach((key) => {
    const result = tutiCode[key] instanceof Function ? tutiCode[key]() : tutiCode[key];

    const resultDiv = document.createElement('div');
    resultDiv.className = "result";

    const label = document.createTextNode(key);
    label.className = "label";

    const resultText = document.createTextNode(result);
    resultDiv.appendChild(resultText);

    const resultsContainer = document.getElementById("results");

    resultsContainer.appendChild(label);
    resultsContainer.append(resultDiv);
});
