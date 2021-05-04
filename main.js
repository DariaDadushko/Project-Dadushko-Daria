const filmTitle = [
  "The Shawshank Redemption",
  "Schindler's List",
  "Fight Club",
  "Interstellar",
  "Eternal Sunshine of the Spotless Mind",
  "12 Years a Slave",
];

const filmPlot = [
  "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
  "An insomniac unnamed narrator needs a fantasy to escape from his deadly boring life, he tries joining a cancer support group however the only thing they do in the group is cry into each others chest, but then he is on a plane on his way back from what a viewer would assume is a business trip our unnamed narrator encounters Tyler Durden, a soap selling bad-ass who happens to run a secret fight club in the diner parking lot with his friend who follows 8 simple rules set out by Tyler, our unnamed narrator of course is taken into this scheme ran by Tyler.",
  "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
  "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
];

const filmPoster = [
  "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR89,0,630,1200_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/515qyYBSIFL._AC_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/5190cUTcbZL._AC_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81kz06oSUeL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/51dPIsyVaxL._AC_.jpg",
  "https://m.media-amazon.com/images/I/61QFAKXbb5L._AC_SY879_.jpg",
];

const filmDirector = [
  "Frank Darabont",
  "Steven Spielberg",
  "David Fincher",
  "Christopher Nolan",
  "Michel Gondry",
  "Steve McQueen",
];

const titleLength = filmTitle.length;

function generateRandomNumber(filmAmount) {
  return Math.floor(Math.random() * filmAmount);
}

function generateRandomRating() {
  return Math.floor(Math.random() * 10) + parseInt(Math.random() * 10) / 10;
}

function generateRandomReleseDate() {
  const start = Date.UTC(1980, 0, 0);
  const now = Date.now();
  const RandomDate = Math.round(Math.random() * (now - start) + start);
  return new Intl.DateTimeFormat().format(RandomDate);
}

function generateRandomBoxOffice(minBoxOffice, maxBoxOffice) {
  const filmBoxOffice = Math.floor(
    Math.random() * (maxBoxOffice - minBoxOffice) + minBoxOffice
  );
  const filmBoxOfficeFormated = filmBoxOffice.toLocaleString();
  return `$ ${filmBoxOfficeFormated}`;
}

function generateMockObjectsArray(amountOfFilms) {
  let arrayOfIndexes = [];
  while (arrayOfIndexes.length < amountOfFilms) {
    let randomIndex = Math.floor(Math.random() * amountOfFilms);
    if (arrayOfIndexes.indexOf(randomIndex) === -1) {
      arrayOfIndexes.push(randomIndex);
    }
  }
  let arrayOfFilms = arrayOfIndexes.map((index) => {
    const filmCard = {
      title: filmTitle[index],
      releseDate: generateRandomReleseDate(),
      plot: filmPlot[index],
      poster: filmPoster[index],
      boxOffice: generateRandomBoxOffice(100000, 500000000),
      rating: generateRandomRating(),
      director: filmDirector[index],
    };

    return filmCard;
  });
  return arrayOfFilms;
}

generateMockObjectsArray(titleLength);
