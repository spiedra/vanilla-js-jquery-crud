/*
  JavaScript Variables:
    * var: globally-scoped variable | can be Reassigned | can be Redeclare
    * let: cannot be Redeclared | must be Declared before use | has Block Scope
    * const: cannot be Redeclared | cannot be Reassigned | has Block Scope
  Docs: https://www.w3schools.com/js/js_variables.asp 
*/

// DOM Manipulation -> JQuery

function fillMoviesTbodyJquery(reponse) {
  const moviesTbody = $("#moviesTbody");
  moviesTbody.empty();

  reponse.forEach((element) => {
    moviesTbody.append(
      $("<tr>")
        .append($("<td>").append(element["id"]))
        .append($("<td>").append(element["name"]))
        .append($("<td>").append(element["synopsis"]))
        .append($("<td>").append(element["genre_id"]))
        .append(
          $("<td>").append(
            $(
              "<button class='btn__add' type='button' onClick='createMoviesJquery(this)'>"
            ).append("Add"),
            $(
              "<button class='btn__delete' type='button' onClick='deleteMoviesJquery(this)'>"
            ).append("Delete"),
            $(
              "<button class='btn__edit' type='button' onClick='updateMoviesJquery(this)'>"
            ).append("Edit")
          )
        )
    );
  });
}

function fillGenresTbodyJquery(reponse) {
  const moviesTbody = $("#genresTbody");
  moviesTbody.empty();

  reponse.forEach((element) => {
    var elementId = element["id"];
    moviesTbody.append(
      $("<tr>")
        .append($("<td>").append(elementId))
        .append($("<td>").append(element["name"]))
        .append(
          $("<td>").append(
            $(
              "<button class='btn__add' type='button' onClick='createMoviesJquery(this)'>"
            ).append("Add"),
            $(
              "<button class='btn__edit' type='button' onClick='updateMoviesJquery(this)'>"
            ).append("Edit")
          )
        )
    );
  });
}

/* ------------------------------------------------- */

function showMessageResponseAfterDeleteJquery(response) {
  alert(response["message"]);
  getMoviesJquery();
}
