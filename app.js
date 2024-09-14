// this is  the dataset, you can add as many categories as you want
var musicals = [       
    // This is the datases. 
    // Each interest is linked to categories
    // The script determines what interest a person could have in other categories that are linked to the interests the person chose
    { musical : "13", category : ["Jason Robert Brown", "Dan Elish", "2000s", "English"]},
    { musical : "1776", category : ["Sherman Edwards", "Peter Stone", "1960s", "English"]},
    { musical : "110 in the Shade", category : ["Harvey Schmidt", "Tom Jones", "N Richard Nash", "1960s", "English"]},
    { musical : "1600 Pennsylvania Avenue", category : ["Leonard Bernstein", "Alan Jay Lerner", "1970s", "English"]},
    { musical : "42nd Street", category : ["Harry Warren", "Al Dubin", "Johnny Mercer", "Michael Stewart", "1930s", "English"]},
    { musical : "The 25th Annual Putnam County Spelling Bee", category : ["William Finn", "Rachel Sheinkin", "2000s", "English"]},
    { musical : "70 Girls 70", category : ["John Kander", "Fred Ebb", "1970s", "English"]},
    { musical : "9 to 5", category : ["Dolly Parton", "Patricia Resnick", "2000s", "English"]},
    { musical : "A Bronx Tale", category : ["Alan Menken", "Glenn Slater", "Chazz Palminteri", "2010s", "English"]},
    { musical : "A Catered Affair", category : ["John Bucchino", "Harvey Fierstein", "2000s", "English"]},
    { musical : "A Chorus Line", category : ["Marvin Hamlisch", "Edward Kleban", "1970s", "English"]},
    { musical : "A Christmas Story", category : ["Benj Pasek", "Justin Paul", "2010s", "English"]},
    { musical : "A Class Act", category : ["Edward Kleban", "2000s", "English"]},
    { musical : "A Funny Thing Happened on the Way to the Forum", category : ["Stephen Sondheim", "Burt Shevelove", "Larry Gelbart", "1960s", "English"]},
    { musical : "A Gentleman's Guide to Love and Murder", category : ["Steven Lutvak", "2010s", "English"]},

    { musical : "A Little Night Music", category : ["Stephen Sondheim", "Hugh Wheeler", "1970s", "English"]},
    { musical : "A Night with Janis Joplin", category : ["Janis Joplin", "2010s", "English"]},
    { musical : "A Strange Loop", category : ["Michael R Jackson", "2020s", "English"]},

    { musical : "Cabaret", category : ["John Kander", "Fred Ebb", "Joe Masteroff", "1960s", "English"]},
    { musical : "Chicago", category : ["John Kander", "Fred Ebb", "Bob Fosse", "1970s", "English"]},
    { musical : "Come From Away", category : ["Irene Sankoff", "David Hein", "2010s", "English"]},
    { musical : "Company", category : ["Stephen Sondheim", "George Furth", "1970s", "English"]},
    { musical : "Evita", category : ["Andrew Lloyd Webber", "Tim Rice", "1970s", "English"]},

    { musical : "Follies", category : ["Stephen Sondheim", "James Goldman", "1970s", "English"]},
    { musical : "Gypsy", category : ["Jules Styne", "Stephen Sondheim", "Arthur Laurents", "1950s", "English"]},
    { musical : "Hadestown", category : ["Anais Mitchell", "2010s", "English"]},
    { musical : "Hairspray", category : ["Marc Shaiman", "Scott Wittman","2000s", "English"]},
    { musical : "Hamilton", category : ["Lin-Manuel Miranda", "2010s", "English"]},
    { musical : "Hello Dolly", category : ["Jerry Herman", "Michael Stewart", "1960s", "English"]},    
    ];
// Below is the function that processes the interests given
function process(){
let recommendations = [];
//let cat1 = document.getElementById("cat1").value;
//let cat2 = document.getElementById("cat2").value;
//let cat3 = document.getElementById("cat3").value;
function displayInput() {
    // Get the value of the input field
    var musical1 = document.getElementById("musical1").value;
    var musical2 = document.getElementById("musical2").value;
    var musical3 = document.getElementById("musical3").value;
}
    let dataE = []
       dataE.push(musical1);
       dataE.push(musical2);
       dataE.push(musical3);
       
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
