let elHeaderTag = document.querySelector(".header")


let elLogoLink = document.createElement("a")
let elLogoImg = document.createElement("img")
let elList = document.createElement("ul")
let elRegisterBtn = document.createElement("button")

elLogoLink.classList.add("header__logo-link")
elLogoImg.classList.add("header__logo-img")
elList.classList.add("header__list")
elRegisterBtn.classList.add("header__register-btn")

elLogoImg.setAttribute("src", "./images/Logo.svg")
elLogoImg.setAttribute("width", "106")
elLogoImg.setAttribute("height", "45")
elRegisterBtn.textContent = "Register"

elHeaderTag.append(elLogoLink, elList, elRegisterBtn)
elLogoLink.appendChild(elLogoImg)

let items = [
  {
    id:1,
    name:"Home"
  },
  {
    id:2,
    name:"About"
  },
  {
    id:3,
    name:"Packages"
  },
  {
    id:4,
    name:"Contact Us"
  },
  {
    id:5,
    name:"FAQ"
  },
]
function generateHTMLEl(arr){
  arr.map(item => {
    let elItem = document.createElement("li")
    let elListLink = document.createElement("a")
    
    elItem.classList.add("header__item")
    elListLink.classList.add("header__item-link")
    
    elListLink.textContent = item.name
    elListLink.setAttribute("href", "#")
    
    elItem.appendChild(elListLink)
    elList.appendChild(elItem)
  })
}
generateHTMLEl(items)

let elHeroTag = document.querySelector(".hero")


let elHeroImg = document.createElement("img")
let elHeroContent = document.createElement("div")
let elHeroSpan = document.createElement("span")
let elHeroTitle = document.createElement("h1")
let elHeroTitleImg = document.createElement("img")
let elHeroText = document.createElement("p")
let elHeroLink = document.createElement("a")

elHeroSpan.textContent = "Book Now"
elHeroTitle.textContent = "Let’s Enjoy Your Trip with TripGoal"
elHeroText.textContent = "Thinking of taking a break from every day's busy life? Planning to go out of the country with your loved ones to have some fun and quality time in a cost-effective way?"
elHeroLink.textContent = "Start Now"

elHeroContent.classList.add("hero__content")
elHeroImg.classList.add("hero__img")
elHeroSpan.classList.add("hero__span")
elHeroTitle.classList.add("hero__title")
elHeroTitleImg.classList.add("hero__title-img")
elHeroText.classList.add("hero__text")
elHeroLink.classList.add("hero__link")


elHeroImg.setAttribute("src", "./images/hero-mountain.png")
elHeroImg.setAttribute("width", "569")
elHeroImg.setAttribute("height", "597")

elHeroTitleImg.setAttribute("src", "./images/hero-rocket.png")
elHeroTitleImg.setAttribute("width", "41")
elHeroTitleImg.setAttribute("height", "41")


elHeroTag.append(elHeroImg,elHeroContent)
elHeroContent.append(elHeroSpan, elHeroTitle, elHeroText, elHeroLink)

let elLocationTag = document.querySelector(".Location")

let elLocationList = document.createElement("ul")
let elLocationBtn = document.createElement("button")
elLocationList.classList.add("Location__list")
elLocationBtn.classList.add("Location__btn")
elLocationBtn.textContent = "Book Now"
elLocationTag.append(elLocationList, elLocationBtn)

let items2 = [
  {
    id:1,
    name:"Location",
  },
  {
    id:2,
    name:"Your Category",
  },
  {
    id:3,
    name:"Total Person",
  },
]
function generateHTMLEl2(arr2){
  arr2.map(greet => {
    let elLocationItem = document.createElement("li")
    let elLocationLink = document.createElement("a")
    let elLocationText = document.createElement("p")
    
    elLocationItem.classList.add("Location__item")
    elLocationLink.classList.add("Location__link")
    elLocationText.classList.add("Location__text")
    
    elLocationText.textContent = "Select"
    
    elLocationLink.textContent = greet.name
    elLocationLink.setAttribute("href", "#")
    
    elLocationItem.appendChild(elLocationLink)
    elLocationLink.appendChild(elLocationText)
    elLocationList.appendChild(elLocationItem)
  })
}
generateHTMLEl2(items2)

let elFindTag = document.querySelector(".find")

let elFindContent = document.createElement("div")
let elFindSpan = document.createElement("span")
let elFindTitle = document.createElement("h1")
let elFindText = document.createElement("p")

elFindSpan.textContent = "3 steps for the perfect trip"
elFindTitle.textContent = "Find travel perfection"
elFindText.textContent = "Naturally head of the class whenit comes to luxury travel planning,bbecause we do more homework than anyone else"

elFindContent.classList.add("find__content")
elFindSpan.classList.add("find__span")
elFindTitle.classList.add("find__title")
elFindText.classList.add("find__text")

elFindTag.append(elFindContent)
elFindContent.append(elFindSpan, elFindTitle, elFindText)

let elTravelTag = document.querySelector(".travel")
let elTravelList = document.createElement("ul")

elTravelList.classList.add("travel__list")

elTravelTag.append(elTravelList)
let items3 = [
  {
    id:1,
    name:"Tell us what you want to do",
  },
  {
    id:2,
    name:"Share your travel preference",
  },
  {
    id:3,
    name:"We’ll give you recommendations",
  },
]
function generateHTMLEl3(arr3){
  arr3.map(greet1 => {
    let elTravelItem = document.createElement("li")
    let elTravelLink = document.createElement("a")
    let elTravelText = document.createElement("p")
    
    elTravelItem.classList.add("travel__item")
    elTravelLink.classList.add("travel__link")
    elTravelText.classList.add("travel_text")
    elTravelText.textContent = "Fill out a 2-minute questionnaire about how you like to travel"
    
    elTravelLink.textContent = greet1.name
    elTravelLink.setAttribute("href", "#")
    
    elTravelItem.appendChild(elTravelLink)
    elTravelLink.appendChild(elTravelText)
    elTravelList.appendChild(elTravelItem)
  })
}
generateHTMLEl3(items3)





let elSuggestedTag = document.querySelector(".suggested")

let elSuggestedCards = document.createElement("div")
let elSuggestedContent = document.createElement("div")
let elSuggestedSpan = document.createElement("span")
let elSuggestedTitle = document.createElement("h1")
let elSuggestedText = document.createElement("p")
let elSuggestedContent2 = document.createElement("div")
let elSuggestedContent3 = document.createElement("div")
let elSuggestedVectors = document.createElement("img")
let elSuggestedVectors2 = document.createElement("img")
let elSuggestedImages = document.createElement("div")
let elSuggestedImg = document.createElement("img")
let elSuggestedImg2 = document.createElement("img")
let elSuggestedImg3 = document.createElement("img")




elSuggestedSpan.textContent = "Location"
elSuggestedTitle.textContent = "Suggested Location"
elSuggestedText.textContent = "Travel is my life. Since 1999, I’ve been traveling around the world nonstop. If you also love travel, you’re in the right place!"

elSuggestedCards.classList.add("Suggested__cards")
elSuggestedContent.classList.add("Suggested__content")
elSuggestedSpan.classList.add("Suggested__span")
elSuggestedTitle.classList.add("Suggested__title")
elSuggestedText.classList.add("Suggested__text")
elSuggestedContent2.classList.add("Suggested__content2")
elSuggestedContent3.classList.add("Suggested__content3")
elSuggestedVectors.classList.add("Suggested__imgvectors")
elSuggestedVectors2.classList.add("Suggested__imgvectors2")
elSuggestedImages.classList.add("Suggested__Images")
elSuggestedImg.classList.add("Suggested__img")
elSuggestedImg2.classList.add("Suggested__img2")
elSuggestedImg3.classList.add("Suggested__img3")


elSuggestedVectors.setAttribute("src", "./images/leftvector.png")
elSuggestedVectors.setAttribute("width", "50")
elSuggestedVectors.setAttribute("height", "50")

elSuggestedVectors2.setAttribute("src", "./images/rightvector.png")
elSuggestedVectors2.setAttribute("width", "50")
elSuggestedVectors2.setAttribute("height", "50")


elSuggestedImg.setAttribute("src", "./images/BaliHandara.png")
elSuggestedImg.setAttribute("width", "370")
elSuggestedImg.setAttribute("height", "500")

elSuggestedImg2.setAttribute("src", "./images/BuddhistShrine.png")
elSuggestedImg2.setAttribute("width", "370")
elSuggestedImg2.setAttribute("height", "500")

elSuggestedImg3.setAttribute("src", "./images/RealtoBridge.png")
elSuggestedImg3.setAttribute("width", "370")
elSuggestedImg3.setAttribute("height", "500")


elSuggestedTag.append(elSuggestedCards, elSuggestedContent,elSuggestedContent2, elSuggestedImages)

elSuggestedCards.append(elSuggestedContent, elSuggestedContent2)

elSuggestedContent.append(elSuggestedSpan, elSuggestedTitle, elSuggestedText)

elSuggestedContent2.append(elSuggestedText,elSuggestedContent3, elSuggestedVectors, elSuggestedVectors2)

elSuggestedContent3.append(elSuggestedVectors, elSuggestedVectors2)

elSuggestedImages.append(elSuggestedImg, elSuggestedImg2, elSuggestedImg3)




let elDiscoverTag = document.querySelector(".discover")


let elDiscoverCards = document.createElement("div")
let elDiscoverSpan = document.createElement("span")
let elDiscoverTitle = document.createElement("h1")
let elDiscoverText = document.createElement("p")
let elDiscoverBtn = document.createElement("button")


elDiscoverSpan.textContent = "Take a Tour"
elDiscoverTitle.textContent = "Discover Our Travel Guideline"
elDiscoverText.textContent = "For curious travelers who want to connect locally and go deeper into a place. Our Experiential Travel Guides highlight offbeat and local experiences that help you."

elDiscoverCards.classList.add("discover__cards")
elDiscoverSpan.classList.add("discover__span")
elDiscoverTitle.classList.add("discover__title")
elDiscoverText.classList.add("discover__text")
elDiscoverBtn.classList.add("discover__btn")

elDiscoverBtn.textContent = "Start Now"

elDiscoverTag.append(elDiscoverCards)
