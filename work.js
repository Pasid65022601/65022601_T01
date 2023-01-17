let randNum = Math.floor(Math.random()*101);
t = 0
function GN(){
    t = t+1
    const Guess_Number = document.getElementById('G_N').value;
    if(Guess_Number > randNum){
        alert("มากกว่า")
    }
    else if(Guess_Number < randNum){
        alert("น้อยกว่า")
    }else{
        alert("คำตอบที่ถูกคือ"+Guess_Number+"คุณทายไปทั้งหมด"+ t + "ครั้ง")
    }
    
}