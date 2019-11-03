
const btn = document.querySelector("button");     


btn.addEventListener('click', ()=> {


  fetch(`https://api.kanye.rest/`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    var h = document.querySelector('h1')                // Create a <h1> element
    var t = document.createTextNode(response.quote);     // Create a text node  
    h.appendChild(t);  
    document.querySelector('h1') = response.quote
  })

  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
});
});

const btn2 = document.getElementById('btn2')

btn2.addEventListener('click', ()=> {
document.querySelector('h1').innerHTML = ""
});

   

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const btn3 = document.getElementById("trumpquote");  

btn3.addEventListener('click', ()=> {


  fetch(`https://api.tronalddump.io/random/quote`, {
      headers: {
        accept: 'application/hal+json'
      }
  })
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    console.log(response)
    var a = document.querySelector('h2')                // Create a <h1> element
    var b = document.createTextNode(response.value);     // Create a text node  
    a.appendChild(b);  
    document.querySelector('h2') = response.value
  })

  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
});
});

const btn4 = document.getElementById('btn4')

btn4.addEventListener('click', ()=> {
document.querySelector('h2').innerHTML = ""
});



  