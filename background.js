chrome.runtime.onInstalled.addListener(() => {
    console.log("Auto Tick Extension Installed!");
    // Initialize storage with default value
    chrome.storage.sync.get('enabled', (data) => {
      if (data.enabled === undefined) {
        chrome.storage.sync.set({ enabled: false });
      }
    });
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getEnabled') {
    chrome.storage.sync.get('enabled', (data) => {
      sendResponse({ enabled: data.enabled || false });
    });
    return true; // Keep the message channel open for async response
  }
});
  