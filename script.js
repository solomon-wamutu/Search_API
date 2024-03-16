const apikey = "594249d28be6426b817a234aa0001e72";
const blogContainer = document.getElementById("blog-container");

function SearchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=tesla&pageSize=10&apikey =${apikey}`;
    }
    catch(error){
        console.error("Error searching Random News",error);
        return[];
    }
}