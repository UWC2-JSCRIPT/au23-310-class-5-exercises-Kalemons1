// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let counter = 0;

      function updateCounter(value) {
        counter += value;
        document.getElementById("count").innerHTML = counter;
        console.log(`count is ${counter}`);
      }

      document.getElementById("increase").addEventListener("click", () => {
        updateCounter(+1);
      }); 

      document.getElementById("decrease").addEventListener("click", () => {
        updateCounter(-1); // Decrease by 1
      });