// DOM Manipulation -> Vanilla JS

/*
  Differences between forEach() and map() methods:
    * https://www.geeksforgeeks.org/difference-between-foreach-and-map-loop-in-javascript/
*/

const fillGenresTbodyVanillaJs = () => {
  const _genresTbody = genresTbody;
  let tbody = "";
  getGenresVanillaJs().then((response) => {
    response.forEach((element) => {
      tbody += `
        <tr>
            <td>${element["id"]}</td>
            <td>${element["name"]}</td>
            <td>
                <button class='btn btn-primary btn-sm my-1 my-xl-0' data-bs-toggle='modal' data-bs-target='#editModal' onClick="updateMoviesVanillaJs">Edit</button>
            </td>
        </tr>`;
    });
    _genresTbody.innerHTML = tbody;
  });
};
