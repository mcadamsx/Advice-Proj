
const url = 'https://api.quotable.io/random';

let qoutetext =document.getElementById("qoute");
let authurtext =document.getElementById("authur");

const arr_qoute=["Friendship is but another name for an alliance with the follies and the misfortunes of others. Our own share of miseries is sufficient: why enter then as volunteers into those of another?"
,"The man who makes everything that leads to happiness depends upon himself, and not upon other men, has adopted the very best plan for living happily. This is the man of moderation, the man of manly character and of wisdom"
,"The problem with Google is you have 360 degrees of omnidirectional information on a linear basis, but the algorithms for irony and ambiguity are not there. And those are the algorithms of wisdom"
,"The things that one most wants to do are the things that are probably most worth doing."
,"The things that one most wants to avoid are the things that are probably most worth avoiding."
,"What we see depends mainly on what we look for."
,"It seemed the world was divided into good and bad people. The good ones slept better... while the bad ones seemed to enjoy the waking hours much more."
,"Experience is not what happens to a man. It is what a man does with what happens to him."
]

// async function fetchData(url) {
//     const data= await fetch(url);
//     const advicedata = await data.json();
//     let qoute=  advicedata.content;
//     let author= advicedata.author;

//      qoutetext.innerHTML = qoute;
//      authurtext.innerHTML = author;
// }

     function random_qoute(arr_qoute){
        const qoute_index=Math.floor(Math.random()*arr_qoute.length);
        const randqoute=arr_qoute[qoute_index];
        console.log(randqoute);
        qoutetext.innerHTML = randqoute;
     }


     // //     // console.log(advicedata);  
// //     console.log(qoute);
// //     console.log(author);
// //     console.log(qoutetext)


// YOU DIDN'T NEED AN IF STATEMENT TO IMPLEMENT IT
    
// //     if(qoutetext && authurtext){
// //         qoutetext.innerHTML= advicedata.content;
// //         authurtext.innerHTML= advicedata.author;
// //     }
// // }


