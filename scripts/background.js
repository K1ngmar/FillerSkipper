


function	skipEpisode(data) {
	console.log(data);
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete' && tab.active) {
		if (/^https:\/\/4anime.to/.test(tab.url)) {
			var url		= chrome.runtime.getURL("./data/fillers.json")
			console.log(url);
			fetch(url)
				.then(response => {
					if (!response.ok) {
						throw new Error("HTTP error " + response.status);
					}
					skipEpisode(response.json());
				})

			chrome.tabs.executeScript(null, {file: './scripts/foreground.js'}, () => console.log('Foreground script injected'))
		}
	}
})	
