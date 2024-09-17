// HEY! FYI just in case it was not apparent, the sendToJumbotron() function
// is something written specifically for this assignment. It provides an easy  way to
// display our results on the page.


// @see https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
const sendMessageIn2SecondsCallback = () => {
  // @todo This sends a message to the Jumbotron, but it should
  // not show up until 2 seconds. How would we do this?
  setTimeout(() => {
    sendToJumbotron('I should show up in two seconds');
  }, 2000);
  sendToJumbotron('Message Pending');

  // Start by sending "Message Pending" to jumbotron,
  // then two seconds later, use setTimeout to update the
  // jumbotron with 'I should show up in two seconds.'
}

// We've added an intervalId that will be used by the functions below.
let intervalId = null;

const startCounterCallback = () => {
  // @todo Use setInterval to update the Jumbotron every 500ms,
  // begin with the number 1 and count up by 1 every cycle.
  // @see https://developer.mozilla.org/en-US/docs/Web/API/setInterval
  let count = 1;
  intervalId = setInterval(() => {
    sendToJumbotron(count);
    count += 1;
  }, 500);
}

// @see https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
const stopCounterCallback = () => {
  // @todo, using the intervalId, stop the counter and send
  // 'stopped' to the Jumbotron.
  clearInterval(intervalId);
  sendToJumbotron("stopped");
}
