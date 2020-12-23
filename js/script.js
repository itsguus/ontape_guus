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




function slide(el, direction) {
    if (!el.parentNode.classList.contains("animating")) {
        var counter = el.parentNode.getAttribute("data-counter");
        el.parentNode.classList.add("animating");
        var ul = el.parentNode.querySelector("ul"),
            slider = el.parentNode.querySelector("div.slider"),
            slider2 = el.parentNode.querySelector("div.slider2"),
            mostLeft = ul.querySelector("li"),
            mostRight = ul.querySelector("li:last-of-type");

        if (direction == 'right') {
            counter++;
            ul.insertBefore(mostLeft, mostRight.nextSibling);
            slider2.style = "transform: translateX(calc(" + 25 * counter + "%));"
            slider.style = "transform: translateX(calc(" + -25 * counter + "%));"
        }
        else {
            counter--;
            ul.insertBefore(mostRight, mostLeft);
            slider2.style = "transform: translateX(calc(" + 25 * counter + "%));"
            slider.style = "transform: translateX(calc(" + -25 * counter + "%));"
        }
        el.parentNode.setAttribute("data-counter", counter);
        setTimeout(function () { el.parentNode.classList.remove("animating"); }, 500);
    }
}



if (document.body.classList.contains("vacature")) {
    var isMouseOver = false,
        timelineIntervaller = setInterval(timelineInterval, 4000);
    $("#timeline .line").addEventListener("mouseenter", function () {
        removeAllFakeHovers();
        isMouseOver = true;
    })

    $("#timeline .line").addEventListener("mouseleave", function () {
        isMouseOver = false;
    })
    timelineInterval();
}
function removeAllFakeHovers() {
    var allBlocks = document.querySelectorAll('#timeline li');
    for (var block of allBlocks) {
        block.classList.remove('fakehover')
    }
}

function timelineInterval() {
    if (!isMouseOver) {
        var allBlocks = document.querySelectorAll('#timeline li'),
            i,
            counter = parseInt($('#timeline .line').getAttribute('data-counter'));
        for (i = 0; i < allBlocks.length; i++) {
            allBlocks[i].classList.remove('fakehover');
        }
        allBlocks[counter].classList.add('fakehover');
        counter++;
        if (counter > allBlocks.length - 1) counter = 0;
        $('#timeline .line').setAttribute('data-counter', counter);
    }
}

