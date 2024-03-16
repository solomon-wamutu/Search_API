const apikey = "594249d28be6426b817a234aa0001e72";
const blogContainer = document.getElementById("blog-container");

async function SearchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=tesla&pageSize=10&apikey =${apikey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)

    }
    catch(error){
        console.error("Error searching Random News",error);
        return[];
    }
}

async () => {
    try{
       const articles  = await SearchRandomNews();
       console.log(articles);
        
       } 
       catch(error){
        console.error("Error fetching Random News",error);
       }
    }

