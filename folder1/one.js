var x = 100998
var space = "&nbsp"

function ThreeLines(){
    document.writeln("<br />")
    document.writeln("<br />")
    document.writeln("<br />")
}

function ThreeSpaces(){
    document.writeln(space + space + space)
}

function TestThis(){
    if(1<2){
        document.writeln("Yes")
    }    
}

function TypeOfThis(x) {
    document.writeln(typeof(x))
}

function SwitchTest(){
    var i = 11
    switch(i){
        case 11: document.writeln("lolol")
    }
}

function thing(){
    document.write("Entering the loop!<br /> ");
    outerloop: // This is the label name
    
    for (var i = 0; i < 5; i++)
    {
        document.write("Outerloop: " + i + "<br />");
        innerloop:
        for (var j = 0; j < 5; j++)
        {
            if (j > 3 ) break ; // Quit the innermost loop
            if (i == 2) break innerloop; // Do the same thing
            if (i == 4) break outerloop; // Quit the outer loop
            document.write("Innerloop: " + j + " <br />");
        }
    }
    document.write("Exiting the loop!<br /> ");
}



function InnerAndOuter(){
    document.writeln("InnerAndOuter Function: <br />")

    outerloop:
    for(var i=0;i<10;i++){
        document.writeln("outerloop" + i + "<br />")
        innerloop:
        for(var x=0;x<10;x++){
            // if(x==1) break innerloop;
            if(i==2) break innerloop;
            if(x==6) break outerloop;
            document.write("innerloop" + x + "<br />")
        }
    }
}


TypeOfThis("jsfhjdshf")
ThreeLines()
TestThis()
SwitchTest()
document.writeln("hello")
document.writeln("hello")
ThreeLines() //three line breaks
thing()
ThreeLines() //three line breaks
InnerAndOuter()