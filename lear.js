//  1-3 no class's learn : 
 
document.getElementsByTagName('h1')
HTMLCollection(4) [h1, h1, h1#fruits-title, h1#places-title, fruits-title: h1#fruits-title, places-title: h1#places-title]

document.getElementById('fruits-title')
<h1 id=​"fruits-title">​Fruits changed by Js​</h1>​

document.getElementsByClassName('important-places')
HTMLCollection(3) [li.important-places, li.important-places, li.important-places]

document.querySelectorAll('#fruits-title')
document.querySelector('.fruits-container li')

 document.querySelectorAll('.fruits-container li')
 document.getElementById('fruits-title').style.color = 'black'


 // *********** Class - 5 **********************//

const title = document.getElementById('fruits-title')
undefined

title.getAttribute('class')
'some-class random-class blue-bg'

title.classList
DOMTokenList(3) ['some-class', 'random-class', 'blue-bg', value: 'some-class random-class blue-bg']

title.classList.remove('blue-bg')
undefined

title.classList
DOMTokenList(2) ['some-class', 'random-class', value: 'some-class random-class']

title.classList.add('purple-bg')
undefined

title.classList
DOMTokenList(3) ['some-class', 'random-class', 'purple-bg', value: 'some-class random-class purple-bg']

// ---------------------------------------------------------------
const title = document.getElementById('fruits-title')
    
undefined
title.setAttribute('title', 'tooltip set by JavaScript')
undefined

// -------------------------------------------------------------------

document.getElementsByClassName('fruits-container')

document.getElementsByiClassName('fruits-container')[0]

document.getElementsByClassName('fruits-container')[0].innerHTML

document.getElementsByClassName('fruits-container')[0].innerText

document.getElementsByClassName('fruits-container')[0].innerHTML = '<h2>ABC wow DOM is changing </h2>'

//*********************Class:07 *******************//
const placesContiner = document.getElementById('places-container')
undefined

placesContainer

placesContainer.childNodes
NodeList(5) [text, h1#places-title, text, ul, text]\

placesContainer.childNodes[1]
<h1 id=​"places-title">​Places I like to visit​</h1>​

placesContainer.childNodes[3].childNodes
NodeList(9) [text, li.important-places, text, li.important-places, text, li.important-places, text, li, text]
//---------------------------------------------------------
document.createElement('p')
<p>​</p>​
document.createElement('span')
<span>​</span>​
document.createElement('div')
<div>​</div>​
document.createElement('li')
<li>​</li>​
document.createElement('section')
<section>​</section>​
//-------------------------------------------------------
const li = document.createElement('li')
undefined
li.innerText = 'Brand New place go to'
'Brand New place go to'
li
<li>​Brand New place go to​</li>​
//---------------------------------------------------------
const li2 = document.createElement('li')
undefined

li2.innerText = 'another dynamic li'
'another dynamic li'

placesUL.appendChild(li2)
<li> </li>

placesUL.parentNode

placesUL.parentNode.parentNode
//--------------------------------------------------------------

