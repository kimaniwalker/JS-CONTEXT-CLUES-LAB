console.log('test');
document.addEventListener("DOMContentLoaded", function () {
    
    //Arrays

    //Friend Array
    var friendarray = ["Key", "John", "Kaden", "Caleb", "Kev"];

    //Location Array
    var locationarray = ["Bham", "Troy", "Montgomery", "Atmore", "Illinois", "Florida", "Tenn", "hwy 280", "Missippi", "Brundidge"];

    //Weapon Array 
    var weaponarray = ["Knife", "Grenade", "Pencil", "Hammer", "Fist", "gun", "Shotgun", "Pistol", "Rifle", "Table", "Knife2", "Grenade2", "Pencil2", "Hammer2", "Fist2", "gun2", "Shotgun2", "Pistol2", "Rifle2", "Table2"]

    accusationlist();
    function accusationlist() {
        var i;

        for (i = 1; i < 101; i++) {


            var h3 = document.createElement('h3');
            var h3Text = document.createTextNode('Accusations' + i);
            h3.appendChild(h3Text);
            document.body.appendChild(h3);

            h3.addEventListener("click", function () {
                alert('I accuse ' + [friendarray] + ', with the ' + [weaponarray] + ' in the ' + [locationarray]);
            console.log(i);
            })
           
        }
        
        
    }

})