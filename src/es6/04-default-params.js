
//Anteriormente
function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 31;
    var country = country || 'CO';
    console.log(name, age, country);

}

newUser();
newUser('Alejandro', 19, 'MX');

//Despues de ES6

function newAdmin(name = 'Alejandro', age = 31, country = 'CO') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Oscar', 19, 'MX')
