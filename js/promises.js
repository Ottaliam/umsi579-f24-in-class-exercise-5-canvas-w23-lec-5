// PROMISES!
// Some learners find Promises a bit difficult to understand.
//
// In this course, you'll only deal with fetch() related promises/
// So, when in doubt, start with this snippet:
/*
fetch('https://some-url.com')
 .then((res) => res.json())
 .then((json) => {
    console.log('here is your fetch result! Do stuff with it!', json)
 })
 .catch((error) => {
    console.warn('here is your fetch error! Fix the error!', error)
 });
 */
// The umich events feed is a reliable feed to get used to API calls with
// https://events.umich.edu/day/json?v=2

// We have provided a function that returns a promise to help
// demonstrate what promises do.
const orderShoesOnline = () => {
  const shoesInStock = document.querySelector('#shoes-in-stock').checked;
  // The two arguments sent to a promise function are
  // resolve and reject. They've been renamed here to help with
  // the analogy.
  // When you order shoes online, the store PROMISES to send you the shoes.
  // After you place the order, you do other things like eat, sleep and go to class.
  // You don't have to even think about the order until it's delivered.
  // (or if it's not in stock, they'll tell you immediately)
  return new Promise((fulfillOrder, rejectOrder) => {
    if (shoesInStock) {
      // It takes the store 3000 milliseconds to deliver your order. Not bad.
      setTimeout(() => {
        // They were able to fulfill your order and send a message
        // telling you where to pick it up.
        fulfillOrder('Package on your front porch');
      }, 3000);
    } else {
      // They sent a message telling you why they couldn't fulfill the order.
      rejectOrder('Not in stock');
    }
  })
}

const clickBuyShoesCallback = (e) => {
  // We already placed our order.
  const placedOrder = orderShoesOnline();
  // @todo First, try sending the order to the Jumbotron and see what you get
  // by uncommenting the line below.
  // sendToJumbotron(placedOrder);

  // Take note of what is in the Jumbotron, then
  // make that line a comment again.

  // @todo placedOrder represents the fact that you placed the order.
  // Use .then() to react to when the order is delivered, and send the
  // delivery message to the Jumbotron
  // Use .catch() to send order rejection messages to the Jumbotron.

  // Uncomment below 👇 to place your order and send the results
  // to the Jumbotron.
  placedOrder
    .then((response) => {
      sendToJumbotron(response);
    })
    .catch((error) => {
      sendToJumbotron(error);
    });

    // @todo keep this sendToJumbotron at the bottom of the function.
    // Notice how it shows up in the Jumbotron before the delivery
    // message, even though the code appears later. That's because Promises
    // don't prevent other code from executing as they work.
    sendToJumbotron('I am waiting for my shoes');
}

//** fetch() grabs the contents of a remote resource.
//** fetch() returns a Promise!

const fetchFromItunesSendResponseCallback = () => {
  // @todo we are going to use fetch() to get data from itunes
  //  with this url:
  // 'https://itunes.apple.com/search?term=hoobastank'
  // Chain one .then() to fetch, and send the response to the
  // Jumbotron.
  // @see https://www.javascripttutorial.net/javascript-fetch-api/
  fetch('https://itunes.apple.com/search?term=hoobastank')
    .then((response) => {
    // @todo, send the response to the Jumbotron.
      sendToJumbotron(response);
    });
}

const fetchFromItunesSendJsonCallback = () => {
  // @todo, as seen in the prior function, fetch returns
  // a Response object. An additional step is needed to
  // get the data out of that response.
  // Fetch 'https://itunes.apple.com/search?term=hoobastank' again.
  // There should be *two* .then() uses
  // The first should return response.json
  // the second will receive the parsed json, and it should be sent
  // to the Jumbotron.
  //@see   // @see https://www.javascripttutorial.net/javascript-fetch-api/
  fetch('https://itunes.apple.com/search?term=hoobastank')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      sendToJumbotron(json);
    });
}

// The need to chain two uses of then() might be confusing. It would be normal to ask
// "why not just give me the thing I wanted with fetch(), without that `Response` step?"
// For now just keep two things in mind
// - Responses can be huge, so getting data from the response (such as json()) is also
//   returned as a promise.
// - Responses can have different structures so we need the flexibility to choose how
//   to parse the response contents.
// @see https://developer.mozilla.org/en-US/docs/Web/API/Response


/****** OK NOW YOU TRY IT ON YOUR OWN! *******/

// https://yesno.wtf provides a random yes or no with a gif.
// it also has a public API that you will be using below

const fetchFromYesNoSendResponseCallback = () => {
  // @todo,similar to fetchFromItunesSendResponseCallback()
  // fetch https://yesno.wtf/api
  // send the response to the jumbotron
  fetch('https://yesno.wtf/api')
    .then((response) => {
      sendToJumbotron(response);
    });
}

const fetchFromYesNoSendJsonCallback = () => {
  // @todo simlar to fetchFromItunesSendJsonCallback()
  // fetch  https://yesno.wtf/api
  // send the parsed JSON to the jumbotron.
  fetch('https://yesno.wtf/api')
    .then((response) => response.json())
    .then((json) => {
      sendToJumbotron(json);
    });
}
