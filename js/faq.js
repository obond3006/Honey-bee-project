// FAQ Accordion
(function () {
    const accordions = document.querySelectorAll(".accordion-label");
  
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function () {

            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.classList.remove("is-open");
            } else {
                let active = document.querySelectorAll(".accordion-label.is-open");
                for(let j = 0; j < active.length; j++) {
                    active[j].classList.remove("is-open");
                    active[j].nextElementSibling.style.maxHeight = null;
                }
            this.classList.toggle("is-open");
            content.style.maxHeight = content.scrollHeight + "px";
            }
        })
    }
})();

