const apikey = "594249d28be6426b817a234aa0001e72";
const blogContainer = document.getElementById("blog-container");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");


async function SearchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles
    }
    catch(error){
        console.error("Error searching Random News",error);
        return[];
    }
}
searchButton.addEventListener("click", async () => {
    const querry  = searchInput.value.trim();
    if(querry !== ""){
        try{
            const articles = await fetchewsQuerry(querry);
        }
        catch(error){
            console.log("Error searching from the query", error);
        }
    }
})

(async () => {
    try{
       const articles  = await SearchRandomNews();
       displayBlogs(articles);
        
       } 
       catch(error){
        console.error("Error fetching Random News",error);
       }
    })();

function displayBlogs(articles){
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        const textTracated  = article.title.length > 30 ? article.title.slice(0,30) + '.....' : article.title;
        title.textContent = textTracated;
        const description = document.createElement("p");
        // const descTrancated = (article.description.length > 120 ? article.description.slice(0,120) + '.....' : article.description):'';
                const descTruncated = article.description
                  ? article.description.length > 120
                    ? article.description.slice(0, 120) + "....."
                    : article.description
                  : "";

        description.textContent = descTruncated;
        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener('click', () => {
            window.open(article.url, "_blank");
        })
        blogContainer.appendChild(blogCard)
    });
}