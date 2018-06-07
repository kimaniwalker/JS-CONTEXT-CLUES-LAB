console.log('test');

document.addEventListener("DOMContentLoaded", function () {
// When the page first loads, insert 100 h3 elements onto the page 
// The h3 elements should simply say Accusation 1, Accusation 2, Accusation 3, ... Accusation 100
// Create h3 element
//Create Text Element
//Put text in h3
//Put text in body
    var h3 = document.createElement('h3');
        var h3Text = document.createTextNode("Accusation");
        h3.appendChild(h3Text);
        document.body.appendChild(h3);

        console.log(h3);

})