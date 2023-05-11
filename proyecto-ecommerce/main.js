import loader from "./loader.js";
import showMenu from "./showMenu.js";
import showCart from "./showCart.js";
import products from "./products.js";
import getProducts from "./getProducts.js";
import cart from "./cart.js";
import theme from "./darkMode.js";

    // ui Elements
// ocultar louder
loader()

// mostrar menu
showMenu()

// mostrar carrito
showCart()


// end ui Elements

// productos

const { db, printProducts } = products( await getProducts())  


//    carrito
cart(db, printProducts)
 
     //dark mode
theme()     