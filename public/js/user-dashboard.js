const reviewbtnArr = document.querySelectorAll(".review_btn")
const reviewArr = document.querySelectorAll('.review_content')
const u_id = document.querySelector('.u-id').id.split('_')[1]
const v_idArr = document.querySelectorAll('.v-id')
const r_idArr = document.querySelectorAll('.r-id')

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

        
        reviewbtnArr[i].addEventListener('click', function(event){
            event.preventDefault;
            
            const review_text = reviewArr[i].value
            
            postReview(review_text, u_id, v_id, r_id);
        })
    }
}

init()