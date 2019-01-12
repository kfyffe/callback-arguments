// The second argument/parameter is expected to be a function
var indexWaldo = 0;

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      indexWaldo = i;
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found Waldo at index " + indexWaldo + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



