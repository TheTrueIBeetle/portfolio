/*
 * File Name: scripts.js
 * Author: Luke Bas
 * Date Created: 2023-09-08
 */

let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
let sideMenu = document.getElementById("sidemenu");

function openTab(tabName) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}



function openMenu() {
    sideMenu.style.right = "0";
}
function closeMenu() {
    sideMenu.style.right = "-200px";
}