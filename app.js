
// this is  the dataset, you can add as many categories as you want
var interests = [       
    // This is the datases. 
    // Each interest is linked to categories
    // The script determines what interest a person could have in other categories that are linked to the interests the person chose
  { interest : "13", category : ["Jason Robert Brown", "Dan Elish", "Robert Horn", "2000s", "English", "Comedy", "Indiana", "teens", "school", "bullying", "friendship", "betrayal", "jealousy", "first kiss", "middle school", "Jewish"]},
{ interest : "1776", category : ["Sherman Edwards", "Peter Stone", "1960s", "English", "Tony Best Musical", "Drama", "Comedy", "Historical", "Biographical", "Philadelphia", "revolution", "war", "independence", "history", "politics", "founding fathers"]},
{ interest : "110 in the Shade", category : ["Harvey Schmidt", "Tom Jones", "N Richard Nash", "1960s", "English", "Drama", "Comedy", "Romance", "small town", "love", "family", "transformation", "dreams", "rain"]},
{ interest : "1600 Pennsylvania Avenue", category : ["Leonard Bernstein", "Alan Jay Lerner", "1970s", "English", "Historical", "Biographical", "history", "presidents", "flop"]},
{ interest : "42nd Street", category : ["Harry Warren", "Al Dubin", "Johnny Mercer", "Michael Stewart", "1930s", "1980s", "English", "Comedy", "Tony Best Musical", "New York City", "show business", "backstage musical", "movie adaptation", "small town", "triple threat", "tap dance", "Mark Bramble"]},
{ interest : "70 Girls 70", category : ["John Kander", "Fred Ebb", "1970s", "English", "Comedy", "New York City", "seniors", "show business"]},

{ interest : "9 to 5", category : ["Dolly Parton", "Patricia Resnick", "2000s", "English", "Comedy", "America", "country", "women", "work", "sexism", "revenge", "kidnap", "empowerment", "secretary"]},
{ interest : "A Little Night Music", category : ["Stephen Sondheim", "Hugh Wheeler", "1970s", "English", "Comedy", "Romance", "Sweden", "aristocracy", "affair", "unrequited love", "Tony Best Musical"]},
{ interest : "Cabaret", category : ["John Kander", "Fred Ebb", "Joe Masteroff", "1960s", "English", "Drama", "Tony Best Musical", "Germany", "WWII", "Nazi", "night club", "anti-semitism", "abortion", "Jewish"]},
{ interest : "Chicago", category : ["John Kander", "Fred Ebb","Bob Fosse", "1970s", "English", "Dark Comedy", "Chicago", "murder", "jail", "vaudeville", "women", "justice", "law", "trial", "dance"]},
{ interest : "Come From Away", category : ["Irene Sankoff", "David Hein", "2010s", "English", "Drama", "Historical", "Biographical", "Canada", "true story", "history", "charity", "visitors", "kindness"]},
{ interest : "Company", category : ["Stephen Sondheim", "George Furth", "1970s", "English", "Comedy", "Dark Comedy", "Romance", "New York City", "relationship", "marriage", "bachelor", "dating", "romance", "love", "friendship", "vulnerability", "vignettes", "concept musiscal", "Tony Best Musical"]},

{ interest : "Evita", category : ["Andrew Lloyd Webber", "Tim Rice", "1970s", "English", "Tony Best Musical", "Drama", "Historical", "Biographical", "period", "Argentina", "Latin America", "power", "ruthless", "seductive", "politics", "rock opera"]},
{ interest : "Follies", category : ["Stephen Sondheim", "James Goldman", "1970s", "English", "Drama", "nostalgia", "backstage musical", "vaudeville", "aging", "regret", "marriage", "infidelity"]},
{ interest : "Gypsy", category : ["Stephen Sondheim", "Jules Styne", "Arthur Laurents", "1950s", "English", "Historical", "Biographical", "family", "backstage musical", "power", "stripping", "Golden Age musical"]},
{ interest : "Hadestown", category : ["Anais Mitchell", "2010s", "English", "Drama", "mythology", "god", "love", "romance", "musician", "artist", "marriage", "Tony Best Musical", "Greek chorus", "narrator", "relationship", "betrayal"]},
{ interest : "Hairspray", category : ["Marc Shaiman", "Scott Wittman", "Mark ODonnell", "2000s", "English", "Comedy", "racism", "Baltimore", "diversity", "drag", "social justice", "plus-sized"]},
{ interest : "Hamilton", category : ["Lin-Manuel Miranda", "2010s", "English", "Historical", "Biographical", "revolution", "founding fathers", "history", "ambition", "Pulitzer Prize", "Tony Best Musical", "politics", "New York City"]},

{ interest : "Hello Dolly", category : ["Jerry Herman", "Michael Stewart", "1960s", "English", "Comedy", "matchmaking", "love", "Jewish", "widow", "adventure", "New York City", "Gilded Age", "Golden Age", "Tony Best Musical"]},
{ interest : "In the Heights", category : ["Lin-Manuel Miranda", "Quiara Alegria Hudes", "2000s", "English", "Drama", "Comedy", "New York City", "hispanic", "Latin", "community", "lottery", "neighborhood", "friendship", "love", "parenting", "Tony Best Musical"]},
{ interest : "Into the Woods", category : ["Stephen Sondheim", "James Lapine", "1980s", "English", "Fantasy", "Fairy Tale", "Brothers Grimm", "witch", "magic", "folktale", "Cinderella", "community", "wish", "consequences"]},
{ interest : "Jesus Christ Superstar", category : ["Tim Rice", "Andrew Lloyd Webber", "1970s", "English", "Drama", "Historical", "Biographical", "Israel", "Bible", "religion", "rock opera"]},
{ interest : "Les Miserables", category : ["Claude-Michel Schonberg", "Alain Boublil", "1980s", "English", "French", "Drama", "Historical", "Biographical", "revolution", "France", "Paris", "justice", "suicide", "dream", "sacrifice", "love", "redemption", "faith", "forgiveness", "Tony Best Musical"]},
{ interest : "Little Shop of Horrors", category : ["Alan Menken", "Howard Ashman", "1980s", "English", "Comedy", "Satire", "romance", "tragedy", "Faust", "puppetry", "rock", "Motown", "Greek chorus"]},


{ interest : "Next to Normal", category : ["Tom Kitt", "Brian Yorkey", "2000s", "English", "Drama", "pop", "rock", "mental health", "depression", "psychiatry", "Pulitzer Prize", "high school"]},
{ interest : "Phantom of the Opera", category : ["Andrew Lloyd Webber", "Charles Hart", "Richard Stillgoe", "1980s", "English", "Drama", "Romance", "romance", "spectacle", "supernatural", "thriller", "tragedy", "opera", "Tony Best Musical"]},
{ interest : "Schmicago", category : ["Cinco Paul", "Ken Daurio", "2020s", "English", "Comedy", "parody", "trapped", "murder", "orphans", "hippies", "night club"]},
{ interest : "Schmigadoon", category : ["Cinco Paul", "Ken Daurio", "2020s", "English", "Comedy", "parody", "Golden Age", "trapped"]},
{ interest : "Spring Awakening", category : ["Duncan Sheik","Steven Sater", "2000s", "English", "Drama", "sex", "teenagers", "Germany", "rebellion", "abortion", "suicide", "death", "grief", "sexuality", "rock", "Tony Best Musical"]},
{ interest : "Sunday in the Park with George", category : ["Stephen Sondheim","James Lapine", "1980s", "English", "Drama", "Paris", "art", "painting", "history", "purpose", "love", "heartbreak", "beauty", "children", "family", "Pulitzer Prize"]},

{ interest : "Sweeney Todd: The Demon Barber of Fleet Street", category : ["Stephen Sondheim", "Hugh Wheeler", "1970s", "English", "Drama", "Dark Comedy", "Horror", "dark", "bloody", "violent", "melodrama", "revenge", "murder", "death", "Tony Best Musical"]},
{ interest : "The 25th Annual Putnam County Spelling Bee", category : ["William Finn", "Rachel Sheinkin", "2000s", "English", "Comedy", "kids", "school", "parents", "spelling", "dreams", "learning", "competition", "middle school"]},
{ interest : "The Last 5 Years", category : ["Jason Robert Brown", "2000s", "English", "Drama", "Romance", "infidelity", "betrayal", "love", "marriage", "weird timeline"]},
{ interest : "Tick Tick Boom", category : ["Jonathan Larson", "2000s", "English", "Drama", "Biography", "autobiographical", "AIDS", "mortality", "aging", "transition", "artist"]},
{ interest : "West Side Story", category : ["Leonard Bernstein","Stephen Sondheim","Arthur Laurents", "1950s", "English", "Drama", "Shakespeare", "New York City", "gangs", "violence", "death", "murder", "love", "romance", "forbidden love", "Golden Age", "Latin"]},
];// Below is the function that processes the interests given
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
