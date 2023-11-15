// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
document.addEventListener('DOMContentLoaded', function() {
    const tdElements = document.querySelectorAll('td');
  
    function updateCoordinates(event) {
      const x = event.clientX;
      const y = event.clientY;
      event.target.innerHTML = `Clicked at: (${x}, ${y})`;
    }
  
    tdElements.forEach((td) => {
      td.addEventListener('click', updateCoordinates);
    });
  });
