const u_id = document.querySelector('.u-id').id
const v_id = document.querySelector('.v-id').id
const c_id = document.querySelector('.c-id').id
const form = document.querySelector('#newForm')
const status_text = document.querySelector('#status')

console.log("uid="+u_id +" "+ "vid="+v_id+ "cid="+c_id)

async function submitNewRequest(event) {
    event.preventDefault();

    console.log(document.querySelector("#req_description").value)
  
    const name1 = document.querySelector("#req_name").value.trim();
    const description1 = document.querySelector("#req_description").value.trim();
    const address1 = document.querySelector("#req_address").value.trim();
  
    if (name1 && description1 && address1) {
      const response = await fetch(`/api/users/new-request`, {
        method: "POST",
        body: JSON.stringify(
            {   name: name1, 
                description: description1,
                address: address1, 
                vendor_id: v_id, 
                user_id: u_id,
                category_id: c_id
            }),
        headers: { "Content-Type": "application/json" },
    })
  
      response.ok ? status_text.textContent = "Request submitted successfully" : alert(response.statusText);
    }
}

form.addEventListener('submit', submitNewRequest);