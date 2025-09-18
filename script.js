// ======= Part 2: Function to animate a box using CSS class =======
function triggerAnimation() {
  const box = document.getElementById("animatedBox");
  box.classList.remove("animate-slide"); // Reset animation if needed
  void box.offsetWidth; // Trick to reflow and restart animation
  box.classList.add("animate-slide");
}

// ======= Part 3: Function to toggle modal visibility =======
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("show");
}

// ======= Part 4: Function with parameters, return value, and scope =======

// Global tax rate
const TAX_RATE = 0.15;

// Function to calculate total price
function calculateTotal(price, tax) {
  return price + price * tax;
}

// Use function and display result in DOM
function showTotal() {
  const total = calculateTotal(50, TAX_RATE); // Using global TAX_RATE
  document.getElementById("totalOutput").textContent = `Total: $${total.toFixed(2)}`;
}
