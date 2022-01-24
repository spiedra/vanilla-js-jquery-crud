/*
  JavaScript Variables:
    * var: globally-scoped variable | can be Reassigned | can be Redeclare
    * let: cannot be Redeclared | must be Declared before use | has Block Scope
    * const: cannot be Redeclared | cannot be Reassigned | has Block Scope
  Docs: https://www.w3schools.com/js/js_variables.asp 
*/
// Callback function: www.freecodecamp.org/news/what-is-a-callback-function-in-javascript/
// DOM Manipulation -> JQuery

function fillMoviesTbodyJquery() {
  const moviesTbody = $("#moviesTbody");
  moviesTbody.empty();

  getMoviesJquery(function (response) {
    response.forEach((element) => {
      moviesTbody.append(
        $("<tr>")
          .append($("<td>").append(element["id"]))
          .append($("<td>").append(element["name"]))
          .append($("<td>").append(element["synopsis"]))
          .append($("<td>").append(element["genre_id"]))
          .append(
            $("<td>").append(
              $(
                "<button class='btn btn-primary btn-sm my-1 my-xl-0' data-bs-toggle='modal' data-bs-target='#editModal'  onClick='deleteMoviesJquery(this)'>"
              ).append("Edit"),
              $(
                "<button class='btn btn-danger btn-sm my-1 my-xl-0' data-bs-toggle='modal' data-bs-target='#deleteModal' onClick='updateMoviesJquery(this)'>"
              ).append("Delete")
            )
          )
      );
    });
  });
}

function fillGenresTbodyJquery() {
  const moviesTbody = $("#genresTbody");
  moviesTbody.empty();

  getGenresJquery(function (response) {
    response.forEach((element) => {
      var elementId = element["id"];
      moviesTbody.append(
        $("<tr>")
          .append($("<td>").append(elementId))
          .append($("<td>").append(element["name"]))
          .append(
            $("<td>").append(
              $(
                "<button class='btn btn-primary btn-sm my-1 my-xl-0' data-bs-toggle='modal' data-bs-target='#editModal' onClick='updateMoviesJquery(this)'>"
              ).append("Edit")
            )
          )
      );
    });
  });
}

/* ------------------------------------------------- */

function showMessageResponseAfterDeleteJquery(response) {
  alert(response["message"]);
  getMoviesJquery();
}

fillMoviesTbodyJquery();
fillGenresTbodyJquery();
