
var shoppingCart = {
    book: 3,
    sunglass: 1,
    keyboard:1,
    mouse: 1,
    pen:25
}

// when you know the specific name, use dot notation to get the property value
var penCount = shoppingCart.pen;
//alternative system 
// when you know the specific name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];

var propertyName = 'pen';
var proti = shoppingCart[propertyName];
console.log(proti);

var properties = Object.keys(shoppingCart); // object all keys show
// console.log(properties);

var values = Object.values(shoppingCart); // object all values show
// console.log( values);


// set property values 
 shoppingCart.mouse = 15;
 console.log(shoppingCart);

 shoppingCart['mouse'] = 29;
 console.log(shoppingCart);

 shoppingCart[propertyName] = 89;
 console.log(shoppingCart);