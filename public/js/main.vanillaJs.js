// DOM Manipulation -> Vanilla JS

function fillMoviesTbodyVanillaJs(data) {
  const _moviesTbody = moviesTbody;
  let tbody = "";
  data.forEach((element) => {
    tbody += `
    <tr>
        <td>${element["id"]}</td>
        <td>${element["name"]}</td>
        <td>${element["synopsis"]}</td>
        <td>${element["genre_id"]}</td>
        <td>
            <button class="btn__add" onClick="createMoviesVanillaJs">Add</button>
            <button class="btn__delete" onClick="deleteMoviesVanillaJs(this)">Delete</button>
            <button class="btn__edit" onClick="updateMoviesVanillaJs">Edit</button>
        </td>
    </tr>`;
  });
  _moviesTbody.innerHTML = tbody;
}

function fillGenresTbodyVanillaJs(data) {
  const _genresTbody = genresTbody;
  let tbody = "";
  data.forEach((element) => {
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
}

/* ------------------------------------------------- */

function showMessageResponseAfterDeleteVanillaJs(data) {
  alert(data["message"]);
  getMoviesVanillaJs();
}
