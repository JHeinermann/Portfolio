


var secondNumb = 0, // start video at second 0
    vid = document.getElementById('gutta_vid'),
    jpnb = document.getElementById('Jupyter_Notebook'),
    myhex = document.getElementById('MyHex'),
    rightSection = document.getElementById("right");


function scrollVideo(){
  // Maximum scrolled Pixel value
  let maxY_Scrolled = document.documentElement.scrollHeight - window.innerHeight;
  // Current scroll Position 
  let Y_Scrolled = window.scrollY;
  // Relative scroll Position
  let Rel_Scrolled_Position = Y_Scrolled / maxY_Scrolled;
  // Video Duration in Seconds
  let VidDuration = vid.duration;
  // Currently Scrolled Second
  secondNumb = Rel_Scrolled_Position * VidDuration;
  // Set Video Time to currently scrolled second
  vid.currentTime  = secondNumb;
}


function scaleRightWidth(){
  var leftSectionWidth = vid.offsetWidth;
  var rs = document.getElementById("right2");
  rs.style.marginLeft = leftSectionWidth + 'px';
  myhex.style.setProperty("margin-left", leftSectionWidth + 'px');
}


function setIFrameHeight(){
  let iframeheight = jpnb.contentWindow.document.body.scrollHeight * 1.01;
  let rightheight = (iframeheight + myhex.offsetHeight) * 1.03
  jpnb.style.height = iframeheight+"px";
  rightSection.style.height = rightheight+"px";
}

function printID(){
  abct.innerText = parent4.id;
}


window.onload = function(){
  scaleRightWidth();
  setIFrameHeight();
  scrollVideo();
}

window.onresize = function() {
  setIFrameHeight();
  scaleRightWidth();
}


window.addEventListener("scroll", function() {
  scrollVideo();
});


