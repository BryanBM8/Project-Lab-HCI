document.addEventListener('DOMContentLoaded', function() {
    var Place = document.querySelector('.Place');
    var imageOffsetTop = Place.offsetTop;
  
    function showTextOnScroll() {
      var scrollPosition = window.pageYOffset + window.innerHeight;
      if (scrollPosition > imageOffsetTop) {
        Place.style.opacity = '1';
      }
    }
  
    window.addEventListener('scroll', showTextOnScroll);
  });
  

  function startSlider() {
    setInterval(() => {
      const upcomingEvent = document.querySelector('#upcoming-events');
      const firstImage = upcomingEvent.firstElementChild;
      upcomingEvent.style.transition = 'transform 0.5s ease-in-out';
      upcomingEvent.style.transform = 'translateX(-50vw)';
      setTimeout(() => {
        upcomingEvent.style.transition = 'none';
        upcomingEvent.style.transform = 'translateX(0)';
        upcomingEvent.appendChild(firstImage);
      }, 500);
    }, 2000); 
  }
  
  startSlider();
  



document.querySelector('#hamburger').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});
