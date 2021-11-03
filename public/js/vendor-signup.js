async function submitButtomHandler(event) {
    event.preventDefault();

    const name = document.querySelector("#name-signup").value.trim();
    const businessName = document.querySelector("#businessname-signup").value.trim();
    const phone = document.querySelector("#vendornumber-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (name && businessName && phone && password && email) {
        const response = await fetch("/api/vendors/", {
            method: "POST",
            body: JSON.stringify({ name, phone, email, password }),
            headers: { "Content-Type": "application/json" },
        });

        response ? document.location.replace("/") : alert(response.statusText);
    }
}


document.querySelector('#signup-form').addEventListener('submit', submitButtomHandler);