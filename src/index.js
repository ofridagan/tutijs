import './styles/index.css';

import chapters from './chapters.js';

const handleValue = (value) => {
    if (typeof value === 'object')
        return JSON.stringify(value, null, '  ');
    return value;
}

const buildChapterResults = (chapter) => {

    const resultsContainer = document.createElement("div");
    resultsContainer.className = "results";

    Object.keys(chapter).forEach((key) => {

        if (key.indexOf('__') === 0)
            return;

        let result = chapter[key] instanceof Function ? chapter[key]() : chapter[key];
        result = handleValue(result);

        const isTextArea = (typeof chapter[key] === 'object' && chapter[key] );
        const resultDiv = document.createElement(isTextArea ? 'textarea' : 'div');
        resultDiv.className = "result";
        if (isTextArea) {
            resultDiv.rows = 10;
        }

        const label = document.createTextNode(key);
        label.className = "label";

        const resultText = document.createTextNode(result);
        resultDiv.appendChild(resultText);

        resultsContainer.appendChild(label);
        resultsContainer.append(resultDiv);

    });

    return resultsContainer;
};

const buildChapters = (container) => {
    chapters.forEach((chapter) => {
        if (chapter.__disabled)
            return;

        const chapterContainer = document.createElement('div');
        chapterContainer.className = "chapter container";

        const chapterTitle = document.createElement('h3');
        chapterTitle.className = "chapter-title";
        chapterTitle.append(document.createTextNode(chapter.__name));

        chapterContainer.appendChild(chapterTitle);
        if (!chapter.__disabled) {
            chapterContainer.appendChild(buildChapterResults(chapter));
        }

        container.appendChild(chapterContainer);
    });
};


const chaptersContainer = document.getElementById("chapters");
buildChapters(chaptersContainer);
