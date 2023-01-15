const movies = require("./data.js");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const directors = array.map(movie => movie.director);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 const moviesDirector = array.filter(movies => movies.director === director);
 return moviesDirector;
}
 
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  
    // 1. Filtra las películas por el director dado
    const filmsByDirector = movies.filter(movie => movie.director === director);
  
    // 2. Calcula la suma de las calificaciones de las películas
    const sumOfRatings = filmsByDirector.reduce((acc, movie) => acc + movie.score, 0);  

    // 3. Calcula el promedio de las calificaciones de las películas
    const averageRating = (sumOfRatings / filmsByDirector.length);

    // 4. Redondear el promedio a 2 decimales
    const roundedRating = Math.round(averageRating * 100) / 100;

    // 5. Devolver el promedio
    return roundedRating;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {

    // Utilizar map para extraer solo los títulos de las películas 
    const moviesTitles = movies.map(movie => movie.title);

    // Ordenar las películas alfabéticamente por título
    const sortedMovies = moviesTitles.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
  
    // Devolver las primeras 20 películas
    return sortedMovies.slice(0, 20);
}


// Exercise 5: Order by year, ascending
function orderByYear(movies) {

    const moviesByYear = movies.slice();

    moviesByYear.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return moviesByYear;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
 
  // 1. Filtra las películas por el genero dado
  const newArray = array.filter(movie => movie.genre == genre);

  // 3. Calcula la suma de las calificaciones de las películas
  const sumOfRatings = newArray.reduce(function (acc, movie){
      if (movie.score == NaN){
        movie.score = 0
      } else movie.score == movie.score;
      return acc + movie.score;
      },0) 
      console.log(sumOfRatings);

  // 4. Calcula el promedio de las calificaciones de las películas
  const averageRating = (sumOfRatings / newArray.length);
  console.log(newArray.length);

  // 5. Redondear el promedio a 2 decimales
  const roundedRating = Math.round(averageRating * 100) / 100;

  // 6. Devolver el promedio
  return roundedRating;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  return movies.map(movie => {
    // Obtenemos la propiedad de duración de la película actual
    const duration = movie.duration;
    let hours = 0;
    let minutes = 0;

    // Comprueba si la cadena de duración incluye el carácter 'h'
    if (duration.includes("h")) {
        // Si lo hace, analiza las horas de la cadena
        hours = parseInt(duration.split('h')[0]);
        // Comprueba si la cadena de duración incluye el carácter 'min'
        if (duration.includes("min")) {
            // Si lo hace, analiza los minutos de la cadena
            minutes = parseInt(duration.split('min')[0].split(' ')[1]);
        }
    } else {
        // Si la cadena de duración no incluye 'h' o 'min',
        // asume que la duración está en horas y la analiza como un entero
        hours = parseInt(duration);
    }
    // Calcula la duración total en minutos multiplicando las horas por 60
    // y agregando los minutos
    const totalMinutes = (hours * 60) + minutes;

    // Devuelve un nuevo objeto con todas las mismas propiedades que la película original
    // excepto la propiedad de duración, que se reemplaza con los minutos totales
    return {...movie, duration: totalMinutes};
    });
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
