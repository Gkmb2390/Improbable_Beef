console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

var top5cities = sortedCities.slice(0,5)

var topFiveCityNames = top5cities.map(city=> city.City)

var topFiveCityGrowths = top5cities.map(city => parseInt(city.Increase_from_2016));

