// Create Date objects
const currentDate = new Date();
const specificDate = new Date('2025-12-25T10:30:00');

// Extract and manipulate components
console.log("Current Date:", currentDate);
console.log("Day:", currentDate.getDate());
console.log("Month:", currentDate.getMonth() + 1); // Months are 0-indexed
console.log("Year:", currentDate.getFullYear());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());

// Format and display
const formatted = currentDate.toLocaleString('en-IN', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});
console.log("Formatted Date:", formatted);