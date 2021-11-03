async function submitButtomHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const phone = document.querySelector("#usernumber-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && phone && password && email) {
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({ name, phone, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    response ? document.location.replace("/") : alert(response.statusText);
  }
}


document.querySelector('#signup-form').addEventListener('submit', submitButtomHandler);