$(()=>{
    const headerElement = $("#headerContainer");
    const headerScrollMagnifier = 0.5;
    const headerScrollValMaxLimit = $(headerElement).height() * 1.1;

    const logoElement = $("#logoTexts");
    const logoFontSizeVal = parseInt($(logoElement).css('font-size').replace(/px/,""))
    const logoStartTopVal = parseInt($(logoElement).css('top').replace(/px/,""));
    console.log(logoStartTopVal);
    const logoScrollValMinLimit = -6;
    const logoFontSizeMinLimit = 10;

    const titleContainerElem = $("#titleContainer");
    const titleContainerStartTopVal = parseInt($(titleContainerElem).css('top').replace(/px/,""));
    // console.log(titleContainerStartTopVal);

    $.event.add(window, "scroll", () => {
        const scrollYVal = window.scrollY;

        $(headerElement).css('top', scrollYVal < headerScrollValMaxLimit ? - scrollYVal * headerScrollMagnifier : - headerScrollValMaxLimit);

        const targetLogoFontSize = logoFontSizeVal - scrollYVal * 0.08;
        $(logoElement).css('font-size', targetLogoFontSize > logoFontSizeMinLimit ? targetLogoFontSize + "px" : logoFontSizeMinLimit + "px");
        const targetLogoTopVal = logoStartTopVal - scrollYVal * 5;
        $(logoElement).css('top', targetLogoTopVal + "px");

        $(titleContainerElem).css('top', (titleContainerStartTopVal-scrollYVal * 1.75) + "px");

        MidBarResize();
    })

    $.event.add(window,"resize", MidBarResize)


    // typed.js
    var options = {
        strings: ["<h1>Welcome!</h1>", "<h1 id='typed-strings'><span> I'm </span><abbr title='George Yihao Xu'>George</abbr></h1>"],
        typeSpeed: 90,
        backSpeed: 10,
        backDelay: 2000,
        loop: true,
        showCursor: false,
        onBegin: () => {
            $('#typed').removeClass("toOrange");
        },
        onComplete: () => {
            $('#typed').addClass("toOrange");
        },
      };
    
    try{
        var typed = new Typed('#typed', options)
    }catch{
        console.log("no typed");
    };
    
    // jQuery 
    // hover user-story
    const userStoryImg1 = $("#userStoryImg1");
    const userStoryImg2 = $("#userStoryImg2");
    const tomStory = $("#tomStory");
    const laurenStory = $("#laurenStory");
    // hover A to show B
    HoverToggle(userStoryImg1, tomStory);
    HoverToggle(userStoryImg2, laurenStory);

    const appImg1 = $("#appImg1");
    const appImg2 = $("#appImg2");
    // hover hide another
    HoverHide(appImg1,appImg2);
    HoverHide(appImg2,appImg1);

})

function MidBarResize(){
    // middle white background following the contaienr height
    const singleWorkMiddle = $("#singleWorkMiddle");
    // const workContainer = $("#workContainer");
    // const titleContainer = $("#titleContainer")
    const mainElem = $("main");
    // $(singleWorkMiddle).css("height", ($(workContainer).height() + $(titleContainer).height()) + "px");
    $(singleWorkMiddle).css("height", $(mainElem).height() + "px");
}

/* input: jQueryElement, a jQueryElement
 *        div, another jQueryElement to be toggled
 * output: void
 */
function HoverToggle(jQueryElement, div){
    $(jQueryElement).hover(() => {
        $(div).css("display","block")
    },()=>{
        $(div).css("display","none")
    });
}

/* input: jQueryElementHovered, a jQueryElement to be hovered
 *        jQueryElementToHide, another jQueryElement to be hidden when the user hovers jQueryElementHovered
 * output: void
 */
function HoverHide(jQueryElementHovered,jQueryElementToHide){
    $(jQueryElementHovered).hover(() => {
        $(jQueryElementToHide).stop(true).css("display","none")
    },()=>{
        $(jQueryElementToHide).stop(true).css("display","block")
    });
}