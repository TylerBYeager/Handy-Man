const reviewbtnArr = document.querySelectorAll(".review_btn")
const reviewArr = document.querySelectorAll('.review_content')
console.log(reviewArr)

async function postReview(){
    const approve_res = await fetch(`/api/vendors/approve/${id}`, {
        method: "POST"

    })

    if(approve_res.ok) {
        window.location.reload(true);
    }
}

for(i=0;i<approveArr.length;i++){
    let pending_id = approveArr[i].id.split('_')[1]
    console.log("pending_id is: "+pending_id)
    approveArr[i].addEventListener('submit', function(event){
        event.preventDefault;
        postReview(pending_id);
    })
}