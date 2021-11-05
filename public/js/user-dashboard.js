const reviewbtnArr = document.querySelectorAll(".review_btn")
const reviewArr = document.querySelectorAll('.review_content')
const u_id = document.querySelector('.u-id').id.split('_')[1]
const v_idArr = document.querySelectorAll('.v-id')
const r_idArr = document.querySelectorAll('.r-id')
console.log("js running")
// console.log(reviewbtnArr[0])
// console.log(reviewbtnArr.length)
// console.log(u_id)
// console.log(v_idArr[0].id)
// console.log(r_idArr[0].id)
// console.log(reviewArr[0].value)

async function postReview(rt, uid, vid, pid){
    
    const review_res = await fetch(`/api/reviews/`, {
        method: "POST",
        body: JSON.stringify(
            {   review_text: rt, 
                user_id: uid, 
                vendor_id: vid, 
                pending_id: pid
            }),
        headers: { "Content-Type": "application/json" },
    })

    if(review_res.ok) {
        window.location.reload(true);
    }
    else{
        console.log("error")
    }
}



function init(){
    for(let i=0;i<reviewbtnArr.length;i++){
        const v_id = v_idArr[i].id
        const r_id = r_idArr[i].id
        
        console.log("v_id is: "+v_id)
        console.log("u_id is: "+u_id)
        console.log("r_id is: "+r_id)
        
        reviewbtnArr[i].addEventListener('click', function(event){
            event.preventDefault;
            console.log("button clicked")
            const review_text = reviewArr[i].value
            console.log("review text is: "+review_text)
            postReview(review_text, u_id, v_id, r_id);
        })
    }
}

init()