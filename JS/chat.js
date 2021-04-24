/**************************************************************
* Class:  CSC-317
* Group:	  Response Code 200
* Project: Group Project
*
* File: chat.js
*
* Description: This file is used for the chat window.
*
**************************************************************/
/**
 * Inserts HTML into the chat window, simulating an agent's response (WIP)
 * @param {element} element 
 */
function agentRespond(element) {
    document.getElementById("userchat").innerHTML=' <textarea placeholder="Type message.." name="msg" required></textarea>';
    document.getElementById("#chat-response-temp").innerHTML = 
    `<div style="padding-left:0px;" align="left">`
    +`     <div style="width: 272.45px;  padding-top:10px;" >`
    +`       User Agent:`
    +`     </div>`
    +`     <div style="width: 272.45px; background-color: white; padding:15px;">`
    +`        Hello! How can I help you today?`
    +`      </div>`
    +`    </div>`
    ;

}

/**
 * opens the chat window
*/
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  /**
 * closes the chat window
*/
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }