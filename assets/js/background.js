chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "someAction") {
        // Perform some task
        sendResponse({ result: "success" });
    }
});
chrome.runtime.sendMessage({ action: "someAction" }, (response) => {
    if (chrome.runtime.lastError) {
        console.error("Error:", chrome.runtime.lastError);
    } else {
        console.log("Response:", response);
    }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "someAction") {
        // Perform some async task
        someAsyncFunction().then(result => {
            sendResponse({ result });
        });
        return true; // Keep the message channel open
    }
});
