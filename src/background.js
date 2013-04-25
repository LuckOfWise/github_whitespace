// Page Action?
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (tab.url.indexOf('github.com') != -1 && (tab.url + " ").indexOf('?w=1 ') == -1) {
		// page action show
		chrome.pageAction.show(tabId);
	}
});

// Clicked?
chrome.pageAction.onClicked.addListener(function() {
  chrome.tabs.getSelected(null, function(tab) { 
	chrome.tabs.executeScript(null, {
		"code": "location.replace('" + tab.url + "?w=1" + "');" 
	});
  });
});
