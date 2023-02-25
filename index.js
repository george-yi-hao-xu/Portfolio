$(()=>{
    const headerElement = $("#headerContainer");
    const headerScrollMagnifier = 0.5;
    const headerScrollValMaxLimit = $(headerElement).height() * 1.1;

    const logoElement = $("#logoTexts");
    const logoFontSizeVal = parseInt($(logoElement).css('font-size').replace(/px/,""))
    const logoFontSizeMinLimit = 30;

    $.event.add(window, "scroll", () => {
        const scrollYVal = window.scrollY;
        $(headerElement).css('top', scrollYVal < headerScrollValMaxLimit ? - scrollYVal * headerScrollMagnifier : - headerScrollValMaxLimit);

        const targetLogoFontSize = logoFontSizeVal - scrollYVal * 0.08;
        $(logoElement).css('font-size', targetLogoFontSize > logoFontSizeMinLimit ? targetLogoFontSize + "px" : logoFontSizeMinLimit + "px");
    })
})