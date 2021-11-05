const dashboard = document.querySelector('#dashboard')
console.log(req.session.user_id)

if(req.session.user_id){
    dashboard.setAttribute('href', `/user-dashboard/${req.session.user_id}`)
}
else if(req.session.vendor_id){
    dashboard.setAttribute('href', `/user-dashboard/${req.session.vendor_id}`)
}

