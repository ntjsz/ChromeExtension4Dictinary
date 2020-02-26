var oxford = {
    'id': 'oxford-hht',
    'url': 'https://www.oxfordlearnersdictionaries.com/definition/english/',
    'optimize': function () {}
};

var longman = {
    'id': 'longman-hht',
    'url': 'https://www.ldoceonline.com/dictionary/',
    'optimize': function () {}
};

var cambridgeE = {
    'id': 'cambridge-e-hht',
    'url': 'https://dictionary.cambridge.org/dictionary/english/',
    'optimize': function () {}
};

var cambridgeE2C = {
    'id': 'cambridge-e2c-hht',
    'url': 'https://dictionary.cambridge.org/dictionary/english-chinese-simplified/',
    'optimize': function () {}
};

var inputText = document.getElementById("hht-text");
var inputSubmit = document.getElementById("hht-submit");
var frames = document.getElementById("frames");

var openPage = function (dic, suffix) {
    var frameDiv = document.createElement("div");
    frameDiv.setAttribute("class", "quarter-div");
    var frameDom = document.createElement("iframe");
    frameDom.id = dic.id;
    frameDom.src = dic.url + suffix;
    frameDom.frameborder = '0';
    //frameDom.addEventListener("load", dic.optimize);
    frameDiv.appendChild(frameDom);
    frames.appendChild(frameDiv);
};
var clearPages = function () {
    frames.innerHTML = "";
};

var lookUpWord = function () {
    clearPages();

    var rawWord = inputText.value.trim();
    var suffix = "";
    var space = false;
    for (var i = 0; i < rawWord.length; i++) {
        if (rawWord[i] === ' ') {
            if (!space) {
                suffix += '-';
            }
            space = true;
            // skip consecutive space
        } else {
            space = false;
            suffix += rawWord[i];
        }
    }
    console.log(suffix);
    openPage(oxford, suffix);
    openPage(longman, suffix);
    openPage(cambridgeE, suffix);
    openPage(cambridgeE2C, suffix);
};

inputText.onkeypress = function (event) {
    // carriage return
    if (event.keyCode == 13) {
        lookUpWord();
    }
};
inputSubmit.onclick = function (event) {
    lookUpWord();
};
inputText.focus();