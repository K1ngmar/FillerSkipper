
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete' && tab.active) {
		if (/^https:\/\/4anime.to/.test(tab.url)) {
			chrome.tabs.executeScript(null, {file: './scripts/foreground.js'}, () => console.log('Foreground script injected'))
		}
	}
})			
