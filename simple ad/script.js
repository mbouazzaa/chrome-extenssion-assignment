var parentDiv = document.getElementsByClassName('gXmnc')[0];

if (parentDiv) {
    // create Ads Div which will hold our custom html
    var adsDiv = document.createElement('div');

    // fetch the index.html file where we have our custom Ads. then add it to the adsDiv element.
    // thanks to the web_accessible_resources property in the manifest.json we could access our ads.html.
    const url = chrome.runtime.getURL('ads.html');
    fetch(url)
        .then(res => res.text())
        .then(text => adsDiv.innerHTML = text)

    // add the adsDiv element to the parentDiv
    parentDiv.insertBefore(adsDiv, parentDiv.firstChild);
}