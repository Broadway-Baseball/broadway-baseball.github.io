// this is  the dataset, you can add as many categories as you want
var musicals = [       
    // This is the datases. 
    // Each interest is linked to categories
    // The script determines what interest a person could have in other categories that are linked to the interests the person chose
    { musical : "A Little Night Music", category : ["Stephen Sondheim", "Hugh Wheeler", "1970s"]},
    { musical : "Cabaret", category : ["John Kander", "Fred Ebb", "Joe Masteroff", "1960s"]},
    { musical : "Chicago", category : ["John Kander", "Fred Ebb", "Bob Fosse", "1970s"]},
    { musical : "Come From Away", category : ["Irene Sankoff", "David Hein", "2010s"]},
    { musical : "Company", category : ["Stephen Sondheim", "George Furth", "1970s"]},
    { musical : "Evita", category : ["Andrew Lloyd Webber", "Tim Rice", "1970s"]},

    { musical : "Follies", category : ["Stephen Sondheim", "James Goldman", "1970s"]},
    { musical : "Gypsy", category : ["Jules Styne", "Stephen Sondheim", "Arthur Laurents", "1950s"]},
    { musical : "Hadestown", category : ["Anais Mitchell", "2010s"]},
    { musical : "Hairspray", category : ["Marc Shaiman", "Scott Wittman","2000s"]},
    { musical : "Hamilton", category : ["Lin-Manuel Miranda", "2010s"]},
    { musical : "Hello Dolly", category : ["Jerry Herman", "Michael Stewart", "1960s"]},    
    ];
// Below is the function that processes the interests given
function process(){
let recommendations = [];
let cat1 = document.getElementById("cat1").value;
let cat2 = document.getElementById("cat2").value;
let cat3 = document.getElementById("cat3").value;
    let dataE = []
       dataE.push(cat1);
       dataE.push(cat2);
       dataE.push(cat3);
       
// dataE is the variable that stores the values (interests selected) from the html
var search = dataE, categories = [];

search.map(all=>{
    musicals.map(r=>{
        if(all === r.musical) categories=categories.concat(r.category);
    })
})
// You can check the categories which the interests a user selected belong to --
 // console.log(categories)
    
musicals.map(all =>{
    categories.map(category =>{
        if(all.category.includes(category)&&recommendations.indexOf(all.musical)===-1)
            recommendations = recommendations.concat(all.musical)
    })
})
    // the code above gets all the interests from the categories which where stored, because each interest in linked to another by a category
//alert(recommendations)
     let dcells = document.getElementById("data");
            dcells.innerHTML = " "
    for(let c = 0; c < recommendations.length; c++){
        let element = document.createElement("input")
        let dcells = document.getElementById("data"); 
            element.style.borderStyle = "hidden"
        dcells.appendChild(element)
        element.value = "("+ c +") " + recommendations[c]
    }


}
