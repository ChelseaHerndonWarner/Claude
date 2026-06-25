// Literacy Arcade — ORF Fluency Calculator launcher
// Clicking the toolbar icon opens the live tool in a new tab.
// Because it loads from the website, the extension always shows the newest version.

const TOOL_URL = "https://literacyarcade.com/orf-fluency-calculator.html";

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: TOOL_URL });
});
