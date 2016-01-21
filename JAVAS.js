var slideimages = new Array() // create new array to preload images
slideimages[0] = new Image() // create new instance of image object
slideimages[0].src = "ART1.jpg" // set image object src property to an image's src, preloading that image in the process
slideimages[1] = new Image()
slideimages[1].src = "ART2.jpg"
slideimages[2] = new Image()
slideimages[2].src = "ART3.jpg"

//variable that will increment through the images
var step = 0
var whichimage = 0

function slideit(){
 //if browser does not support the image object, exit.
 if (!document.images)
  return
 document.getElementById('slide').src = slideimages[step].src
 whichimage = step
 if (step<2)
  step++
 else
  step=0
 //call function "slideit()" every 2.5 seconds
 setTimeout("slideit()",2500)

 }

function slidelink(){
 if (whichimage == 0)
  window.location = "link1.htm"
 else if (whichimage == 1)
  window.location = "link2.htm"
 else if (whichimage == 2)
  window.location = "link3.htm"
}