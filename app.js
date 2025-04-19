const hamb = document.querySelector('.header .nav-bar .nav-list .hamb');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header');

// Toggle mobile menu
hamb.addEventListener('click', () => {
  hamb.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

// Change header background on scroll
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// AOS Animation setup
AOS.init({
  duration: 1000,
  offset: 100,
  once: true,
  easing: 'ease-in-out'
});

// Project Modal Functions
function openModal(projectId) {
    const card = document.querySelector(`[onclick="openModal('${projectId}')"]`);
    const title = card.getAttribute("data-title");
    const description = card.getAttribute("data-description");
  
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
  
    document.getElementById("projectModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("projectModal").style.display = "none";
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  