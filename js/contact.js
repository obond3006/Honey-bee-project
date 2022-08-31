(function(){
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status")

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                console.log("Thanks for your submission!");
                status.innerText = "Thanks for your submission!";
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerText += data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        console.log("Oops! There was a problem submitting your form");
                        status.innerText = "Oops! There was a problem submitting your form";
                    }
                })
            }
        }).catch(error => {
            console.log("Oops! There was a problem submitting your form");
            status.innerText = "Oops! There was a problem submitting your form";
        });
    }
    form.addEventListener("submit", handleSubmit)
})();