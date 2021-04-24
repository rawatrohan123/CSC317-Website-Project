/**************************************************************
* Class:  CSC-317
* Group:	  Response Code 200
* Project: Group Project
*
* File: product_page.js
*
* Description: This file is used for the individual product pages.
*
**************************************************************/


var product_page_key = getGameInfo();
var tag_map = games_info[`general`].tag_map;
var product_info = games_info[`${product_page_key}`];



/**
 * Loads stuff.
 */
function loadProductPageStuff() {
    //console.log(`product_page_key: ${product_page_key}`);

    //hide the modal window
    document.getElementById("#tag-window-outer").style.visibility = "hidden";

    //change the title of the page (tab title)
    changeContentByClass(`class_title_html_page`, `${product_info.title} - Acrux Games`);

    //add the title to the title fields
    changeContentByClass(`class_title`, product_info.title);

    //set the main game picture of the product page
    changeContentByClass(`class_game_image_main`, getGamePicPicture());

    //add price info to the page
    populatePrices();

    //populate the contents of the slidebar (horizontal scrollbar of vids and pics)
    populateSlideBar();

    //set the initial big window to first sliderbar element :^)
    document.getElementById(`#big_window`).innerHTML = product_info.elements[0].large;

    //add description, reviews, to the right of the page
    populateRightPanel();

    //add tags to the product
    addTags();
}


/**
 * Generate the product_page_key--the name of the HTML page.
 */
 function getGameInfo() {
    let url = window.location.href;

    let page_name = url.split("/");
    page_name = page_name[page_name.length-1].split(".")[0];

    return page_name;
}





/**
 * add description, reviews, to the right of the page
*/
function populateRightPanel() {

    //set reviews and numbers
    PopulateRightTable();
    
    //set game description
    changeContentByClass(`class_description`, product_info.description);

    

    
}




/**
 * Add a class to an element
*/
function addClass(element, class_str) {
    element.className += ` ${class_str}`;
}


/**
 * Add the price of the item. If the item is on sale, display the new price, percentage, 
 * along with the old price crossed off.
 * 
*/
function populatePrices() {
    //add original prices
    changeContentByClass(`class_price`, product_info.price);

    //if the product is on sale...
    if(product_info.on_sale) {
        //add the crossed off class to the original price, change the style of it
        addClass(document.getElementById(`#buy-price-orig`), `sale-price-cross`);

        //calculate the new price, stick this on the product
        let orig_price = parseFloat(product_info.price.substring(1));
        let new_price = (orig_price * product_info.sale_percentage).toFixed(2);

        //console.log(`price? ${orig_price} | sale %? ${product_info.sale_percentage}| new_price = ${new_price}`);
        
        //set the sale price
        document.getElementById(`#buy-price-sale`).innerText = `$${new_price}`;


        
        //====================
        //add the percentage off green box
        let sale_percentage = (`` + product_info.sale_percentage).substring(2);
        if(sale_percentage.length < 2) sale_percentage+= '0';

        let display_saletag = sale_percentage;
        
        
        //stick this in a sale span 
        let saletag =
        `<span class="sale" id="#sale-green-tag">${display_saletag}%</span>`;

      
        //add it to the page
        document.getElementById(`#sale-purchase`).innerHTML = 
        `${saletag}\n${document.getElementById(`#sale-purchase`).innerHTML}`;
        
        //====================
        //set another price to a stylized cross rule, add the sale price here too. 
        addClass(document.getElementById(`#price_title`), `sale-price-cross-title`);
        document.getElementById(`#title-price-container`).innerHTML +=
        `<span class = "ppage-content-left-purchase-alt sale-price-title" id="#price_title"> $${new_price} </span>`;
    }
    
}

/**
 * Add the reviews and numbers to the right panel.
 */
function PopulateRightTable() {
    //fetch the game info
    let data = games_info[`${product_page_key}`].table_values;
    let prefix = "class";
    let suffix_numbers = "numbers";

    let chosen_class; 
    let values;


    for(let i = 0; i < data.classes.length; ++i) {
        chosen_class = data.classes[i]; //this is an object inside product info for that game
        values = data.values[i]; //stuff like recent_reviews, et cetera

        for(let j = 0; j < values.length; ++j) {
            let cselect = `${prefix}_${chosen_class}`;
            if(j == 1) cselect +=`_${suffix_numbers}`;

            //read the value for that product info, stuff like Very Positive and (1,046)
            let text_content = values[j];

            let elist= document.getElementsByClassName(cselect);
            for(element of elist) element.innerHTML = text_content;           

            //console.log(`class: ${cselect} | inner contents: ${text_content}`);


            //debug_str += `${cselect} -- ${text_content}\n`;
        }
    }

    //alert(debug_str);

}

/**
 * Pass in the class name, sets elements with that classname's inner HTML to the content.
 * @param {*} classname 
 * @param {*} content 
 */
function changeContentByClass(classname, content) {
    let elist= document.getElementsByClassName(classname);
    
    for(element of elist) 
        element.innerHTML = content;  
}




/**
 * Pop up the modal window, WIP
*/
function plusSign() {

    console.log(
        `
        Should be showing
        opacity: ${document.getElementById("#tag-window-outer").style.opacity}
        visibility: ${document.getElementById("#tag-window-outer").style.visibility}
        `
        );
    
    displayByID("#tag-window-outer", true);

    //alert("Plus sign");

}

/**
 * Exit the modal window, WIP
*/
function exitDialogue() {
    console.log(
    `
    Should be hiding
    opacity: ${document.getElementById("#tag-window-outer").style.opacity}
    visibility: ${document.getElementById("#tag-window-outer").style.visibility}
    `
    );

    displayByID("#tag-window-outer", false);
}


/**
 * Set the opacity level (percent) of the element by ID
*/
function setOpacityStep(id, value) {
    document.getElementById(id).style.opacity = `${value}`;
    //console.log(`Opacity: ${document.getElementById(id).style.opacity}`);
}

/**
 * Open/turn on the modal window. 
 * id = id of the modal window
 * toggle_off_id = id of the thing to hide. In this case it is the price button b/c it overlayed the overlay.
*/
function turnOn(id, toggle_off_id) {
    document.getElementById(id).style.visibility = 'visible';
    
    //document.getElementById(id).style.opacity = `1`;
    for(let i = 0; i <= 1000; ++i) {
        //console.log(i/5);
        let step = (i/ (1000) ); //step setOpacityStep(id, 1)
        //window.setTimeout(function() {}, 500);
        window.setTimeout(function() {setOpacityStep(id, step)}, 1);
        
    }
    document.getElementById(toggle_off_id).style.visibility = 'hidden';
}

/**
 * Close/turn off the modal window. 
 * id = id of the modal window
 * toggle_off_id = id of the thing to hide. In this case it is the price button b/c it overlayed the overlay.
*/
function turnOff(id, toggle_on_id) {
    //have to force this to wait before setting it to visible. Otherwise async does it's thing and immediately hides the window.
    document.getElementById(toggle_on_id).style.visibility = 'visible';
    new Promise((resolve, reject) => {
        for(let i = 1000; i >= 0; --i) {
            
            let step = (i/ (1000) );
            //console.log(step);
            //window.setTimeout(function() {console.log('.')}, 500);
            window.setTimeout(function() {setOpacityStep(id, step)}, 1);
            
        }
        //resolve("Waited");
    })
    .then(() => {
        //hide the eleemnt
        document.getElementById(id).style.visibility = 'hidden';
        //document.getElementById(id).stylse.opacity = `0`;

        /*
        alert(
            `
            Should now be hidden
            opacity: ${document.getElementById("#tag-window-outer").style.opacity}
            visibility: ${document.getElementById("#tag-window-outer").style.visibility}
            `
            );
            */
    });
}

/**
 * Displays an element by ID
*/
function displayByID(id, visiblity_on) {
    if(visiblity_on) turnOn(id, '#sale-purchase');
    else turnOff(id, '#sale-purchase'); 
}



/**
 * Dynamically add tags to the page based on if they fit inside of #tags_id
 * without overflowing.
 */
function addTags() {
    let tags_str = "";

    let width_container = document.getElementById(`#tags_id`).offsetWidth;

    let tag_i = 0;
    let total_width = 0;

    //determine the size of the plus sign. Add this to the end of the tags.
    let plus_sign =  `<input type="button" class="expand-tags-button" value="+" onclick="plusSign();">`;

    document.getElementById(`#tags_id`).innerHTML = plus_sign;
    width_container -= document.getElementById(`#tags_id`).children[0].offsetWidth;
    document.getElementById(`#tags_id`).innerHTML = "";

    let continue_main = true; //toggles populating the main game page w/ tags

    document.getElementById(`#tag-window-inner`).innerHTML = '';
    document.getElementById(`#tag-numbers`).innerHTML = '';

    for(tag_package of product_info.tags) {
        //console.log(tag);

        let tag = tag_package[0];
        let tag_numbers = tag_package[1];

        console.log(tag);


        let tag_info = games_info[`general`][`tag_map`][`${tag}`];
        let url = tag_info.url;

        

        let html_tag;
        let html_tag_window = 
        `\n`+
        `<a href="${url}" >` +
        `<span class="product-tag tag-window-product-tag"> ${tag_info.value} </span>`+
        `</a>`
        ;

        let numbers_id = `"#${tag}_number"`;

        let button_id = `"#${tag}b"`;


        let html_tag_window_numbers = 
        `\n`+
        `<span class="product-tag-numbers tag-window-product-tag" id=${numbers_id}> ${tag_numbers} </span>`
        ;

       

        
        //we are still adding tags to the main product page.
        if(continue_main) {
            html_tag = 
            `\n`+
            `<a href="${url}" >` +
            `<span class="product-tag"> ${tag_info.value} </span>`+
            `</a>`
            ;

            //save previous HTML
            let prev_html = document.getElementById(`#tags_id`).innerHTML;

            //add the tag
            document.getElementById(`#tags_id`).innerHTML += html_tag;

            let new_e_width = document.getElementById(`#tags_id`).children[tag_i].offsetWidth;
            total_width += new_e_width;

            
            //if it's too big, then revert back to the prev HTML
            if(total_width > width_container) {
                document.getElementById(`#tags_id`).innerHTML = prev_html;
                continue_main = false;
            }
        }
        //otherwise just add it to the modal window
        //also adds it to the modal window if continue_main anyways.


        document.getElementById(`#tag-window-inner`).innerHTML += html_tag_window;

        //add the tag to the modal window
        document.getElementById(`#tag-numbers`).innerHTML += 
        `<div class="tag-window-tag-stats-outer">` +

        `<div align="left" style="width: 250px;">` +
        `${html_tag_window}` +
        `</div>` +

        `<div align="right" style="width: 131px; padding-top: 10px;">` +
        `${html_tag_window_numbers}` +
        `</div>` +


        `<div align="right" style="padding-top: 3px; width: 299.183px;">` +
        `<input type="submit" class="add-tag-button" value="TAG GAME" id=${button_id} onclick="addTagClick(event);">`+
        `</div>` +

       

        `</div>`
        ;
        //<input type="submit" class="add-to-cart-button" style="position: relative;" value="ADD TO CART">
        


        //console.log(`width_container: ${width_container} | tag_i: ${tag_i} | new_e_width: ${new_e_width} | total_width: ${total_width}`);
        tag_i++;

       // console.log(html_tag);
        
    }

    //add the plus sign
    document.getElementById(`#tags_id`).innerHTML += plus_sign;
    console.log(tags_str);
    //document.getElementById(`#tags_id`).innerHTML = tags_str;
    
}

/**
 * Update the number associated with the tag -- number of times this game was tagged
 * Used in the modal window
*/
function updateTagNumber(numbers_id, new_value) {
    document.getElementById(numbers_id).innerHTML = `${new_value}`;
}

/**
 * Find the tag associated with the number, decrease the number in the "database," update this number in the DB
*/
function findUpdateTagNumber(base_id, numbers_id, value) {

    for(let i = 0; i < product_info.tags.length; ++i) {
        if(product_info.tags[i][0] === base_id) {
            //alert(`found tag #${numbers_id}`);
            product_info.tags[i][1] += value;

            updateTagNumber(`#${numbers_id}`, product_info.tags[i][1]);
            break;
        }
    }

}

/**
 * Increase or decrease the number of times this game has been tagged with a specific tag
 * associated with the game
*/
function addTagClick(event) {
    let button_id = event.target.id;
    let base_id = (event.target.id).substring(1, event.target.id.length-1); //# removed
    let numbers_id = `${base_id}_number`;

    let tag_increase = true;

    //if the user tags the game, increase the number. Swap the button.
    if(document.getElementById(button_id).value === "TAG GAME") {
        document.getElementById(button_id).value = "REMOVE TAG";
    } else {
        //decrease the number. Swap the button.
        tag_increase = false;
        document.getElementById(button_id).value = "TAG GAME";
    }

    let change_by_value = (tag_increase)? 1: -1;
 
    
//299.183
    



    findUpdateTagNumber(base_id, numbers_id, change_by_value);

    

    
}

/**
 * fetches the main game image and returns this as an img element
*/
function getGamePicPicture() {
    let image_path = `${images_small_path}/${product_page_key}/main.jpg`;
    return `<img src="${image_path}" width="392"/>`;
}


/**
 * Returns the URL of the picture.
 */
function getPicURL(i) {
    return `${images_small_path}/${product_page_key}/p${i}.jpg`;
}

/**
 * Generates videos in games_info
 */
function slidebarProgGenerateVideos() {
    let urls = games_info[`${product_page_key}`].video_urls;
    let start_vids = 0;
    let end_vids = urls.length;
    let vid_index = 0;
    
    for(let i = start_vids; i < end_vids; ++i) {
        games_info[`${product_page_key}`].elements.push(
            {
                small: createSwitchableElement(IEDimensionTypes.PRODUCTP_SMALL, IEType.IMAGE, getPicURL(i)),
                large: createSwitchableElement(IEDimensionTypes.PRODUCTP_BIG, IEType.VIDEO, urls[vid_index++])
            }
        );
    }
}

/**
 * Generates pictures in games_info
*/
function slidebarProgGenerateImages() {
    let start_images = games_info[`${product_page_key}`].video_urls.length;
    let end_images = games_info[`${product_page_key}`].end_images;

    for(let i = start_images; i <= end_images; ++i) {
        games_info[`${product_page_key}`].elements.push(
            {
                small: createSwitchableElement(IEDimensionTypes.PRODUCTP_SMALL, IEType.IMAGE, getPicURL(i)),
                large: createSwitchableElement(IEDimensionTypes.PRODUCTP_BIG, IEType.IMAGE, getPicURL(i))
            }
        );
    }
}


/**
 * Changes the big window.
 */
function slidebarChangeWindow(i) {
    let new_element = games_info[`${product_page_key}`].elements[i].large;
    changeElement(new_element, "#big_window");
}




/**
 * Populates the slidebar.
 */
function populateSlideBar() {
    //populate info in game_info
    slidebarProgGenerateVideos();
    slidebarProgGenerateImages();

    let container_contents = "";
    let element = "";
    let inner_element = "";

    let num_elements = games_info[`${product_page_key}`].elements.length;
    //console.log(`num elements: ${num_elements}`);

    //generate and attach slidebar elements.
    for(let i = 0; i < num_elements; ++i) {
        inner_element = games_info[`${product_page_key}`].elements[i].small;
        element =
        `<div class="" onclick="slidebarChangeWindow(${i})">` +
        `${inner_element}` +
        `</div>`;

        container_contents += element;
    }

    //add to the container
    document.getElementById("#slidebar-container").innerHTML = container_contents;
}




/**
 * Removes all child elements of element with id target_id
 */
function removeAllChildElements(target_id) {
    document.getElementById(target_id).textContent = "";
}

/**
 * Changes element with id target_id's child element to element
 */
function changeElement(element, target_id) {
    removeAllChildElements(target_id);

    document.getElementById(target_id).innerHTML = element;
}

/**
 * Creates a switchable element. Used in the slidebar to change the big window's contents.
 */
function createSwitchableElement(iedimension, ietype, path) {
    let width = 0, height = 0;
    let element = "";
    
    //determine the dimensions of the interactive element and set width and height
    switch(iedimension) {
        case IEDimensionTypes.PRODUCTP_BIG:
            width = IEDimensions.productp_big.width;
            height = IEDimensions.productp_big.height;
            break;
        case IEDimensionTypes.PRODUCTP_SMALL:
            width = IEDimensions.productp_small.width;
            height = IEDimensions.productp_small.height;
            break;
        case IEDimensionTypes.PRODUCTP_GAME:
            width = IEDimensions.productp_game.width;
            height = IEDimensions.productp_game.height;
            break;
        default:
    }

    //determine which element to produce and create it
    switch(ietype) {
        case IEType.IMAGE:
            element =
            `<img src="${path}" height="${height}" width="${width}"/>`;
            break;
        case IEType.VIDEO:
            element =
            ` <iframe width="${width}" height="${height}" src="${path}" 
            frameborder="0" iv_load_policy="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>`;

            break;
        default:
    }

    //console.log(`element: ${element}`);

    return element;
}










//DiRTRally2p0








/**
 * Test function.
 */
function testClick() {
    alert("Click event occurred.");
}
