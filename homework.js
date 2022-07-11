let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

let city = prompt("Enter a city");
city = city.trim;
city = city.toLocaleLowerCase();
city = city.toLocaleUpperCase();

if (city === "Paris") {
  Math.round(weather[paris].temp);
  alert(
    `It is currently ${weather[paris].temp} °C in Paris with a humidity of 80%`
  );
} else {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
  );
}

weather.forEach(function (city) {
  alert(`Temperature on ${city} is 18 degrees`);
});
