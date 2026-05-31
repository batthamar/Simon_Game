let colors=["green","red","yellow","blue"];
let colorsarry=[];
var colorsclicked=[];
var level=0;
var started=false;
var color;

function playsound(sound)
{
new Audio("./sounds/"+sound+".mp3").play();
}

function animation(buttonname)
{
document.querySelector("#"+buttonname).classList.add("pressed");
setTimeout(function(){
 document.querySelector("#"+buttonname).classList.remove("pressed");   
},100);
}

function changeheading(level)
{
document.querySelector("h1").innerHTML="Level "+level;
}

function colorgenrator()
{
var numgenrator=Math.floor(Math.random()*4);
return colors[numgenrator];
}

//function right wrong
function rightwrong(){
if(colorsarry[colorsclicked.length-1]===colorsclicked[colorsclicked.length-1])
{
    if(colorsarry.length===colorsclicked.length){
level++;
colorsclicked=[];
setTimeout(function(){
    if(level==101)
{
document.querySelector("h1").innerHTML="Congratulations 🎉 You have created the new world record "+level;
}
else{
changeheading(level);
}
color=colorgenrator();
playsound(color);
colorsarry.push(color);
animation(color);
},1000);}}
else
{
    document.querySelector("h1").innerHTML="Game Over your score is "+level;
    level=0;
    playsound("wrong");
    colorsarry=[];
    colorsclicked=[];
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="blue";
    },100);
    started=false;
}}

//when key is pressed
document.addEventListener("keydown",function(){
if(started==false){
started=true;
colorsclicked=[];
level++;
color=colorgenrator();
changeheading(level);
playsound(color);
colorsarry.push(color);
animation(color);
}});


//when user clicks a button
for(var i=0;i<colors.length;i++)
    {
document.querySelectorAll(".btn")[i].addEventListener("click",function()
{
if(started==true){
playsound(this.id);
colorsclicked.push(this.id);
animation(this.id);
rightwrong();
}}); }