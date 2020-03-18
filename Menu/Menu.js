/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const createMenu = (item) => {
  const menuSection = document.createElement('div')
  const openList = document.createElement('ul')
  const itemOne = document.createElement('li')
  const itemTwo = document.createElement('li')
  const itemThree = document.createElement('li')
  const itemFour = document.createElement('li')
  const itemFive = document.createElement('li')
  const itemSix = document.createElement('li')
  const menuButton = document.querySelector('.menu-button')

  menuSection.classList.add('menu')

  menuButton.appendChild(menuSection)
  menuSection.appendChild(openList)
  openList.appendChild(itemOne)
  openList.appendChild(itemTwo)
  openList.appendChild(itemThree)
  openList.appendChild(itemFour)
  openList.appendChild(itemFive)
  openList.appendChild(itemSix)

  itemOne.textContent = menuItems[0]
  itemTwo.textContent = menuItems[1]
  itemThree.textContent = menuItems[2]
  itemFour.textContent = menuItems[3]
  itemFive.textContent = menuItems[4]
  itemSix.textContent = menuItems [5]

  
  menuButton.addEventListener('click', (event) => {
    menuSection.classList.toggle('menu--open')
  })

  return menuSection
}
const header = document.querySelector('.header')
const menuButton = document.querySelector('.menu-button')
header.appendChild(createMenu(menuItems))
