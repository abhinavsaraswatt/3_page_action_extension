// To highlight our popup.html or icon.
// tab have to be active, be in current window, this gives all the resulting tabs to callback function

/*
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.pageAction.show(tabs[0].id); // this line of code make extension accessible and highlighted when we are at 1st tab

  // and to make accessible on particular doamins, we'll use content scripts.
  // we can do changes to DOM
  // limitation => can't use most of the chrome APIs
  // It simply do is, exchange messages between content scripts, backgound scripts and popup scripts.

  // 1:08 to 2:54 minutes of video, explains really well the relation between content scripts and (background and popup scripts). https://www.youtube.com/watch?v=l2yYv4nF-eU

  // CS Execution Environment
  // it is in isolated world
  // only have access to DOM, not to variables and functions
  // if one button have click event specified in both webpage js and content script, then both get called.
});
*/

// Handling content script message.
// content script will only run when particular domain which is specified in manifest got reached. means tabs[0] is always tab with that particular domain.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // for now we are only concerned with "request" parameter
  if (request.todo == "showPageAction") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.pageAction.show(tabs[0].id);
    });
  }
});
