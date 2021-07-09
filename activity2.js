function getScore(){
 Score=localStorage.getItem("Score_Key")
 document.getElementById("score").innerHTML="score:"+Score
}
function back(){
    window.location="activity_1.html"
}