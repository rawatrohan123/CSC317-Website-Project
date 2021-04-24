/**************************************************************
* Class:  CSC-317
* Group:	  Response Code 200
* Project: Group Project
*
* File: products_page.js
*
* Description: This file is used for the pages showing multiple games, 
* like the homepage--productspage.
*
**************************************************************/

const image_path = "./images/product/product_pages/"
const image_main = "main.jpg"

const product_path = `./product_pages/games/`;
const id_homepage_container = "#homepage_container";

let on_hover = false;

function returnProductKey(id) {
    return id.substring(9);
}

/**
 * Replaces the video element with an image.
*/
function replaceWithImage(element) {
//console.log(`on_hover: ${on_hover}`);
    on_hover =false;
    let product_key = returnProductKey(element.id);
    let game_image_path = `${image_path}/${product_key}/${image_main}`;

    let image_element =
    `<img src="${game_image_path}" alt="${product_key}"`+
    `align="right" width="300px"></img>`;

   
    element.innerHTML = image_element;
}




/**
 * Replaces the image element/empty with a video.
*/
function replaceWithVideo(element) {
   // console.log(`39 on_hover: ${on_hover}`);
    if(!on_hover) {
        let product_key = returnProductKey(element.id);

        console.log(product_key);

        let video_element =
        `<iframe src="${games_info[`${product_key}`].video_urls[0]}?autoplay=1&controls=0&mute=1" alt="Image Description"  `+
        `width="300px" align="right" height="140px"  `+
        ` frameborder="0" iv_load_policy="3" allow="accelerometer; `+
        ` autoplay=1; clipboard-write; encrypted-media; gyroscope; `+
        ` picture-in-picture"  scrolling="no"></iframe>`;
        

        element.innerHTML = video_element;
        on_hover = true;
        console.log(`on_hover: ${on_hover}`);
    }
    
}

/**
 * Sets the shown games as true with games from our product_page_info "DB"
*/
function populateHomePage() {
   // let homepage_container = document.getElementById(id_homepage_container);
    for(product_info of games_info.current_games) {
        //console.log(product_info);

        products_page[`${product_info}`] = true;
        
        //let out_div = createGameTile(product_info);
        //console.log(out_div);
        //homepage_container.innerHTML += out_div;

        
    }
    updateHomePage();
    generateNavbarCheckboxes();
}

var products_page = {};

/**
 * Displays games if they are set to true (visible) in products_page
*/
function updateHomePage() {
    let homepage_container = document.getElementById(id_homepage_container);
    homepage_container.innerHTML = "";
    
    for(product in products_page) {
        if(products_page[product]){
            homepage_container.innerHTML += createGameTile(product);
        }
    }
}




/**
 * Used to create a game tile on the homepage
*/
function createGameTile(product_key) {
    let product_info = games_info[`${product_key}`];

    let product_link = `${product_path}${product_key}.html`;

    let game_tags= ``;

    for(let i = 0; i < 6; ++i) {
        //let tag_s = tag_info[0].substring(4);

        let tag_info = product_info.tags[i];
        if(tag_info === undefined) break;
        
        let tag = games_info.general.tag_map[`${tag_info[0]}`];
        
       // let tag = 
       // ``;
       // console.log(tag_s);
       let html_tag = (`<a href="${tag.url}" >`
       + `   <span class="product-tag"> ${tag.value} </span>`
       +` </a>`);

       game_tags += html_tag;
    }

    game_tags += "...";

    let overflow = (product_info.title.length > 16);

    let title_style = 
    (!overflow)? 
    "display:inline-block; width: 65%;":
    "display:inline-block; width: 65%; font-size:20px; padding-top:10px; padding-bottom:10px; position:relative; top:-3px;";


  
    
    
    return (`<div class="homepage-flexbox links_no_underline">`

    +`<div style="background-image: url(${image_path.substring(2)}${product_key}/main.jpg); width: 300px; height: 140px; background-size: cover;">`
    +    `<a href="${product_link}" id="#product_${product_key}" onmouseover="replaceWithVideo(this);" onmouseout="replaceWithImage(this);">`
    +       ` <img src="${image_path}${product_key}/main.jpg" alt="Image Description" align="right" width="300px">`
    +   ` </a>` 
    +`</div>`

        +`<a href="${product_link}" >`
            +`<div>`
                +`<span class="product-tile-title" style="${title_style}"> ${product_info.title}</span>`

                 +`<span class="product-tile-contents product-tile-price" style=" display:inline-block; width: 20%;"> ${product_info.price}</span>`
            +` </div>`
        +`</a>`

        
        +`<div  align="left">`
        +`<input type="submit" id="#purchase_${product_key}" class="add-to-cart-button" value="ADD TO CART" onclick="addToCartHomepage(this)">`
        +` </div>`

        +`<div class= "product-tile-contents" style="padding: 0 10px 10px 10px;  display:flex; flex-wrap: wrap; ">`
        + `${game_tags}`
        +`</div>`
   
    +`</div>`

    );

}



/**
 * The checkboxes in the navbar (to the Specials category). WIP because they do not filter anything yet.
*/
let navbar_checkboxes = [
    "#tag_Action",
    "#tag_Adventure",
    "#tag_Casual",
    "#tag_Massively_Multiplayer",
    "#tag_Racing",
    "#tag_RPG",
    "#tag_Simulation",
    "#tag_Sports",
    "#tag_Strategy"
];

const checkbox_id = "#filter_checkboxes";


/**
 * Generates checkboxes to stick in the navbar from navbar_checkboxes
*/
function generateNavCheckbox(id) {
    console.log(`158: ${id}`);
    return (
    `<div class="navbar-content-padding" 
    onclick="filterGamesHomepage(this)" id="${id}"> 
    <input type="checkbox">
    <span onclick="selectDeselectCheckbox(this)" id="${id}_checkbox"> ${games_info.general.tag_map[`${id.substring(1)}`].value} </span>
    </div>`
    );
}

/**
 * Will toggle on/off the checkbox associated with the text if clicked
*/
function selectDeselectCheckbox(element){
    let new_val = element.parentNode.children[0].checked;
    element.parentNode.children[0].checked = !new_val;
}

/**
 * Generates checkboxes to stick in the navbar from navbar_checkboxes, adds these to the navbar.
*/
function generateNavbarCheckboxes() {
    let checkboxes_html = "";
    for(id of navbar_checkboxes) {
        checkboxes_html += `${generateNavCheckbox(id)}\n`;
        console.log(id);
    }

    document.getElementById(checkbox_id).innerHTML = checkboxes_html;
}

/**
 * Sets all of the games to invisible
*/
function setAllInvisible() {
    for(product_info of games_info.current_games) {
        //console.log(product_info);

        products_page[`${product_info}`] = false;
        
        //let out_div = createGameTile(product_info);
        //console.log(out_div);
        //homepage_container.innerHTML += out_div;

        
    }
}


/**
 * WIP. Does nothing.
*/
function filterGamesHomepage(element) {
   // let tag_id = element.id.substring(1);
    //setAllInvisible();

    //console.log(`209: ${tag_id}`);

    /*
    for(id of navbar_checkboxes) {
        if(!document.getElementById(`${id}_checkbox`)) {
            continue;
        }

        let tag_id  = id.substring(1);
        for(product in products_page) {
            for(tag_pair of games_info[`${product}`].tags) {    
                if(tag_id != tag_pair[0]) continue;
                console.log(`217: ${tag_pair[0]}`);
                
                products_page[product] = true;
            }
        }
    }
    */

    


    

    //updateHomePage();

    

    
    //homepage_container.innerHTML = "";

}










//onmouseover="this.src='https://www.youtube.com/embed/RQ7JvIncd4Y?autoplay=1&rel=0&mute=1&controls=0'" 
//onmouseout="this.src='images/product/DirtRally.jpg';" frameborder="0" iv_load_policy="3"


/*






<!--Game title and price, links to the product page-->


        <!--Add to cart convenience button-->
        <div  align="left">
            <input type="submit" class="add-to-cart-button" value="ADD TO CART">
        </div>
        
        <!--Game tags wrapped in links-->
        <div class= "product-tile-contents" style="padding: 0 10px 10px 10px;  display:flex; flex-wrap: wrap; ">
            
        </div>
*/