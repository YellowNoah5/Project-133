status = ""

object = []

img = ""

function preload()
{
    img = loadImage("table.jpg")
}

function setup()
{
    canvas = createCanvas(800, 600)
    canvas.position(620, 220)

    objm = ml5.objectDetector('object', modeLoaded)
    document.getElementById("statuss").innerHTML = "Detecting Objects"
}

function modeLoaded()
{
    console.log("Model Loaded!")

    status = true

    objm.detect(img, gotResults)

}

function gotResults(error, results)
{
    if(error) 
    {
        console.log(error)
    }
    else
    {
        console.log(results)
        object = results
    }
}

function draw()
{
    image(img, 0, 0, 800, 600)


    if(status != "")
    {
        for(i = 0; i < object.length; i++)
        {
            document.getElementById("statuss").innerHTML = "status: object detected"

            percent = floor(object[i].confidence*100)

            fill("blue")
            textSize(25)

            text(object[i].label + " " + percent + "%", object[i].x, object[i].y)

            noFill()

            stroke("blue")

            rect(object[i].x, object[i].y, object[i].width, object[i].height)
            
            
        }
    }

}