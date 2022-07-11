var weather = {
  temp: 20,
  humidity: 80,
};

console.log(weather);
console.log(weather.temp);
console.log(weather.humidity);

weather.windSpeed = 4;
console.log(weather.windSpeed);

console.log(weather["temp"]);
console.log(weather["humidity"]);
console.log(weather["windSpeed"]);

var forecast = {
  monday: 16,
  tuesday: 18,
  wednesday: 20,
  thursday: 24,
  friday: 19,
  saturday: 30,
  sunday: 21,
};

console.log(forecast);

let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true,
};

console.log(paris["temperature"]);

let sydney = {
  temperature: 20,
};
console.log(sydney["temperature"]);

let cities = [{ name: "Kanberra" }, { name: "Melburn" }, { name: "Pert" }];
console.log(cities[0].name);
console.log(cities[1].name);
console.log(cities[2].name);

let otherCities = [
  {
    name: "Kyiv",
    country: "Ukraine",
    language: "Ukrainian",
    temperature: 25,
    capitalCity: true,
  },
  {
    name: "Geneva",
    country: "Switzerland ",
    language: "French",
    temperature: 20,
    capitalCity: false,
  },
  {
    name: "Berlin",
    country: "Germany",
    language: "Deutsch",
    temperature: 18,
    capitalCity: true,
  },
];

console.log(otherCities[0].temperature);
console.log(otherCities[1].temperature);
console.log(otherCities[2].temperature);
