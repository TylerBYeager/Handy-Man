const reviewbtnArr=document.querySelectorAll(".review_btn"),reviewArr=document.querySelectorAll(".review_content"),u_id=document.querySelector(".u-id").id.split("_")[1],v_idArr=document.querySelectorAll(".v-id"),r_idArr=document.querySelectorAll(".r-id");async function postReview(e,r,i,t){(await fetch(`/api/reviews/`,{method:"POST",body:JSON.stringify({review_text:e,user_id:r,vendor_id:i,pending_id:t}),headers:{"Content-Type":"application/json"}})).ok?window.location.reload(!0):console.log("error")}function init(){for(let r=0;r<reviewbtnArr.length;r++){var i=v_idArr[r].id,t=r_idArr[r].id;reviewbtnArr[r].addEventListener("click",function(e){e.preventDefault,postReview(reviewArr[r].value,u_id,i,t)})}}init();