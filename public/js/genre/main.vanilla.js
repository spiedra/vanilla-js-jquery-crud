// DOM Manipulation -> Vanilla JS

/*
  Differences between forEach() and map() methods:
    * https://www.geeksforgeeks.org/difference-between-foreach-and-map-loop-in-javascript/
*/

/* ------------------------- common ---------------------------- */

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
                <button class='btn btn-primary btn-sm my-1 my-xl-0' data-bs-toggle='modal' data-bs-target='#editModal' onClick="putGenreDataInEditModal(this)">Edit</button>
            </td>
        </tr>`;
    });
    _genresTbody.innerHTML = tbody;
  });
};

/* ------------------------- Add genre ------------------------- */

const addGenre = () => {
  const genreName = $("#inputNameAddModal").val();

  createGenresVanillaJs(genreName).then((response) => {
    fillGenresTbodyVanillaJs();
    $("#addModal").modal("hide");
    createModalResponse(response["message"]);
  });
};

/* ------------------------- Edit genre ------------------------- */

const putGenreDataInEditModal = (btnContext) => {
  const row = btnContext.parentNode.parentNode;

  $("#inputIdEditModal").val(row.cells[0].textContent);
  $("#inputNameEditModal").val(row.cells[1].textContent);
};

const editGenre = () => {
  const data = {
    genreId: $("#inputIdEditModal").val(),
    name: $("#inputNameEditModal").val(),
  };

  updateGenresVanillaJs(data).then((response) => {
    fillGenresTbodyVanillaJs();
    $("#editModal").modal("hide");
    createModalResponse(response["message"]);
  });
};

/* ------------------------- Search genre ------------------------- */

const searchGenre = () => {
  const _genresTbody = genresTbody;
  let tbody = "";
  const inputId = $("#inputIdSearchModal").val();

  getGenresVanillaJsById(inputId).then((response) => {
    $("#searchModal").modal("hide");
    tbody += `
         <tr>
             <td>${response["id"]}</td>
             <td>${response["name"]}</td>
             <td>
                 <button class='btn btn-primary btn-sm my-1 my-xl-0' data-bs-toggle='modal' data-bs-target='#editModal' onClick="putGenreDataInEditModal(this)">Edit</button>
             </td>
         </tr>`;
    _genresTbody.innerHTML = tbody;
  });
};

fillGenresTbodyVanillaJs();
