const movies = [
    {
      title: "The Matrix",
      genre: "Science Fiction",
      rating: 8.7,
      duration: "2h 16min"
    },
    {
      title: "The Godfather",
      genre: "Crime",
      rating: 9.2,
      duration: "2h 55min"
    },
    {
      title: "Forrest Gump",
      genre: "Drama",
      rating: 8.8,
      duration: "2h 22min"
    },
    {
      title: "Jurassic Park",
      genre: "Science Fiction",
      rating: 8.1,
      duration: "2h 7min"
    },
    {
      title: "The Dark Knight",
      genre: "Action",
      rating: 9.0,
      duration: "2h 32min"
    }
  ];
  
  
  function displayMovies() {
    const moviesList = document.getElementById("movies");
    movies.forEach(movie => {
      const li = document.createElement("li");
      li.innerText = `${movie.title} (${movie.genre}) - Rating: ${movie.rating} - Duration: ${movie.duration}`;
      moviesList.appendChild(li);
    });
  }
  
  
  window.onload = displayMovies;