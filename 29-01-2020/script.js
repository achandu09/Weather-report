async function myFunction(){
    var city1=document.getElementById("city").value;
    var url=`http://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=cebc5acc1d0c159e9a128ddfd26bc5a6&units=metric`;
    var data =await fetch(url);
    var result = await data.json();
    var temp1=result.main.temp;
    document.getElementById("temp").innerHTML=temp1;
    console.log(result.main.temp);
}

