
// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = 'left'

let dogImages = document.querySelectorAll('.dog-image')
for ( let i=0; i<dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px'
}

let dogNames = document.querySelectorAll('.dog-name')
for ( let i=0; i<dogNames.length; i++) {
    dogNames[i].style.textAlign = 'left'
}

let footText = document.querySelectorAll('.dog-description')
for ( let i=0; i<footText.length; i++) {
    footText[i].style.color = 'blue'
}

for ( let i=0; i<dogImages.length; i++) {
    dogImages[i].style.transform = 'rotate(180deg)'
}