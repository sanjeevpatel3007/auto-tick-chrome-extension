const toggle = document.getElementById('toggleTick');

// Load current state when popup opens
chrome.storage.sync.get('enabled', (data) => {
  toggle.checked = data.enabled || false;
});

// Save state when toggle changes
toggle.addEventListener('change', () => {
  chrome.storage.sync.set({ enabled: toggle.checked }, () => {
    console.log('Auto tick enabled:', toggle.checked);
  });
});
