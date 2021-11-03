async function logout() {
    try {
        const [userResponse, vendorResponse] = await Promise.all([
            fetch("/api/users/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            }),
            fetch("/api/vendors/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            }),
        ]);

        if (userResponse.ok) {
            document.location.replace('/');
        } else if (vendorResponse.ok) {
            document.location.replace('/');
        }
        else {
            alert('Something went wrong!');
        }
    } catch (error) {
        console.log(error);
    }
}

document.querySelector('#logout').addEventListener('click', logout);