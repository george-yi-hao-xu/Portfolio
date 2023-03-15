import {linkImgDiv} from "./indexVideoManager.js";
import { reveal } from "./reveal.js";

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

    $.event.add(window,"resize", MidBarResize);

    // adding typing effects to #typed in index.html
    try{
        TypingEffect("#typed",["<h1>Welcome!</h1>", "<h1 id='typed-strings'><span> I'm </span><abbr title='George Yihao Xu'>George Yihao Xu</abbr></h1>"]);
    }catch{
        console.log("no element called typed")
    }
    // adding typing effects to #typedOSB in osb.html
    try{
        TypingEffect("#typedOSB",["<h1><abbr class='risd-yellow'>O</abbr>cean <abbr class='risd-yellow'>S</abbr>tate <abbr class='risd-yellow'>B</abbr>ioactives </h1>", "<h1>OSB</h1>"]);
    }catch{
        console.log("no element called typedOSB")
    }
    // adding typing effects to #typedEcoHome in ecoHome.html
    try{
        TypingEffect("#typedEcoHome", ["<h1><abbr class='risd-yellow'>E</abbr><span class='shrink-text grey'>CO</span> <abbr class='risd-yellow'>H</abbr><span class='shrink-text grey'>OME</span></h1>", "<h1>RISD Academic Work</h1>"])
    }catch{
        console.log("no element called typedEcoHome")
    }
    
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

    // hover hide in osb.html
    const osbWFimg1 = $("#osbWFimg1");
    const osbWFimg2 = $("#osbWFimg2");
    HoverHide(osbWFimg1,osbWFimg2);
    HoverHide(osbWFimg2,osbWFimg1);
    // const osbHiFiImg1 = $("#osbHiFiImg1");
    // const osbHiFiImg2 = $("#osbHiFiImg2");
    // HoverHide(osbHiFiImg1,osbHiFiImg2);
    // HoverHide(osbHiFiImg2,osbHiFiImg1);

    // loading GD div
    const gdWorkContainerElem = $("#gdWorkContainer");
    let newJSXgd = "";
    for(let i = 1; i <= 4; i++){
        // if(i<=9){
        //     newJSXgd += `<img class='archWorkImg' src='images/archi/ar_Page_0${i}.jpg' alt='archi${i}.jpg'>`;
        // }else{
        //     newJSXgd += `<img class='archWorkImg' src='images/archi/ar_Page_${i}.jpg' alt='archi${i}.jpg'>`;
        // }
        newJSXgd += `<img class='archWorkImg' src='images/moregd/${i}.jpg' alt='moregd${i}.jpg'>`;
    }
    $(gdWorkContainerElem).html(newJSXgd);
    linkImgDiv("#moreGDWorkBtn","#gdWorkContainer");
    
    linkImgDiv("#wlWorkBtn","#wlWorkContainer");
    linkImgDiv("#thesisWorkBtn","#thesisWorkContainer");

    // loading archi div
    const archWorkContainerElem = $("#archWorkContainer");
    let newJSX = "";
    for(let i = 1; i <= 25; i++){
        if(i<=9){
            newJSX += `<img class='archWorkImg' src='images/archi/ar_Page_0${i}.jpg' alt='archi${i}.jpg'>`;
        }else{
            newJSX += `<img class='archWorkImg' src='images/archi/ar_Page_${i}.jpg' alt='archi${i}.jpg'>`;
        }
    }
    $(archWorkContainerElem).html(newJSX);
    linkImgDiv("#moreArchiWorkBtn","#archWorkContainer");

    // loading animation
    window.addEventListener("scroll", reveal);

    // hover welight to show coming soon
    $("#welight").hover(
        ()=>{$("#welightComingSoon").show()},() =>{$("#welightComingSoon").hide()});
    
    $("#thesis").hover(
        ()=>{$("#thesisComingSoon").show()},() =>{$("#thesisComingSoon").hide()});
    
    $("#nasa").hover(
        ()=>{$("#nasaComingSoon").show()},() =>{$("#nasaComingSoon").hide()});
    
})

function MidBarResize(){
    // middle white background following the contaienr height
    const singleWorkMiddle = $("#singleWorkMiddle");
    // const workContainer = $("#workContainer");
    // const titleContainer = $("#titleContainer")
    const mainElem = $("main");
    // $(singleWorkMiddle).css("height", ($(workContainer).height() + $(titleContainer).height()) + "px");
    $(singleWorkMiddle).css("height", ($(mainElem).height() + 50) + "px");
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
/* input: idStr, a string to tell which element to have effect
 *        contentStrList, a list of string(s)
 * output: void
 */
function TypingEffect(idStr,contentStrList){
        // typed.js
        const options = {
            strings: contentStrList,
            typeSpeed: 90,
            backSpeed: 10,
            backDelay: 2000,
            loop: true,
            showCursor: false,
            onBegin: () => {
                $(idStr).removeClass("toOrange");
            },
            onComplete: () => {
                $(idStr).addClass("toOrange");
            },
          }
        // #typed in home page
        try{
            const typed = new Typed(idStr, options)
        }catch{
            console.log("no such element called " + idStr);
        }
}

// loading animation
// export function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 60; // how sensitive. smaller -> earlier to load elem
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }