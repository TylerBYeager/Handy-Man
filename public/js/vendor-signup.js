async function submitButtomHandler(event) {
    event.preventDefault();

    const name = document.querySelector("#name-signup").value.trim();
    const business_name = document.querySelector("#businessname-signup").value.trim();
    const phone = document.querySelector("#vendornumber-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    const category_id = document.querySelector("#category-signup").value;
    console.log(category_id);

    if (name && business_name && phone && password && email && category_id) {
        const response = await fetch("/api/vendors/", {
            method: "POST",
            body: JSON.stringify({ name, business_name, phone, email, password, category_id }),
            headers: { "Content-Type": "application/json" },
        });

        response.ok ? document.location.replace("/") : alert(response.statusText);
    }
}


document.querySelector('#signup-form').addEventListener('submit', submitButtomHandler);