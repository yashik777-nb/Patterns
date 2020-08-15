const singleTon = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: "Yash" });
    return object;
  }
  return {
    getInstance: function () {
      if (!instance) instance = createInstance();
      return instance;
    },
  };
})();

const instanceA = singleTon.getInstance();
console.log(instanceA);

const instanceB = singleTon.getInstance();
console.log(instanceB);

console.log("COMPARE", instanceA === instanceB);
