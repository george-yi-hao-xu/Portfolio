import {linkImgDiv} from "../indexVideoManager.js";
import { reveal } from "../reveal.js";

$(() => {
    linkImgDiv("#osbHiFiImg1","#hifi1Container");
    linkImgDiv("#osbWFImgM","#wf1Container");

    // loading animation
    window.addEventListener("scroll", reveal);
})