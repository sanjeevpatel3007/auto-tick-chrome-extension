# Auto Tick Chrome Extension

A simple and efficient Chrome extension that automatically ticks checkboxes on any webpage. Perfect for quickly filling out forms, surveys, or any page with multiple checkboxes.

## Features

- ✅ **Automatic Checkbox Ticking**: Automatically checks all checkboxes on any webpage
- 🎛️ **Easy Toggle Control**: Simple enable/disable switch in the popup
- 💾 **Persistent Settings**: Your preferences are saved and persist across browser sessions
- 🌐 **Works on All Websites**: Compatible with any webpage containing checkboxes
- 🔄 **Real-time Updates**: Changes take effect immediately when you visit new pages
- 🎯 **Smart Detection**: Only ticks unchecked boxes to avoid conflicts

## Installation

### Method 1: Load Unpacked Extension (Recommended for Development)

1. **Download the Extension**
   - Go to the GitHub repository: https://github.com/sanjeevpatel3007/auto-tick-chrome-extension
   - Click the green "Code" button
   - Select "Download ZIP"

2. **Extract the Files**
   - Locate the downloaded `.zip` file on your computer
   - Right-click the file and select "Extract All" (or use any unzip tool)
   - Choose a location to extract the files
   - You now have a folder containing all the extension files

3. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Type `chrome://extensions/` in the address bar
   - Press Enter

4. **Enable Developer Mode**
   - Look for the "Developer mode" toggle in the top-right corner
   - Turn it ON

5. **Load the Extension**
   - Click the "Load unpacked" button
   - Browse to the folder you extracted earlier
   - Select the folder and click "Select Folder"
   - The extension should now appear in your extensions list

### Method 2: Chrome Web Store (Future Release)

*This extension will be available on the Chrome Web Store soon for easier installation.*

## How to Use

### Basic Usage

1. **Access the Extension**
   - Look for the Auto Tick icon in your Chrome toolbar (top-right)
   - Click on the icon to open the popup

2. **Enable Auto Tick**
   - In the popup, you'll see a checkbox labeled "Enable Auto Tick"
   - Check this box to enable automatic checkbox ticking
   - The setting is automatically saved

3. **Visit Any Webpage**
   - Navigate to any webpage that contains checkboxes
   - If the extension is enabled, all checkboxes will be automatically ticked
   - The extension works on forms, surveys, settings pages, and more

### Disabling the Extension

- **Temporary Disable**: Uncheck the "Enable Auto Tick" box in the popup
- **Complete Removal**: Go to `chrome://extensions/`, find Auto Tick, and click "Remove"

## Supported Websites

The extension works on **any website** that contains HTML checkboxes, including:

- ✅ Online forms and surveys
- ✅ E-commerce sites with filters
- ✅ Settings pages
- ✅ Social media platforms
- ✅ Educational websites
- ✅ Government forms
- ✅ And many more!

## Technical Details

### Files Structure
```
auto-tick-chrome-extension/
├── manifest.json      # Extension configuration
├── background.js      # Background service worker
├── content.js         # Content script for webpage interaction
├── popup.html         # Extension popup interface
├── popup.js           # Popup functionality
└── README.md          # This file
```

### Permissions Used
- `activeTab`: Access to the currently active tab
- `scripting`: Ability to inject scripts into web pages
- `storage`: Save and retrieve user preferences

### How It Works
1. The extension uses a content script that runs on every webpage
2. When a page loads, it checks if auto-tick is enabled
3. If enabled, it finds all checkboxes and automatically checks them
4. Change events are triggered to notify the webpage of the changes

## Troubleshooting

### Extension Not Working?

1. **Check if it's Enabled**
   - Go to `chrome://extensions/`
   - Make sure Auto Tick is enabled (toggle should be blue)

2. **Verify Settings**
   - Click the extension icon
   - Ensure "Enable Auto Tick" is checked

3. **Refresh the Page**
   - Sometimes you need to refresh the webpage for changes to take effect

4. **Check for Errors**
   - Open Chrome DevTools (F12)
   - Look for any error messages in the Console tab

### Extension Not Appearing?

1. **Check Installation**
   - Go to `chrome://extensions/`
   - Look for Auto Tick in the list
   - If not there, try loading it again

2. **Pin the Extension**
   - Right-click the extension icon in the toolbar
   - Select "Pin" to keep it visible

### Checkboxes Not Being Ticked?

1. **Page Structure**
   - Some websites use custom checkbox implementations
   - The extension works with standard HTML checkboxes

2. **Dynamic Content**
   - If checkboxes are loaded dynamically, refresh the page
   - The extension runs when the page loads

## Privacy & Security

- 🔒 **No Data Collection**: This extension does not collect or store any personal data
- 🌐 **Local Storage Only**: Settings are stored locally in your browser
- 📡 **No Network Requests**: The extension doesn't send any data to external servers
- 🔐 **Open Source**: All code is publicly available for review

## Contributing

We welcome contributions! If you'd like to improve the extension:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

If you encounter any issues or have questions:

- 📧 **Email**: sanjeevpatel3007@gmail.com
- 🐛 **Report Issues**: Create an issue on GitHub
- 💡 **Feature Requests**: Submit via GitHub issues

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Version History

- **v1.0** - Initial release with basic auto-tick functionality
- Future versions will include additional features and improvements

---

**Note**: This extension is designed for legitimate use cases like filling out forms quickly. Please use responsibly and in accordance with website terms of service.
