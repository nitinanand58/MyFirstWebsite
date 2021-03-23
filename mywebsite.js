burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

 


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('visibility');
    navList.classList.toggle('visibility');
    navbar.classList.toggle('navheight');
        
})

function openPage(){
    var x = document.getElementById("search").value;

    if (x === "napkin" || x === "toilet paper"){
        window.open("/HTML/products.html");
    }

};