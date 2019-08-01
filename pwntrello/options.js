function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        urlbg:document.querySelector("#urlbg").value
    });
}
function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector("#urlbg").value = result.urlbg || "https://starkovtattoo.spb.ru/images/100/DSC100185527.jpg";
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.sync.get("urlbg");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded",restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
