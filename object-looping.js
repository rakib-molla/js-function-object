

var shoppingCart = {
    book: 3,
    sunglass: 1,
    keyboard:1,
    mouse: 1,
    pen:25,
    shoes: 2
}

var keys = Object.keys(shoppingCart);
console.log(keys);
var values = Object.values(shoppingCart);
console.log(values);

for( var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// for in loop 
for( var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName , value);
}