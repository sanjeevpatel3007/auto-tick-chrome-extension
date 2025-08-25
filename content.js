// Get enabled state from background script and tick checkboxes if enabled
chrome.runtime.sendMessage({ action: 'getEnabled' }, (response) => {
  if (response && response.enabled) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(box => {
      if (!box.checked) {
        box.checked = true;
        // Trigger change event to notify the page
        box.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  }
});
  