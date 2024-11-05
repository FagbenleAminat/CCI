  /* The slideshow effect */

window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.slide-up');
    let windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      let positionFromTop = element.getBoundingClientRect().top;
  
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('active');
      }
    });
  });
  
  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";}  

}