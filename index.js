const url = 'https://api.quotable.io/random';
var qoute;
var author;
var qoutetext =document.getElementById("qoute");
var authurtext =document.getElementById("authur");
async function fetchData(url) {
    const data= await fetch(url);
    const advicedata = await data.json();
     qoute=  advicedata.content;
     author= advicedata.author;
    // console.log(advicedata);  
    console.log(qoute);
    console.log(author);
    
    if(qoutetext && authurtext){
        qoutetext.innerHTML= advicedata.content;
        authurtext.innerHTML= advicedata.author;
    }
}
  fetchData(url);
