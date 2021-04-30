console.log("hello project")
// array for typing values
const setOfWords=['my name is shristi verma and I am a web developer','hope you are having fun and this is simple game hope you are enjoying it','If you want to learn to make website then you can contact me on linkedin any time dm me on shristi verma'];
const msg=document.getElementById('msg')
const typedWord=document.getElementById('box')
const btn=document.getElementById('btn')
let starttime,endtime;
// getting random string from array and getting time
function playGame(){
    let randomnumber=Math.floor(Math.random()*setOfWords.length)
    msg.innerText=setOfWords[randomnumber];
    let date=new Date();
    starttime=date.getTime();
    btn.innerText="Done"
}
// getting time and typing speed
const endPlay=()=>{
    let date=new Date();
    endtime=date.getTime();
    let totaltime=((endtime-starttime)/1000);
    console.log(totaltime)
    let totalstr=typedWord.value;
    let wordcount=wordCounter(totalstr);
    let speed=Math.round((wordcount/totaltime)*60);
    let finalMsg="your typing speed is "+speed+" words per minute";
    finalMsg+=compareWords(msg.innerText,totalstr);
    msg.innerText=finalMsg;
}
// getting correct and wrong number of words
const compareWords=(str1,str2)=>{
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let count=0;
    words1.forEach(function(item,index) {
        if(item==words2[index]){
            count++;
        }
    });
let errorWords=(words1.length-count);
let a = ` ${count} words are correct out of ${words1.length} words and total number of error are ${errorWords}.`;
return a; 
}
//  count total words
const wordCounter=(str)=>{
    let response=str.split(" ").length;
    console.log(response)
    return response;
}
// fething button
btn.addEventListener('click',function(){
    if(this.innerText=='Start'){
        typedWord.disabled=false;
        playGame();
    }else if(this.innerText=="Done"){
        typedWord.disabled=true;
        btn.innerText="Start";
        endPlay();
    }
})