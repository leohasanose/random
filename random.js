var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {

   var Xtra-Random = Math.random() 
    makeRect(0,0, 200, 100,"lightblue")
    
if(Xtra-Random < .9){


makeImage("https://pbs.twimg.com/profile_images/735611143423565824/4ggYDBHU.jpg" , 0, 0, 200, 100)
makeImage("https://pbs.twimg.com/profile_images/735611143423565824/4ggYDBHU.jpg" , 20, 0, 20, 100, 0.4)

makeImage("https://pbs.twimg.com/profile_images/735611143423565824/4ggYDBHU.jpg" , 10, 0, 100, 10, 0.8)


makeImage("https://pbs.twimg.com/profile_images/735611143423565824/4ggYDBHU.jpg" , 10, 50, 100, 10, 0.4)


























}else{

makeImage("https://pbs.twimg.com/profile_images/687551008868712449/U_cyTkxQ.jpg",0,0,200,100)
}


}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
   
 makeRect(0,0, 200, 100,"red")

 var random2 = Math.random()
 
 
 
 
 if(random2 < .9)
 
makeImage("https://i.ytimg.com/vi/G7urFo0wbHc/maxresdefault.jpg" , 0, 0, 200, 100, 0.3)
makeText("n", 2, 15, 2)
makeText("o", 3, 15, 10)
makeText("w", 8, 15, 5)

makeText("l", 14, 15, 15)
makeText("o", 17, 15, 9)
makeText("o", 20, 15, 13)
makeText("k", 25, 15, 6)

makeText("a", 29, 15, 14)
makeText("t", 39, 15, 7)

makeText("t", 38, 15, 8)
makeText("h", 42, 15, 2)
makeText("i", 45,15, 10)
makeText("s", 48, 15, 7)

makeText("n", 54, 15, 5)
makeText("e", 57,15, 10)
makeText("t", 60, 15, 8)



}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
     makeRect(0,0, 200, 100,"blue")

makeEllipse(50, 50, 15, 10, "green")
makeLine(50, 50, 70, 70, "green", 10)
 makeRect(60,60, 50, 20,"green")
makeText("( ͡° ͜ʖ ͡°)", 45, 50, 5)
makePolygon("110,70 70,60 150,50", "blue")
makeRect(60,79,10,20,"green")
makeRect(90,79, 10, 20, "green")
makePolygon("109,70 109,80 200,75","green")
makeRect(60, 94, 20,50)
makeRect(90, 94, 20, 50)
makeCircle(65, 98, 2,"white")
makeCircle(95, 98, 2,"white")
makeText("( ͡° ͜ʖ ͡°)", 63, 98, 1.5)
makeCircle(10, 10, 10,"white")
makeCircle(15,10, 10,"white")
makeCircle(15, 15, 10,"white")
makeCircle(20, 15, 10,"white")
makeCircle(30, 10, 10,"white")
makeCircle(35, 0, 10,"white")
makeCircle(34, 15, 10,"white")
makeCircle(50, 15, 10,"white")
makeCircle(54, 15, 10,"white")
makeText("( ͡° ͜ʖ ͡°)", 10, 15, 2)
makeText("( ͡° ͜ʖ ͡°)", 20, 10, 2)
makeText("( ͡° ͜ʖ ͡°)", 53, 9, 2)
makeText("( ͡° ͜ʖ ͡°)", 36, 20, 2)
makeText("( ͡° ͜ʖ ͡°)", 25, 16, 2)
makeText("( ͡° ͜ʖ ͡°)", 15, 7, 2)

}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var number = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(number < 0.33){
    
        createFirstScene();
    
    }
    
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
    else if(number < 0.67){
    
        createSecondScene();
    
    }
    
    // Else, call the function to create your third scene.
    
    else{
    
    createThirdScene();
    
    }
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}