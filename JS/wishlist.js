/**************************************************************
* Class:  CSC-317
* Group:	  Response Code 200
* Project: Group Project
*
* File: wishlist.js
*
* Description: used in the Wishlist (WIP) and the shopping cart.
*
**************************************************************/

//WIP
//When you pick up an object that is draggable, dragStart() will store the data stored in that into "Item"
function dragStart(event) {
    event.dataTransfer.setData("Item", event.target.id);
}

//WIP
//allowDrop() will allow certain draggable items to be dropped into div boxes.
function allowDrop(event) {
    event.preventDefault();
}

//WIP
//drop() will add the data from the draggable object into the current div box which is selected.
function drop(event) {
    event.preventDefault();
    var gridData = document.getElementById(event.dataTransfer.getData("Item"));
    var gridParentNode = gridData.parentNode;
    var newTarget = event.currentTarget.firstElementChild;

    //Swapping the two grids
    event.currentTarget.replaceChild(gridData,newTarget);
    gridParentNode.appendChild(newTarget);
    event.target.appendChild(document.getElementById(gridData));
}

/**
 * Used in the WL. CUrrently hard coded.
 * 
*/
function loadStuff() {
    document.getElementById("#outer-WL").innerHTML=generateGameTile(0, "TIS100");
    document.getElementById("#outer-WL").innerHTML+=generateGameTile(1, "DiRTRally2p0");
}

/**
 * Loads the products in the cart page. 
 *
*/
function loadCart() {
    //fetch number of items to add to the cart
    let num_items = parseInt(getCookie("num_products_cart"));

    //empty the cart
    document.getElementById("#outer-Cart").innerHTML = "";

    //because items can be deleted and will not be in Item0, Item1 ... ItemN order, used a while loop
    //to get the num_items items and add them to the cart.
    let items_parsed = 0;
    let i = 0;
    while(items_parsed < num_items) {
        let cookie_info = getCookie(`Item${i}`);
        //console.log(`38: ${cookie_info}`);

        //cookies seem to be empty if they do not exist, but just in case, check to see if it's undefined
        if(cookie_info == undefined || cookie_info.length ==0) {
            i++;
            continue;
        }

        //add the item to the cart
        document.getElementById("#outer-Cart").innerHTML+=generateGameTileCart(i, cookie_info);
        //console.log(cookie_info);
        
        items_parsed++;
        i++;
    }

   

}




/**
 * Grab the index of the element from the remove item
 * 
*/
function deleteItem(element) {
    //get the index of the item by stripping the ID of the remove button
    let index = parseInt(element.id.substring("RemoveItem".length));

    //fetch the name of the game
    let cookie_content = getCookie(`Item${index}`);

    //used for setting the number of items in the cart
    let num_items = `${parseInt(getCookie("num_products_cart")) - 1}`;

    //update the numbers of items in the cart
    addCookie("num_products_cart", num_items, expirationDate(1));

     //remove the cookie.
    eraseCookie(`Item${index}`, cookie_content);

    //reload the cart with the current cart contents (minus this item)
    loadCart();
}


//not used
function markForDelete(index) {
    addCookie(`Item${index}`, undefined, expirationDate(0));
}


//not used
function findItem(key) {
    let num_items = parseInt(getCookie("num_products_cart"));
    console.log(60);
    for(let i = 0; i < num_items; ++i) {
        console.log(`Item${i}`);
        console.log(getCookie(`Item${i}`));
        if(getCookie(`Item${i}`) === undefined) continue;
        else if(getCookie(`Item${i}` == key)) {
            return i;
        }
    }
    console.log(68);
    return -1;
}
 


const image_path = "./images/product/product_pages/";





//used in the WL, WIP. Generates an HTML element.
function generateGameTile(i, product_element) {
    let product_info = games_info[`${product_element}`];

    return(
    `<div style="width:800px; margin:0 auto;" class="droparea" ondrop="drop(event)" ondragover="allowDrop(event)">`
    +   `<div id="dragtarget${i}" style="border: 10px; margin:0 auto;" class="grid-container " ondragstart="dragStart(event)"`
            +`ondrag="dragging(event)" draggable="true">`
            +`<div class="grid-tile">`

            +`<div class="grid-pic">`
                    +`<img class="flex" src="${image_path}${product_element}/main.jpg">`
                    +`</div>`

                    +`<div class="grid-text game-details links_no_underline">`
                    +`<a href="" class="game-title-wlcart ">`
                    +` <h1>${product_info.title}</h1>`
                    +`</a>`
                    +`<img src="images/wishlist/windows_platform.png">`
                    +`<br>`

                    +`ALL REVIEWS: ${product_info.table_values.values[1][0]}`
                    +` <br>`
                    +` RELEASED: ${product_info.table_values.values[2]}`
                    +` <br>`
                    +` PRICE: ${product_info.price}`
                    +` <br>`
                    +` DATE ADDED: 4/11/2021`
                    +` </div>`
                    +` <div class="grid-buttons">`
                    +`     <div align="left">`
                    +`        <input type="submit" class="class_button" value="ADD TO CART">`
                    +`    </div>`

                    +`    <div align="left">`
                    +`        <input type="submit" class="class_button" value="VIEW ITEM">`
                    +`   </div>`

                    +`  <div align="left">`
                    +`      <input type="submit" class="class_button" value="REMOVE ITEM" id="#remove_product_${product_element}" onclick="deleteItem(this)">`
                    +`  </div>`
                    
                    +`   </div>`
            

            +`</div">`
            
    +   `</div>`
    +`</div>`
    );
}

/**
 * Used in the Cart. Generates an HTML element.
*/
function generateGameTileCart(i, product_element) {
    let product_info = games_info[`${product_element}`];

    return(
        `<div style="width:800px; margin:0 auto;" class="droparea">`
        +   `<div id="CartItem${i}" style="border: 10px; " class="grid-container ">`
                
                +`<div class="grid-tile" style="box-shadow: 0 0 5px 5px cyan;">`
    
                +`<div class="grid-pic">`
                        +`<img class="flex" src="${image_path}${product_element}/main.jpg">`
                        +`</div>`
    
                        +`<div class="grid-text game-details links_no_underline">`
                        +`<a href="" class="game-title-wlcart ">`
                        +` <h1>${product_info.title}</h1>`
                        +`</a>`
                        +`<img src="images/wishlist/windows_platform.png">`
                        +`<br>`
    
                        +`ALL REVIEWS: ${product_info.table_values.values[1][0]}`
                        +` <br>`
                        +` RELEASED: ${product_info.table_values.values[2]}`
                        +` <br>`
                        +` PRICE: ${product_info.price}`
                        +` <br>`
                        +` DATE ADDED: 4/11/2021`
                        +` </div>`
                        +` <div class="grid-buttons">`
    
    
                        +`    <div align="left">`
    
                        +`<form action="/GroupAssignment/GroupProject/product_pages/games/${product_element}.html" method="POST">`
                        +`        <input type="submit" class="class_button" value="VIEW ITEM">`
                        +`</form>`
    
                        +`   </div>`
    
                        +`  <div align="left">`
    
                        +`<form action="./ShoppingCart.html" method="POST">`
                        +`      <input type="submit" class="class_button" value="REMOVE ITEM" id="RemoveItem${i}" onclick="deleteItem(this)">`
                        +`</form>`
                        +`  </div>`
                        
                        
                        +`   </div>`
                
    
                +`</div">`
                
        +   `</div>`
        +`</div>`
        );
}

/*
<div style="width:800px; margin:0 auto;" class="droparea" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div id="dragtarget" style="width:800px; margin:0 auto;" class="grid-container " ondragstart="dragStart(event)"
             ondrag="dragging(event)" draggable="true">

             <div class="grid-tile">

                <div class="grid-pic">
                    <img class="flex" src="images/product/Descent.jpg">
                </div>
                <div class="grid-text game-details links_no_underline">
                    <a href="" class="game-title-wlcart ">
                        <h1>Descent 3</h1>
                    </a>
                    <img src="images/wishlist/windows_platform.png">
                    <br>
                    Review: 5 stars
                    <br>
                    Release Date: March 5, 2011
                    <br>
                    Price: $5.00
                    <br>
                    Date added: 4/11/2021
                </div>
                <div class="grid-buttons">
                    <div align="left">
                        <input type="submit" class="class_button" value="ADD TO CART">
                    </div>

                    <div align="left">
                        <input type="submit" class="class_button" value="VIEW ITEM">
                    </div>

                    <div align="left">
                        <input type="submit" class="class_button" value="REMOVE ITEM">
                    </div>
                    
                </div>

             </div>
            
        </div>
    </div>
*/