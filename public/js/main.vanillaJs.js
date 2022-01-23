// DOM Manipulation -> Vanilla JS

/*
  Differences between forEach() and map() methods:
    * https://www.geeksforgeeks.org/difference-between-foreach-and-map-loop-in-javascript/
*/

const fillMoviesTbodyVanillaJs = async () => {
  const _moviesTbody = moviesTbody;
  let tbody = "";

  const genres = await getGenresVanillaJs().then((response) => {
    return response;
  });

  getMoviesVanillaJs().then((response) => {
    response.forEach((element) => {
      tbody += `
      <tr>
          <td>${element["id"]}</td>
          <td>${element["name"]}</td>
          <td>${element["synopsis"]}</td>
          <td>${genres
            .map((genre) => {
              if (element["genre_id"] === genre["id"]) return genre["name"];
            })
            .join("")}</td>
          <td>
              <button class="btn__add" onClick="createMoviesVanillaJs">Add</button>
              <button class="btn__delete" onClick="deleteMoviesVanillaJs(this)">Delete</button>
              <button class="btn__edit" onClick="updateMoviesVanillaJs">Edit</button>
          </td>
      </tr>`;
    });
    _moviesTbody.innerHTML = tbody;
  });
};

function fillGenresTbodyVanillaJs() {
  const _genresTbody = genresTbody;
  let tbody = "";
  getGenresVanillaJs().then((response) => {
    response.forEach((element) => {
      tbody += `
      <tr>
          <td>${element["id"]}</td>
          <td>${element["name"]}</td>
          <td>
              <button class="btn__add" onClick="createMoviesVanillaJs">Add</button>
              <button class="btn__edit" onClick="updateMoviesVanillaJs">Edit</button>
          </td>
      </tr>`;
    });
    _genresTbody.innerHTML = tbody;
  });
}

/* ------------------------------------------------- */

function showMessageResponseAfterDeleteVanillaJs(data) {
  alert(data["message"]);
  getMoviesVanillaJs();
}

/* -------------------- Requests ---------------------- */

fillMoviesTbodyVanillaJs();
fillGenresTbodyVanillaJs();
