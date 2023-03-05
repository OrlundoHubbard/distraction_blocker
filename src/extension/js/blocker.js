// urls to be blocked
const blockedUrls = [
    "https://www.facebook.com/*",
    "https://www.twitter.com/*",
    "https://instagram.com/*"
];

// start and end time of the blocking period
const startTime = 9;
const endTime = 17;

// function to check if the current is within the blocking period
function isWithinBlockingPeriod() {
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour >= startTime && currentHour < endTime;
}

// Define a function to block the URLs
function blockUrls() {
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {return {cancel: true}; }
    )
}

// add an event listener to detect when the extension is installed or updated
chrome.runtime.onInstalled.addListener(function() {
    // set up the initial state of the extension
    if (isWithinBlockingPeriod()) {
        blockUrls();
    }
});