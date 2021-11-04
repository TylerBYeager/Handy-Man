async function loginEventHandler(event) {
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (email && password) {
        const response = await fetch("/api/users/login/", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        response.ok
            ? document.location.replace("/")
            : alert(`${response.statusText}\nEmail or password invalid`);
    }
}

document
    .querySelector("#login-form")
    .addEventListener("submit", loginEventHandler);
