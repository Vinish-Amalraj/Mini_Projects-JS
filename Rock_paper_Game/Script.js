let player =document.getElementById("Players")
let paper =document.getElementById("Paper")
let scissors =document.getElementById("Scissors")
let rock =document.getElementById("Rock")
let Show =document.getElementById("Show")
let annoce =document.getElementById("annoce")
let choice =["✊🏼" ,"✋🏼","✌🏼"]
let score = 0
let rotation = 0;

function handleButtonClick() {    //Rotation Function
    rotation += 360;
    Show.style.transform = `rotateX(${rotation}deg)`;
}
rock.addEventListener('click', handleButtonClick);     //call rotation funtion
paper.addEventListener('click', handleButtonClick);
scissors.addEventListener('click', handleButtonClick);

const Rock =()=>{            //Rock Click function
   const randoms =Math.floor(Math.random()*choice.length)  //Write random Function
   Show.innerHTML=`<button id='You'>✊🏼</button> <button id='bot'>${choice[randoms]}</button>`
   player.innerHTML="<h1>🫵🏼</h1><h1>🤖</h1>"
   if(choice[randoms]=="✊🏼"){
    annoce.innerHTML=`<h2>Draw the Match 🥴</h2><h3>Score:${score}</h3>`
   }
   else if(choice[randoms] =="✌🏼"){
    score +=1
    annoce.innerHTML=`<h2>You Win Match 😍</h2><h3>Score:${score}</h3>`
   }else{
    score -=1
    if(score==-1){
        score =0
    }
    annoce.innerHTML=`<h2>You Lose the Match 😭</h2><h3>Score:${score}</h3>`
   }}
const Paper =()=>{
    const randoms =Math.floor(Math.random()*choice.length)
    player.innerHTML="<h1>🫵🏼</h1><h1>🤖</h1>"
    Show.innerHTML=`<button id='You'>✋🏼</button> <button id='bot'>${choice[randoms]}</button>`
    if(choice[randoms]=="✋🏼"){
        annoce.innerHTML=`<h2>Draw the Match 🥴 </h2><h3>Score:${score}</h3>`
    }
       else if(choice[randoms] =="✊🏼"){
        score +=1
        annoce.innerHTML=`<h2>You Win Match 😍</h2><h3>Score:${score}</h3>`
    }else{
        score -=1
        if(score==-1){
            score =0
        }
        annoce.innerHTML=`<h2>You Lose the Match 😭</h2><h3>Score:${score}</h3>`
    } 
}
const Scissors =()=>{
    const randoms =Math.floor(Math.random()*choice.length)
    player.innerHTML="<h1>🫵🏼</h1><h1>🤖</h1>"
    Show.innerHTML=`<button id='You'>✌🏼</button> <button id='bot'>${choice[randoms]}</button>`
    if(choice[randoms]=="✌🏼"){
        annoce.innerHTML=`<h2>Draw the Match 🥴</h2><h3>Score:${score}</h3>`
       }
       else if(choice[randoms] =="✋🏼"){
        score+=1
        annoce.innerHTML=`<h2>You Win Match 😍</h2><h3>Score:${score}</h3>`
       }else{
        score -=1
        if(score==-1){
            score =0
        }
        annoce.innerHTML=`<h2>You Lose the Match 😭</h2><h3>Score:${score}</h3> `
    }
}
const Reset =()=>{
    Show.innerHTML="";
    annoce.innerHTML="";
    player.innerHTML="";
    num = 0;
    score= 0;
}