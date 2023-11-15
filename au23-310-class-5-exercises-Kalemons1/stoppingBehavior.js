// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
document.getElementById('more-info').addEventListener('click', (event) => {
  event.preventDefault();
  alert("Here's some info");
});

// instead of going to a new webpage

// When the bark button is clicked, should alert "Bow wow!"
document.getElementById("dog").addEventListener('click', (event) => {
  event.preventDefault(); 
  alert("Bow Wow");
});
// Should *not* alert "meow"
