/**************************************************************
* Class:  CSC-317
* Group:	  Response Code 200
* Project: Group Project
*
* File: cart.js
*
* Description: This file is used for the shopping cart.
* it doesn't end there -- it provides cookie functionality and 
* functions to handle cookies.
*
**************************************************************/

//the cookie which counts the number of items in the cart.
var num_products_cart_key = "num_products_cart";


/**
 * Used in testing. Code is commented out.
 */
function showCookie() {
    ///alert( `Current cookie: ${document.cookie}` );
    //expCookieDays(undefined);
}

/**
 * Function is from w3schools. 
 * https://www.w3schools.com/js/js_cookies.asp
*/
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

/**
 * adds or updates a cookie
 * **/
function addCookie(name, value, expiration_day) {
    document.cookie = `${name}=${value}; expires=${expiration_day}; path=/;`;
}


/**
 * returns a date which has been increased by days (param) number of days.
 * 
 * **/
function expirationDate(days=1) {
    let date = new Date();
    date.setUTCDate(date.getUTCDate() + days);
    return date;
}

/**
 * Erase a cookie by setting it stale and setting it empty. 
*/
function eraseCookie(name, value) {
    document.cookie =  `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT"; path=/;`;
}

/**
 * Used in testing. Source: https://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript
 * 
*/
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}


/**
 * Adds a product to the cart.
 * 
*/
function addToCart() {
    
    //initialize cart if not initialized
    if(getCookie(num_products_cart_key).length == 0) addCookie(num_products_cart_key,0, expirationDate(1).toUTCString());

    let num_items_in_cart = parseInt(getCookie(num_products_cart_key));
    
    //determine whether to add the item to the cart.
    //if it's in the cart, then don't add it again.
    let add_to_cart = true;
    for(let i = 0; i < num_items_in_cart; ++i) {
        let cookie_key = `Item${i}`;
        console.log(`cookie_key: ${cookie_key}\ncookie: ${getCookie(cookie_key)}\n=== ${product_page_key}? ${getCookie(cookie_key) === product_page_key}`);
        //if this item is already in the cart
        if(getCookie(cookie_key) === product_page_key) {
            add_to_cart = false;
            break;
        }
    }

    //console.log(expirationDate(0).toUTCString());
    //console.log(expirationDate(1).toUTCString());

    if(add_to_cart) {
        num_items_in_cart++;
        //update cart count
        //console.log(expirationDate(1).toUTCString());
        addCookie(num_products_cart_key, num_items_in_cart, expirationDate(1).toUTCString());

        //add this game to the cart
        addCookie(`Item${num_items_in_cart-1}`, product_page_key, expirationDate(1).toUTCString());

    }

    //showCookie();
}


/**
 * Used to add the product to the cart in the homepage. Similar to the above function.
 * 
*/
function addToCartHomepage(element) {

    let item_token = element.id.substring("#purchase_".length);
    
    
    //initialize cart if not initialized
    if(getCookie(num_products_cart_key).length == 0) addCookie(num_products_cart_key,0, expirationDate(1).toUTCString());

    let num_items_in_cart = parseInt(getCookie(num_products_cart_key));
    
    //determine whether to add the item to the cart.
    //if it's in the cart, then don't add it again.
    let add_to_cart = true;
    for(let i = 0; i < num_items_in_cart; ++i) {
        let cookie_key = `Item${i}`;
        console.log(`cookie_key: ${cookie_key}\ncookie: ${getCookie(cookie_key)}\n=== ${item_token}? ${getCookie(cookie_key) === item_token}`);
        //if this item is already in the cart
        if(getCookie(cookie_key) === item_token) {
            add_to_cart = false;
            break;
        }
    }

    //console.log(expirationDate(0).toUTCString());
    //console.log(expirationDate(1).toUTCString());

    if(add_to_cart) {
        num_items_in_cart++;
        //update cart count
        addCookie(num_products_cart_key, num_items_in_cart, expirationDate(1).toUTCString());

        //add this game to the cart
        addCookie(`Item${num_items_in_cart-1}`, item_token, expirationDate(1).toUTCString());
    }

    //showCookie();

}