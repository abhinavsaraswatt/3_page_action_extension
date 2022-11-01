// Send the message to eventpage to highlight the extension on particular domain.
chrome.runtime.sendMessage({ todo: "showPageAction" });

// Receiving message to change page color
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "changeColor") {
    var addColor = "#" + request.clickedColor;
    $(".stack").css("color", addColor);
  }
});
