console.log('test');
document.addEventListener("DOMContentLoaded", function () {
// When the page first loads, insert 100 h3 elements onto the page 
// The h3 elements should simply say Accusation 1, Accusation 2, Accusation 3, ... Accusation 100


//Arrays

//Friend Array
var friendarray = ["Key","John","Kaden","Caleb","Kev"];

//Location Array
var locationarray = ["Bham","Troy","Montgomery","Atmore","Illinois","Florida","Tenn","hwy 280","Missippi","Brundidge"];

//Weapon Array 
var weaponarray = ["Knife","Grenade","Pencil","Hammer","Fist","gun","Shotgun","Pistol","Rifle","Table","Knife2","Grenade2","Pencil2","Hammer2","Fist2","gun2","Shotgun2","Pistol2","Rifle2","Table2"]





var i;

for (i = 1; i < 101; i++) {

   
var button = document.createElement('button');
    var btnText = document.createTextNode('Accusations' + i );
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        alert('I accuse ' + [friendarray] + ', with the ' + [weaponarray] + ' in the ' + [locationarray]);
        
        

    
    })


}

})