$(() => {
    const barPointerElem = $("#barPointer");
    const barHeight = $("#progressBar").height();
    const winHeight = $(window).height();
    const bodyHeight = $("body").height();

    $.event.add(window, "scroll", ()=>{
        const scrollYVal = window.scrollY;
        const progress = scrollYVal / (bodyHeight - winHeight);
        console.log(progress);
        // console.log(Clamp(progress, 0, 1));
        $(barPointerElem).css("top", Clamp(progress, 0, 1)  * barHeight);
    });
    const progress1 = 0.27;
    const block1elem = $("#block1");
    const progress2 = 0.58;
    const block2elem = $("#block2");
    const progress3 = 0.8;
    const block3elem = $("#block3");
    const progress4 = 1;
    const block4elem = $("#block4");
    $(block1elem).css("height", (progress1 * barHeight) + "px");
    $(block2elem).css("height", ((progress2 - progress1) * barHeight) + "px");
    $(block3elem).css("height", ((progress3 - progress2) * barHeight) + "px");
    $(block4elem).css("height", ((progress4 - progress3) * barHeight) + "px");
});

function Clamp(val,min,max){
    if(val >= min && val <= max){
        return val
    }
    else if(val < min) {
        return min
    }
    else {
        return max
    }
}