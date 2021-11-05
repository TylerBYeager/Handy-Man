const approveArr = document.querySelectorAll('.approve')
console.log(approveArr)

async function approve(id){
    const approve_res = await fetch(`/api/vendors/approve/${id}`, {
        method: "PUT"
    })

    if(approve_res.ok) {
        window.location.reload(true);
    }
}

for(i=0;i<approveArr.length;i++){
    let pending_id = approveArr[i].id.split('_')[1]
    console.log("pending_id is: "+pending_id)
    approveArr[i].addEventListener('click', function(event){
        event.preventDefault;
        approve(pending_id);
    })
}