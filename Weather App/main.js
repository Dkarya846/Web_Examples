var weather;
var image = document.getElementById("image");
var country_name = document.getElementById("country");
var humidity = document.getElementById("hum-num");
var city = document.getElementById('city');
var temp = document.getElementById('temp-digit')
var wtype = document.getElementById("wtype");
var pressure = document.getElementById("pdigit");
var wspeed = document.getElementById("wspeed");
var longnitude = document.getElementById("long");
var latitude = document.getElementById("lati");
var maxtemp = document.getElementById("maxdigit");
var mintemp = document.getElementById("mindigit");
function getData() {
    city = document.getElementById("inputs").value;
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=47657b66139fc2cb733e7566ec239fd1",loadData);
}
function loadData(data) {
    weather=data;
    document.getElementById('city').innerHTML = weather.name;
    temp.innerHTML=weather.main.temp+'°';
    country_name.innerHTML = weather.sys.country;     
    wtype.innerText=weather.weather[0].main;
    wtype1 = wtype.innerHTML+' weather';
    pressure.innerHTML=weather.main.pressure;
    wspeed.innerHTML=weather.wind.speed+'km/h';
    humidity.innerHTML=weather.main.humidity+'%';
    maxtemp.innerHTML=weather.main.temp_min;
    mintemp.innerHTML=weather.main.temp_max;
    longnitude.innerHTML=weather.coord.lon;
    latitude.innerHTML = weather.coord.lat;
    $.getJSON("https://pixabay.com/api/?key=11426083-33b8a0299db8cd8f3c2c7761b&q="+wtype1+"&image_type=photo",loadPhoto);
}
function loadPhoto(data){
    sources=data;
    image.style.backgroundImage="url("+sources.hits[2].largeImageURL+")"
    image.style.backgroundSize="cover";
    document.getElementById('flag').setAttribute('src',"https://www.countryflags.io/"+weather.sys.country+"/flat/64.png");
}
function loadDialog(bool){
    if(bool){   
        getData();
        var get = document.getElementById("d1")
        var get1 = document.getElementById("part1")
        var get2 = document.getElementById("part2")
        get1.style.display="none";
        get2.style.display="none";
        get.style.display="block";
        flags=document.getElementById("flag");
        loadData();flags.
        loadPhoto();
    }
    else{
        
    var get = document.getElementById("d1")
    var get1 = document.getElementById("part1")
    var get2 = document.getElementById("part2")
    get1.style.display="block";
    get2.style.display="block";
    get.style.display="none";
    }
}