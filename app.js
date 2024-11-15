
const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const containerList = document.querySelectorAll(".container");



function toggleSubMenu(button){

    if(!button.nextElementSibling.classList.contains('show')){
      closeAllSubMenus()
    }
  
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')
  
    if(sidebar.classList.contains('close')){
      sidebar.classList.toggle('close')
      toggleButton.classList.toggle('rotate')
    }
  }

  function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  
    closeAllSubMenus()
  }

var allLis = document.querySelectorAll(".active");

document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();       

        // Ascunde toate containerele
        document.querySelectorAll('.container').forEach(container => {
            container.style.display = 'none';

        });
        // Obține ID-ul containerului țintă din atributul data-target
        const targetId = this.getAttribute('data-target');

        document.querySelectorAll(".sidebar-link").forEach(element=> element.classList.remove('active'));

        link.parentElement.classList.add('active');

        // Afișează containerul corespunzător
        const targetContainer = document.getElementById(targetId);
        if (targetContainer) {
            targetContainer.style.display = 'block';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    });
});


function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
      ul.classList.remove('show')
      ul.previousElementSibling.classList.remove('rotate')
    })
  }







