$ = document.querySelector.bind(document);

function scrollFunction() {
    //Get the position of the current scrollposition, plus the length of the full size of the screen
    var scrollPos = window.scrollY,
        siteHeight = document.body.clientHeight - window.innerHeight;
    //After 60%% of the page, making sure with the bool scrollVisible, switch from scrolldown to scrollbacktotop 
    // if ((scrollPos / siteHeight) >= 0.4 && !document.querySelector(".scrolldown").classList.contains("flipped")) {
    //     document.querySelector(".scrolldown").classList.add("flipped");
    // }
    // else if ((scrollPos / siteHeight) < 0.4 && document.querySelector(".scrolldown").classList.contains("flipped")) {
    //     document.querySelector(".scrolldown").classList.remove("flipped");
    // }
    if (scrollPos > 50 && !document.querySelector("body").classList.contains("dropMenu")) document.querySelector("body").classList.add("dropMenu");
    else if (scrollPos <= 50 && document.querySelector("body").classList.contains("dropMenu")) document.querySelector("body").classList.remove("dropMenu");
    

    // // GRADIENT BIT
    // if($("section.introduction") && !$('section.introduction').classList.contains('scrolledpast')) {
    //     var grad = $('section.introduction .grad');
    //         speed = scrollPos / 5;
    //     grad.style = `height: ${speed}%`;
    // }
    // if($('section.introduction') && (scrollPos > 800)) $('section.introduction').classList.add('scrolledpast');
    // else if($('section.introduction') && (scrollPos <= 800)) $('section.introduction').classList.remove('scrolledpast');
    // // END GRADIENT BIT
}



//fire when scrollposition changes
window.addEventListener("scroll", scrollFunction);
//fire when page is loaded
setTimeout(scrollFunction, 200);

