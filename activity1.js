var Score=0
function updateScore(){
    Score=Score+1
    document.getElementById("score").innerHTML="score:"+Score;
}
    function saveScorè(){
       localStorage.setItem("Score_Key",Score) 
    }
    function nextPAGE(){
        window.location="activity_2.html"
    }