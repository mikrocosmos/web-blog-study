const modalBtn = document.querySelectorAll('[data-modal]');
modalBtn.forEach(item => {
    item.addEventListener('click', event =>{
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        console.log(modalId);
        let modal = document.getElementById(modalId)
    });
});