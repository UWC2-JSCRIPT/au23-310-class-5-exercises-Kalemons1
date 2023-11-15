// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const buyNowLink = document.createElement('a');
      buyNowLink.href = '#'; 
      buyNowLink.textContent = 'Buy Now!';
      buyNowLink.id = 'cta';

// Access (read) the data-color attribute of the <img>,
// log to the console
const mainElement = document.querySelector('main');
      mainElement.appendChild(buyNowLink); 
      const imgElement = document.querySelector('img');
      const dataColor = imgElement.getAttribute('data-color');
      console.log(`Data Color: ${dataColor}`);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const thirdLiElement = document.querySelector('ul li:nth-child(3)');
thirdLiElement.className = 'highlight';

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const lastParagraph = document.querySelector('main p:last-of-type');
  lastParagraph.remove(); 