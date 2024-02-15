


var secondNumb = 0, // start video at second 0
    vid = document.getElementById('gutta_vid'),
    jpnb = document.getElementById('Jupyter_Notebook');



function printItem(){
  // Height of content of Jupyter Notebook
  let jpnb_contentHeight = jpnb.contentDocument.documentElement.scrollHeight;
  // Height of iFrame content
  let jpnb_iframeHeight = jpnb.offsetHeight;
  // Maximum Scrolled Pixel
  let Y_Pixel = jpnb_contentHeight - jpnb_iframeHeight;
  // Current Scrolled Position
  let Y_Scrolled = jpnb.contentWindow.pageYOffset;
  // Percent Scrolled from Top
  let Perc_Scrolled = Y_Scrolled / Y_Pixel;
  // Video Duration in Seconds
  let VidDuration = vid.duration;
  // Currently Scrolled Second
  secondNumb = Perc_Scrolled * VidDuration;
  // Set Video Time to currently scrolled second
  vid.currentTime  = secondNumb;
}

jpnb.contentWindow.addEventListener("scroll", printItem);
// window.requestAnimationFrame(printItem);
// window.addEventListener("scroll", printItem);
// window.onload = printItem;

// printItem();
// window.requestAnimationFrame(printItem);
// window.onresize = printItem;


