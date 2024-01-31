document.addEventListener("DOMContentLoaded", function () {



  let addDrinkItem = function (element) {

    let menuItemDiv = document.createElement('div')
    menuItemDiv.classList.add("menu-item")
    let menuHead = document.createElement('h4')
    menuHead.appendChild(document.createTextNode(element.title))
    menuItemDiv.appendChild(menuHead)
    let menuImg = document.createElement('img')
    menuImg.setAttribute('src', element.image)
    menuImg.setAttribute("alt", 'hot-drink')
    menuItemDiv.appendChild(menuImg)
    let menuShowDiv = document.createElement('div')
    menuShowDiv.classList.add("menu-show")
    let menuboxdiv = document.createElement('div')
    let menuBoxInnerDiv = document.createElement('div')
    menuboxdiv.appendChild(menuBoxInnerDiv)
    let innerParag1 = document.createElement('p')
    innerParag1.classList.add("description")
    menuBoxInnerDiv.appendChild(innerParag1)
    innerParag1.appendChild(document.createTextNode(element.description))
    let innerParag2 = document.createElement('p')
    innerParag2.classList.add("title-ing")
    menuBoxInnerDiv.appendChild(innerParag2)
    innerParag2.appendChild(document.createTextNode("Ingredients:"))
    let innerUnList = document.createElement('ul')
    menuBoxInnerDiv.appendChild(innerUnList)
    let ingredients = element.ingredients
    for (let i = 0; i < ingredients.length; i++) {
      let listItems = document.createElement('li')
      listItems.textContent = ingredients[i]
      innerUnList.appendChild(listItems)
    }
    menuboxdiv.classList.add("menu-box")
    menuShowDiv.appendChild(menuboxdiv)
    menuItemDiv.appendChild(menuShowDiv)


    document.querySelector('.menu-container').appendChild(menuItemDiv)
  }
  let api = "https://api.sampleapis.com/coffee/hot";

  fetch(api, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      result.forEach(element => {
        addDrinkItem(element)
      });
    })

})
