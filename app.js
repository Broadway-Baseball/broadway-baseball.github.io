
// this is  the dataset, you can add as many categories as you want
var interests = [       
    // This is the datases. 
    // Each interest is linked to categories
    // The script determines what interest a person could have in other categories that are linked to the interests the person chose
   { interest : "13", category : ["Jason Robert Brown", "Dan Elish"]},
    { interest : "1776", category : ["Sherman Edwards", "Peter Stone"]},
    { interest : "110 in the Shade", category : ["Harvey Schmidt", "Tom Jones", "N Richard Nash"]},
    { interest : "1600 Pennsylvania Avenue", category : ["Leonard Bernstein", "Alan Jay Lerner"]},
    { interest : "42nd Street", category : ["Harry Warren", "Al Dubin", "Johnny Mercer", "Michael Stewart"]},
    { interest : "70 Girls 70", category : ["John Kander", "Fred Ebb"]},

     
    { interest : "9 to 5", category : ["Dolly Parton", "Patricia Resnick"]},
    { interest : "A Little Night Music", category : ["Stephen Sondheim", "Hugh Wheeler"]},
    { interest : "Cabaret", category : ["John Kander", "Fred Ebb", "Joe Masteroff"]},
    { interest : "Chicago", category : ["John Kander", "Fred Ebb","Bob Fosse"]},
    { interest : "Come From Away", category : ["Irene Sankoff", "David Hein"]},
    { interest : "Company", category : ["Stephen Sondheim", "George Furth"]},
{ interest : "Evita", category : ["Andrew Lloyd Webber", "Tim Rice", "1970s", "English"]},
{ interest : "Follies", category : ["Stephen Sondheim", "James Goldman", "1970s", "English"]},
{ interest : "Gypsy", category : ["Stephen Sondheim", "Jules Styne", "Arthur Laurents", "1950s", "English"]},
{ interest : "Hadestown", category : ["Anais Mitchell", "2010s", "English"]},
{ interest : "Hairspray", category : ["Marc Shaiman", "Scott Wittman", "Mark ODonnell", "2000s", "English"]},
{ interest : "Hamilton", category : ["Lin-Manuel Miranda", "2010s", "English"]},

{ interest : "Hello Dolly", category : ["Jerry Herman", "Michael Stewart", "1960s", "English"]},
{ interest : "In the Heights", category : ["Lin-Manuel Miranda", "Quiara Alegria Hudes", "2000s", "English"]},
{ interest : "Into the Woods", category : ["Stephen Sondheim", "James Lapine", "1980s", "English"]},
{ interest : "Jesus Christ Superstar", category : ["Tim Rice", "Andrew Lloyd Webber", "1970s", "English"]},
{ interest : "Les Miserables", category : ["Claude-Michel Schonberg", "Alain Boublil", "1980s", "English", "French"]},
{ interest : "Little Shop of Horrors", category : ["Alan Menken", "Howard Ashman", "1980s", "English"]},


{ interest : "Next to Normal", category : ["Tom Kitt", "Brian Yorkey", "2000s", "English"]},
{ interest : "Phantom of the Opera", category : ["Andrew Lloyd Webber", "Charles Hart", "Richard Stillgoe", "1980s", "English"]},
{ interest : "Schmicago", category : ["Cinco Paul", "Ken Daurio", "2020s", "English"]},
{ interest : "Schmigadoon", category : ["Cinco Paul", "Ken Daurio", "2020s", "English"]},
{ interest : "Spring Awakening", category : ["Duncan Sheik","Steven Sater", "2000s", "English"]},
{ interest : "Sunday in the Park with George", category : ["Stephen Sondheim","James Lapine", "1980s", "English"]},

{ interest : "Sweeney Todd: The Demon Barber of Fleet Street", category : ["Stephen Sondheim", "Hugh Wheeler", "1970s", "English"]},
{ interest : "The 25th Annual Putnam County Spelling Bee", category : ["William Finn", "Rachel Sheinkin", "2000s", "English"]},
{ interest : "The Last 5 Years", category : ["Jason Robert Brown", "2000s", "English"]},
{ interest : "Tick Tick Boom", category : ["Jonathan Larson", "2000s", "English"]},
{ interest : "West Side Story", category : ["Leonard Bernstein","Stephen Sondheim","Arthur Laurents", "1950s", "English"]},
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
    interests.map(r=>{
        if(all === r.interest) categories=categories.concat(r.category);
    })
})
// You can check the categories which the interests a user selected belong to --
 // console.log(categories)
    
interests.map(all =>{
    categories.map(category =>{
        if(all.category.includes(category)&&recommendations.indexOf(all.interest)===-1)
            recommendations = recommendations.concat(all.interest)
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
