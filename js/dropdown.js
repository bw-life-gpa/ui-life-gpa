
class Dropdown {
    constructor(element) {
      
      // Assign this.element to the dropdown element
      this.element= element;
      
      // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
      this.button = document.querySelector(".nav-btn");
      
      // assign the reference to the ".dropdown-content" class found in the dropdown element
      this.content = document.querySelector(".links");
      this.link = document.querySelectorAll(".link");
      
      //selct overlay for the background.
      this.navBG = document.querySelector(".navBG");
      
      // Add a click handler to the button reference and call the toggleContent method.
      
      this.button.addEventListener('click', () => {
        this.toggleContent();
      })
      this.navBG.addEventListener('click', () => {
        this.toggleContent();
      })
      this.link[0].addEventListener('click', () => {
        this.toggleContent();
      });
      this.link[1].addEventListener('click', () => {
        this.toggleContent();
      });
      this.link[2].addEventListener('click', () => {
        this.toggleContent();
      });
    }
  
    toggleContent() {
      
      // Toggle the ".dropdown-hidden" class off and on
      this.content.classList.toggle("dropdown-selected");
      this.navBG.classList.toggle("dropdown-selected2");
    }
  }
  
  
  // Nothing to do here, just study what the code is doing and move on to the Dropdown class
  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));