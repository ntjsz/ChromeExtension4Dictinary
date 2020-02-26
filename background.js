chrome.browserAction.onClicked.addListener(function (activeTab) {
  var newURL = "index.html";
  chrome.tabs.create({ url: newURL });
});

chrome.webRequest.onHeadersReceived.addListener(
  function (info) {
    var headers = info.responseHeaders;
    for (var i = headers.length - 1; i >= 0; --i) {
      var header = headers[i].name.toLowerCase();
      if (header == 'x-frame-options' || header == 'frame-options') {
        headers.splice(i, 1); // Remove header
      }
    }
    return { responseHeaders: headers };
  },
  {
    urls: ['https://www.oxfordlearnersdictionaries.com/*',
      "https://www.ldoceonline.com/*",
      'https://dictionary.cambridge.org/*'],
    types: ['sub_frame']
  },
  ['blocking', 'responseHeaders']
);