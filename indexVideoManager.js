$(() => {
    // click and show the video box
    // $("#shekonImgAnchor").click( e => { 
    //     e.preventDefault();
    //     $("#shekonVideoBox").show();
    //     $("#fade").show();
    //     $("#fade").click( e => {
    //         e.preventDefault();
    //         $("#shekonVideoBox").hide();
    //         $("#shekonVideo").trigger('pause');
    //         $("#fade").hide();
    //     })
    // });
    // $("#boxCloseBtn").click( e =>{
    //     e.preventDefault();
    //     $("#shekonVideoBox").hide();
    //     $("#shekonVideo").trigger('pause');
    //     $("#fade").hide();
    // })
    linkImgVideo("#shekonImgAnchor","#shekonVideoBox","#shekonVideo");
    linkImgVideo("#connect4ImgAnchor","#connect4VideoBox","#connect4Video");
    linkImgVideo("#augImgAnchor","#augVideoBox","#augVideo");
})

//function: click img to show the video
//input: (string,string,string)
function linkImgVideo (img,videoBox,video) {  
    $(img).click( e => { 
        e.preventDefault();
        $(videoBox).show();
        $("#fade").show();
        $("#fade").click( e => {
            e.preventDefault();
            $(videoBox).hide();
            $(video).trigger('pause');
            $("#fade").hide();
        })
    });
    $(".box-close").click( e =>{
        e.preventDefault();
        $(videoBox).hide();
        $(video).trigger('pause');
        $("#fade").hide();
    })
}

export function linkImgDiv (img,div) {  
    $(img).click( e => { 
        e.preventDefault();
        $(div).show();
        $("#fade").show();
        $("#fade").click( e => {
            e.preventDefault();
            $(div).hide();
            $("#fade").hide();
        })
    });
    $(".box-close").click( e =>{
        e.preventDefault();
        $(div).hide();
        $("#fade").hide();
    })
}

// export default {linkImgVideo, linkImgDiv};