var wordSetCities = "Kabul Tirana Algiers Luanda Yerevan Oranjestad Canberra Vienna Bridgetown Minsk Brussels Belmopan Hamilton Sarajevo Gaborone Brasilia Sofia Ottawa Praia Bangui Santiago Beijing Moroni Avarua Zagreb Havana Willemstad Nicosia Prague Kinshasa Copenhagen Roseau Dili Quito Cairo Malabo Asmara Tallinn Stanley Suva Helsinki Paris Cayenne Papeete Libreville Banjul Tbilisi Berlin Accra Gibraltar Athens Nuuk Hagatna Guatemala Conakry Bissau Georgetown Tegucigalpa HongKong Budapest Reykjavík Delhi Jakarta Tehran Baghdad Dublin Douglas Jerusalem Rome Kingston Tokyo Amman Astana Nairobi"
var wordSetNames = "Michael Christopher Jessica Matthew Ashley Jennifer Joshua Amanda Daniel David James Robert John Joseph Andrew Ryan Brandon Jason Justin Sarah William Jonathan Stephanie Brian Nicole Nicholas Anthony Heather Eric Elizabeth Adam Megan Melissa Kevin Steven Thomas Timothy Christina Kyle Rachel Laura Lauren Amber Brittany Danielle Richard Kimberly Jeffrey Amy Crystal Michelle Tiffany Jeremy Benjamin Mark Emily Aaron Charles Rebecca Jacob Stephen Patrick Sean Erin Zachary Jamie Kelly Samantha Nathan Sara Dustin Paul Angela Tyler Scott Katherine Andrea Gregory Erica Mary Travis Lisa Kenneth Bryan Lindsey Kristen Jose Alexander Jesse Katie Lindsay Shannon Vanessa Courtney Christine Alicia Cody Allison Bradley Samuel"
var wordSetObjects = "hotel poem advice death poet king writer volume cabinet media dirt client hair length surgery lady oven bread injury speaker police writing idea thing health cheek cousin power paper wife honey actor farmer youth virus bedroom drawing college chest ratio cell sister worker meat series exam pie climate recipe world"

var cities = wordSetCities.split(" ")
var names = wordSetNames.split(" ")
var objects = wordSetObjects.split(" ")

var categoriesEls = document.querySelectorAll(".category")

var categories = [cities, names, objects]

var catIndex = null

var chosenWord = null
var wordPosition = document.querySelector(".hiddenWord")
var inputBox = document.querySelector(".inputBox")
var iButton = document.querySelector(".inputButt")
var discList = document.querySelector(".discLett")
var rem = document.querySelector(".fail")
var attemps = 10

function wordSlice(word){
    slicedWord = []
    for(i = 0; i < word.length; i++){
        slicedWord[i] = word.slice(i , i +1)
    }
    console.log(slicedWord)
}

for(i = 0; i < categoriesEls.length; i++){
    categoriesEls[i].addEventListener("click", function(event){
        var chosenCategory = event.target.innerHTML
        switch (chosenCategory){
            case "Cities":
                catIndex = 0
                break;
            case "Names":
                catIndex = 1
                break;
            case "Things":
                catIndex = 2
                break;
            default: 
                catIndex = null
        }

        chosenCategory = categories[catIndex]
        var randomNum = Math.floor(Math.random() * chosenCategory.length)
        chosenWord = chosenCategory[randomNum]
        chosenWord = chosenWord.toLowerCase()

        var hiddenElements = document.querySelectorAll(".hid")
        
        for( i= 0; i < hiddenElements.length; i++){
            hiddenElements[i].classList.remove("hid")
        }

        for(i = 0; i < categoriesEls.length; i++){
            categoriesEls[i].classList.add("hid")
        }

        wordPosition.innerHTML = ""

        for(i = 0; i < chosenWord.length; i ++){
            wordPosition.innerHTML =  wordPosition.innerHTML + "_"
        }
        
        wordSlice(chosenWord)
        console.log(chosenWord, chosenWord.length)
        failCount = 0

    })
}

iButton.addEventListener("click", function(){
    console.log("test")
    letterCh =inputBox.value
    letterCh = letterCh.toLowerCase()
    for(i = 0; i < chosenWord.length; i++ ){
           if(letterCh === chosenWord[i]){
               var temp = wordPosition.innerHTML
               wordPosition.innerHTML = temp.substr(0, i) + letterCh + temp.substr(i+1, chosenWord.length-1)
           }   
    }
    if(slicedWord.indexOf(letterCh) < 0){
        discList.innerHTML = discList.innerHTML + letterCh
        failCount += 1
        rem.innerHTML = "Remaining attemps: " + (attemps - failCount)
    }

    if(failCount == attemps){
        alert("Oh no!")
        window.location.reload()
    }

    if(wordPosition.innerHTML === chosenWord){
        alert("The word was " + chosenWord + " \n You won!")
        window.location.reload()
    }
})




