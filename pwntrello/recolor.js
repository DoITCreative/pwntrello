var trelloRoot = null;
window.onload = initialize

function initialize() {

    trelloRoot = document.getElementById("trello-root");
    if (trelloRoot != null) {
        trelloRoot.style.backgroundColor = null;
        var getting = browser.storage.sync.get("urlbg");
        getting.then(onGot, onError);
    }
}

function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {
    var urlbg = "https://starkovtattoo.spb.ru/images/100/DSC100185527.jpg";
    if (item.urlbg) {
        urlbg = item.urlbg;
    }
    trelloRoot.style.backgroundImage = `url("${urlbg}")`;
}
