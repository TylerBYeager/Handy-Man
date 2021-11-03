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

    fetch(`/api/categories/vendor/${Searchbar.value}`)
    .then(function(result){
        return result.json()
    })
    .then(function(result) {
        console.log(result)

        for(i=0; i<result.vendors.length; i++){
            let newCard = document.createElement("div")
            newCard.setAttribute("class", "card")
            let newCardTitle = document.createElement("h4")
            newCardTitle.setAttribute("class", "card-title")
            let newCardtext = document.createElement("p")
            newCardtext.setAttribute("class", "card-text")
            let newCardlink = document.createElement("a")
            newCardlink.setAttribute("class", "btn btn-primary")
            newCardlink.innerText = "Visit Profile"
            newCard.appendChild(newCardTitle)
            newCard.appendChild(newCardtext)
            newCard.appendChild(newCardlink)
        }
    })
}

