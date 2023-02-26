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

        $(titleContainerElem).css('top', (titleContainerStartTopVal-scrollYVal * 1.75) + "px")
    })

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
    var typed = new Typed('#typed', options);
})

