class Calculator {
  constructor() {
    // Initializing the DOM elements
    this.num1Input = document.getElementById("num1");
    this.num2Input = document.getElementById("num2");
    this.operationSelect = document.getElementById("operation");
    this.calculateBtn = document.getElementById("calculateBtn");
    this.resultDisplay = document.getElementById("result");

    // Here i have to attach event listener to the compute button
    this.calculateBtn.addEventListener("click", () => this.compute());
  }

  // Additional Method
  add(num1, num2) {
    return num1 + num2;
  }

  // Subtraction method
  subtract(num1, num2) {
    return num1 - num2;
  }

  // Multiplication method
  multiply(num1, num2) {
    return num1 * num2;
  }

  // Division Methos
  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return num1 / num2;
  }

  compute() {
    try {
      // Parse input values
      const num1 = parseFloat(this.num1Input.value);
      const num2 = parseFloat(this.num2Input.value);
      const operation = this.operationSelect.value;

      if (isNaN(num1) || isNaN(num2)) {
        this.resultDisplay.textContent = "Input is invalid";
        return;
      }

      let result;

      // Method to perform the calculation based on the selected operator
      switch (operation) {
        case "add":
          result = this.add(num1, num2);
          break;
        case "subtract":
          result = this.subtract(num1, num2);
          break;
        case "multiply":
          result = this.multiply(num1, num2);
          break;
        case "divide":
          result = this.divide(num1, num2);
          break;
        default:
          result = "Unknown operation";
      }

      // Display the result
      this.resultDisplay.textContent = result;
    } catch (error) {
      this.resultDisplay.textContent = error.message;
    }
  }
}

// Initialize the calculator when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  new Calculator();
});
