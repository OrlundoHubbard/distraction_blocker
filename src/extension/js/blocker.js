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