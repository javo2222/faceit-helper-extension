var contextMenus = {

}

contextMenus.createFaceitHelper = chrome.contextMenus.create(
    {
        "title": "Jump to Faceit Helper",
        "contexts": ["all"]
    },
    function() {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    }
);

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tab) {
    if (info.menuItemId === contextMenus.createFaceitHelper) {
        chrome.tabs.getSelected(null,function(tab) {
            if (tab.url.indexOf('faceit') > -1 && tab.url.indexOf('room') > -1) {
                var urlParts = tab.url.split("/");
                var roomId = urlParts[urlParts.length - 1];
                console.log(roomId);
                window.open("https://javo2222.github.io/faceit/stats/" + roomId);
            }
        });
    }
}
