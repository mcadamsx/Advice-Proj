const url = 'https://api.quotable.io/random';
var qoute;
var author;
async function fetchData(url) {
    const data= await fetch(url);
    const advicedata = await data.json();
     qoute=  advicedata.content;
     author= advicedata.author;
    console.log(advicedata);  
    console.log(qoute);
    console.log(author);
  }
  fetchData(url);
// var qoutetopage=document.getElementsByClassName("qoute").innerHTML;
// var authurpage=document.getElementsByClassName("authur").innerHTML;
// qoutetopage.innerHTML=qoute;
// authurpage.innerHTML=author;
function updatePage() {
    const quoteElement = document.querySelector('quote');
    const authorElement = document.querySelector('author');
  
    quoteElement.innerHTML = qoute;
    authorElement.innerHTML = author;
  }
  updatePage();