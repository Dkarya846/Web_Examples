var bool=true;
function showhidestanlee(a,b,c,d,e){//1
    var aboutit=document.getElementsByClassName(a);
    var movies = document.getElementsByClassName(b);
    var comics = document.getElementsByClassName(c);
    var personal_life = document.getElementsByClassName(d);
    var quotes = document.getElementsByClassName(e);
    document.body.style.backgroundImage="url('https://images.firstpost.com/wp-content/uploads/2018/02/stan-lee-int.jpg')";
    document.body.style.backgroundAttachment="fixed";
    document.body.style.backgroundSize="cover";
    if(bool)
    {
        
        for(var i=0;i<aboutit.length;i++)
            aboutit[i].style.display="block";
            bool=false;
    }
    else
    {
        for(var i=0;i<aboutit.length;i++)
            aboutit[i].style.display="none";
        document.body.style.backgroundImage="url('https://drive.google.com/uc?id=1kr8wQoNxaXkZlZPVAD2nI5R-uH4v3jY4')";
        document.body.style.backgroundAttachment="fixed";
        document.body.style.backgroundSize="cover";    
        bool=true;
    }
    for(var i=0;i<movies.length;i++)
    {
        movies[i].style.display="none";
    }
    for(var i=0;i<comics.length;i++)
    {
        comics[i].style.display="none";
    }
    for(var i=0;i<personal_life.length;i++)
    {
        personal_life[i].style.display="none";
    }
    for(var i=0;i<quotes.length;i++)
    {
        quotes[i].style.display="none";
    }
}
function showhidehome(a,b,c,d,e){//2
    var about = document.getElementsByClassName(a);
    var movies = document.getElementsByClassName(b);
    var comics = document.getElementsByClassName(c);
    var personal_life = document.getElementsByClassName(d);
    var quotes = document.getElementsByClassName(e);
    for(var i=0;i<about.length;i++)
    {
        about[i].style.display="none";
    }
    for(var i=0;i<movies.length;i++)
    {
        movies[i].style.display="none";
    }
    for(var i=0;i<comics.length;i++)
    {
        comics[i].style.display="none";
    }
    for(var i=0;i<personal_life.length;i++)
    {
        personal_life[i].style.display="none";
    }
    for(var i=0;i<quotes.length;i++)
    {
        quotes[i].style.display="none";
    }
    document.body.style.backgroundImage="url('https://drive.google.com/uc?id=1kr8wQoNxaXkZlZPVAD2nI5R-uH4v3jY4')";
    document.body.style.backgroundAttachment="fixed";
    document.body.style.backgroundSize="cover";    
}
function showhidemovies(a,b,c,d,e){//3
    var movies=document.getElementsByClassName(a);
    var aboutit=document.getElementsByClassName(b);
    var comics=document.getElementsByClassName(c);
    var personal_life=document.getElementsByClassName(d);
    var quotes = document.getElementsByClassName(e);
    document.body.style.backgroundImage="url('https://static.gamespot.com/uploads/scale_super/1562/15626911/3348445-0.jpg')";
    document.body.style.backgroundAttachment="fixed";
    document.body.style.backgroundSize="cover";
    if(bool)
    {
        for(var i=0;i<movies.length;i++)
            movies[i].style.display="block";
        bool=false;
    }
    else
    {
        for(var i=0;i<movies.length;i++)
            movies[i].style.display="none";
        document.body.style.backgroundImage="url('https://drive.google.com/uc?id=1kr8wQoNxaXkZlZPVAD2nI5R-uH4v3jY4')";
        document.body.style.backgroundAttachment="fixed";
        document.body.style.backgroundSize="cover";    
        bool=true;
    }
    for(var i=0;i<aboutit.length;i++)
    {
        aboutit[i].style.display="none";
    }
    for(var i=0;i<comics.length;i++)
    {
        comics[i].style.display="none";
    }
    for(var i=0;i<personal_life.length;i++)
    {
        personal_life[i].style.display="none";
    }
    for(var i=0;i<quotes.length;i++)
    {
        quotes[i].style.display="none";
    }
}
function showhidecomics(a,b,c,d,e) {//4showhidecomics('comics','about','Movies','personal_life','quotes')
    var comics = document.getElementsByClassName(a);
    var aboutit = document.getElementsByClassName(b);
    var movies = document.getElementsByClassName(c);
    var personal_life = document.getElementsByClassName(d);
    var quotes = document.getElementsByClassName(e);
    document.body.style.backgroundImage="url('https://www.thewrap.com/wp-content/uploads/2018/07/deadpool-2-stan-lee-cameo-wall-mural.jpg')";
    document.body.style.backgroundAttachment="fixed";
    document.body.style.backgroundSize="cover";  
    if(bool)
    {
        for(var i=0;i<comics.length;i++)
            comics[i].style.display="block";
        bool=false;
    }
    else
    {
        for(var i=0;i<comics.length;i++)
            comics[i].style.display="none";
        document.body.style.backgroundImage="url('https://drive.google.com/uc?id=1kr8wQoNxaXkZlZPVAD2nI5R-uH4v3jY4')";
        document.body.style.backgroundAttachment="fixed";
        document.body.style.backgroundSize="cover";    
        bool=true;
    }
    for(var i=0;i<aboutit.length;i++)
    {
        aboutit[i].style.display="none";
    }
    for(var i=0;i<personal_life.length;i++)
    {
        personal_life[i].style.display="none";
    }
    for(var i=0;i<quotes.length;i++)
    {
        quotes[i].style.display="none";
    }
    for(var i=0;i<movies.length;i++)
    {
        movies[i].style.display="none";
    }
}
function showhidepersonal_life(a,b,c,d,e) {//5 
    var personal_life = document.getElementsByClassName(a);
    var aboutit = document.getElementsByClassName(b);
    var movies = document.getElementsByClassName(c);
    var comics = document.getElementsByClassName(d);
    var quotes = document.getElementsByClassName(e);
    if(bool)
    {
        for(var i=0;i<personal_life.length;i++)
            personal_life[i].style.display="block";
        document.body.style.backgroundImage="url('http://www2.pictures.zimbio.com/gi/Stan+Lee+Premiere+Columbia+Pictures+Spider+OhGLhr6YOs_l.jpg')";
        document.body.style.backgroundAttachment="fixed";
        document.body.style.backgroundSize="cover";    
        bool=false;
    }
    else
    {
        for(var i=0;i<personal_life.length;i++)
            personal_life[i].style.display="none";
        document.body.style.backgroundImage="url('https://drive.google.com/uc?id=1kr8wQoNxaXkZlZPVAD2nI5R-uH4v3jY4')";
        document.body.style.backgroundAttachment="fixed";
        document.body.style.backgroundSize="cover";    
        bool=true;
    }
    for(var i=0;i<aboutit.length;i++)
    {
        aboutit[i].style.display="none";
    }
    for(var i=0;i<comics.length;i++)
    {
        comics[i].style.display="none";
    }
    for(var i=0;i<quotes.length;i++)
    {
        quotes[i].style.display="none";
    }
    for(var i=0;i<movies.length;i++)
    {
        movies[i].style.display="none";
    }
}
function showhidequotes(a,b,c,d,e) {   //6
    var quotes = document.getElementsByClassName(a);
    var aboutit = document.getElementsByClassName(b);
    var movies = document.getElementsByClassName(c);
    var comics = document.getElementsByClassName(d);
    var personal_life = document.getElementsByClassName(e);
    if(bool)
    {
        for(var i=0;i<quotes.length;i++)
            quotes[i].style.display="block";
        document.body.style.backgroundImage="url('https://www.incimages.com/uploaded_files/image/1940x900/feature-95-SLee-pan_771.jpg')";
        document.body.style.backgroundAttachment="fixed;";
        document.body.style.backgroundSize="cover";
        bool=false;
    }
    else
    {
        for(var i=0;i<quotes.length;i++)
            quotes[i].style.display="none";
        document.body.style.backgroundImage="url('https://drive.google.com/uc?id=1kr8wQoNxaXkZlZPVAD2nI5R-uH4v3jY4')";
        document.body.style.backgroundAttachment="fixed";
        document.body.style.backgroundSize="cover";    
        bool=true;
    }
    
    for(var i=0;i<aboutit.length;i++)
    {
        aboutit[i].style.display="none";
    }
    for(var i=0;i<comics.length;i++)
    {
        comics[i].style.display="none";
    }
    for(var i=0;i<personal_life.length;i++)
    {
        personal_life[i].style.display="none";
    }
    for(var i=0;i<movies.length;i++)
    {
        movies[i].style.display="none";
    }
}
function showhidestancomics(a,b) {
    var head = document.getElementsByClassName(a);  
    var mainhead = document.getElementsByClassName(b);
    if(bool)
    {
        for(var i=0;i<head.length;i++)
            {head[i].style.display="block";
            head[i].style.textAlign="center";}
        for(var i=0;i<mainhead.length;i++)
            mainhead[i].style.fontSize="30px";
        bool=false;
    }
    else
    {
        for(var i=0;i<head.length;i++)
            head[i].style.display="none";
        for(var i=0;i<mainhead.length;i++)
            mainhead[i].style.fontSize="175px";
        bool=true;
    }
}