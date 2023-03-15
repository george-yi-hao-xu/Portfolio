import {linkImgDiv} from "../indexVideoManager.js";
import { reveal } from "../reveal.js";

$(() => {
    // linkImgDiv("#osbHiFiImg1","#hifi1Container");
    // linkImgDiv("#osbWFImg1","#wf1Container");
    linkImgDiv("#ecohomeHiFiImg3","#ecohomeHiFiImg3Container");
    
    // loading animation
    window.addEventListener("scroll", reveal);
})