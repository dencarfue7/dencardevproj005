const panels = document.querySelectorAll('.panel');

//functions
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

//event listeners
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});