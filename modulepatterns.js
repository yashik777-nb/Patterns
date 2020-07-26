// Basic Structure

// (function () {
//   // Declare private vars and functions

//   return {
//     // Declare public vars and functions
//   };
// })();

// Standard Modular Pattern
// UI Controller
const UIctrl = (function () {
  let text = "Hello World";
  const changeText = function () {
    document.querySelector("h1").textContent = text;
  };

  return {
    callChangeText: function () {
      console.log(text);
      changeText();
    },
  };
})();

UIctrl.callChangeText();
// UIctrl.changeText();
// console.log(UIctrl.text);

// Revealing Module Pattern
const ItemCtrl = (function () {
  let data = [];
  function add(item) {
    data.push(item);
    console.log("Item Added");
  }
  function get(id) {
    return data.find((item) => item.id === id);
  }

  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "Yash" });
ItemCtrl.add({ id: 2, name: "Janaki" });
console.log(ItemCtrl.get(2));
