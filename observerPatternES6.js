// Used to notify the DOM of certain elements to be updated
// Angular.js relies heavily on the pattern through event management with in the scope
class EventObserver {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now Subscribed to ${fn.name}`);
  }
  unsubscribe(fn) {
    /* Filter out from the list whatever matches the callback function. 
      If there is no match, the callback gets to stay on the list. The filter returns a new list and re-assigns 
      the list of observers. */
    this.observers = this.observers.filter(function (item) {
      if (item != fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }
  fire() {
    this.observers.forEach(function (item) {
      item.call();
    });
  }
}

const click = new EventObserver();

// Event Listnerers
document.querySelector(".sub-ms").addEventListener("click", function () {
  click.subscribe(getCurrentMilliSeconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function () {
  click.unsubscribe(getCurrentMilliSeconds);
});

document.querySelector(".sub-s").addEventListener("click", function () {
  click.subscribe(getCurrentSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function () {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector(".fire").addEventListener("click", function () {
  click.fire();
});

// Click Handler
const getCurrentMilliSeconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurrentSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
