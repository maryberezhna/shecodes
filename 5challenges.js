let country = "Guinea Bissau";
country = country.replace(" ", "-");
console.log(country);

let city = " Sydney   ";
city = city.trim();
console.log(city);

let place = "School";
place = place.toLocaleUpperCase();
console.log(place);

let attraction = "Opera House";
attraction = attraction.toLocaleLowerCase();
console.log(attraction);

let sentence = `I went to visit the ${attraction} in ${city}, right next to my ${place}. Now, I am getting ready for my trip to ${country} !`;
console.log(sentence);
