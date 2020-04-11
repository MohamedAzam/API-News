 var posts;
 var category="general";
 var countries="eg";
 getPosts(category,countries);
var navLinks=document.getElementsByClassName("nav-link");
var navCoun=document.getElementsByClassName("dropdown-item");
for(var i=0; i<navLinks.length; i++)
{
    navLinks[i].addEventListener("click",function(e){
        category=e.target.innerHTML;
        console.log(category)
        getPosts(category,countries);
    }  )
    navCoun[i].addEventListener("click",function(e){
        countries=e.target.innerHTML;
        console.log(category,countries);
        getPosts(category,countries);
    }  )
}
function getPosts(category,countries){
   
    var req=new XMLHttpRequest();
    var urlLink="https://newsapi.org/v2/top-headlines?country="+countries+"&category="+category+"&apiKey=0d92309ae1b847c8a64cd477200977b2";
    req.open("GET",urlLink);
    req.onreadystatechange=function()
    {
        if(req.readyState==4 && req.status==200)
        {
            posts=JSON.parse(req.response);
            posts=posts.articles;
            displayData();
        }
    }
    req.send();

}
function displayData(){
    var rows="";
    for(var i=0; i<posts.length; i++)
    {
        rows+=`  <div class="col-lg-3 mb-5">
        <div>
            <a class="text-decoration-none" href="">
                <img class="img-fluid" src="`+posts[i].urlToImage+`">
                <h5 class="text-danger">`+posts[i].title+`</h5>
                <p>`+posts[i].description+`</p>
                <h6 class="text-muted">`+posts[i].publishedAt+`</h6>

            </a>
        </div>

    </div>
`;
    }
    document.getElementById("row").innerHTML=rows;
}

