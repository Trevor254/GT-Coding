//menu icon
const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");

//function to show searchbox upon click of search icon on navbar
searchIcon.addEventListener('click',()=>{
    if(searchBox.style.top == '72px'){
        searchBox.style.top = '24px';
        searchBox.style.pointerEvents = 'none';
    } else {
        searchBox.style.top = '72px';
        searchBox.style.pointerEvents = 'auto';
    }
});