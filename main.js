// excute after page load
window.onload = function digital_fn() {


    //toggle button 
    let toggle = document.querySelector("#nav .toggle-btn")
    let collapse = document.querySelector("#nav .collapse ")

    toggle.addEventListener('click', function (event) {
        collapse.classList.toggle('active')
        // console.log(toggle);

    });

    //mansory js 
    let grid = document.querySelector("#site-main .recent-work-area .images-flex")

    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',

        // allowing space around grid item.
        gutter: 100,
        // add fitwidth to all the columns
        fitwidth: true
    })

}

// relax js cdoe
var rellax = new Rellax('.rellax', {
    center: true
})