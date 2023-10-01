const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", retrieveData);

async function retrieveData() {
  let response = await fetch(
    "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
  );
  let movies = await response.json();

  const movieNameInput = document.getElementById("movieNameInput").value;
  const yearLaunchedInput = document.getElementById("yearLaunchedInput").value;

  // Apply the filter if a year is specified
  if (yearLaunchedInput) {
    movies = movies.filter((movie) => {
      return parseInt(movie.Year) >= parseInt(yearLaunchedInput);
    });
  }

  const moviedata = document.getElementById("moviedata");
  moviedata.innerHTML = movies
    .map((movie) => {
      return `<tr>
        <td>${movie.Title}</td>
        <td>${movie.Year}</td>
      </tr>`;
    })
    .join("");
}
