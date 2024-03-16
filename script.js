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
       displayBlogs(articles);
        
       } 
       catch(error){
        console.error("Error fetching Random News",error);
       }
    }

function displayBlogs(articles){
    blogContainer.innerHTML = "";
    articles.forEach((articles) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = "article.urltoImage";
        img.alt = "article.title";
        const title = document.createElement("h2");
        title.textContent = articles.title;
        const description = document.createElement("p");
        description.textContent = articles.description;
        blogCard.appendChild(description);
        blogCard.appendChild(h2)
        blogCard.appendChild(title)
        blogContainer.appendChild(blogCard)
    });
}