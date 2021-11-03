const Searchbar = document.querySelector("#select-category")
const DisplayArea = document.querySelector("#display")

function loadCategory(){

    fetch("/api/categories/")
    .then(function(result){
        return result.json()
    })
    .then(function (categories) {
        console.log(categories)

        for(i=0; i<categories.length; i++){
            let newOption = document.createElement("option")
            newOption.value = categories[i].id
            newOption.innerText = categories[i].name
            console.log(categories[i].name)
            Searchbar.appendChild(newOption)        
    
        }

    })
}

loadCategory()


function display(event){
    event.preventDefault();
    console.log(Searchbar.value)
    if(Searchbar.value!="Select a category"){
        fetch(`/api/categories/vendor/${Searchbar.value}`)
        .then(function(result){
            return result.json()
        })
        .then(function(result) {
            console.log(result)

            for(i=0; i<result.vendors.length; i++){
                let newCard = document.createElement("div")
                newCard.setAttribute("class", "card vendor-card")

                let newCardTitle = document.createElement("h4")
                newCardTitle.setAttribute("class", "card-title")
                newCardTitle.innerText = result.vendors[i].business_name
                newCard.appendChild(newCardTitle)

                let newCardtext = document.createElement("p")
                newCardtext.setAttribute("class", "card-text")
                newCardtext.innerText = `Owned by: ${result.vendors[i].name}`
                newCard.appendChild(newCardtext)


                let newCardlink = document.createElement("a")
                newCardlink.setAttribute("class", "btn btn-primary")
                newCardlink.setAttribute("href", "vendor profile page")
                newCardlink.innerText = "Visit Profile"
                newCard.appendChild(newCardlink)

                DisplayArea.appendChild(newCard)
                
            }
        })
    }
}

document.querySelector("#search-category").addEventListener("click", display)