/*
  JavaScript Variables:
    * var: globally-scoped variable | can be Reassigned | can be Redeclare
    * let: cannot be Redeclared | must be Declared before use | has Block Scope
    * const: cannot be Redeclared | cannot be Reassigned | has Block Scope
  Docs: https://www.w3schools.com/js/js_variables.asp 
*/
// Callback function: www.freecodecamp.org/news/what-is-a-callback-function-in-javascript/
// DOM Manipulation -> JQuery

var movieIdDelete;

//

const buildMovieTbodyJquery = (genres, element) => {
  $("#moviesTbody").append(
    $("<tr>")
      .append($("<td>").append(element["id"]))
      .append($("<td>").append(element["name"]))
      .append($("<td>").append(element["synopsis"]))
      .append(
        $("<td>").append(
          `${genres
            .map((genre) => {
              if (element["genre_id"] === genre["id"]) return genre["name"];
            })
            .join("")}`
        )
      )
      .append(
        $("<td>").append(
          $(
            "<button class='btn btn-primary btn-sm my-1 my-xl-0 mx-1' data-bs-toggle='modal' data-bs-target='#editModal'  onClick='putMovieDataInAddModal(this)'>"
          ).append("Edit"),
          $(
            "<button class='btn btn-danger btn-sm my-1 my-xl-0' data-bs-toggle='modal' data-bs-target='#deleteModal' onClick='putMovieDataInDeleteModal(this)'>"
          ).append("Delete")
        )
      )
  );
};

//

async function fillMoviesTbodyJquery() {
  $("#moviesTbody").empty();

  const genres = await getGenresJquery2().then((response) => {
    return response;
  });

  getMoviesJquery(function (response) {
    response.forEach((element) => {
      buildMovieTbodyJquery(genres, element);
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

/* ------------------ Modal ------------------------ */

// Add

const putGenresInAddModal = () => {
  const selectGenre = $("#selectGenreAddModal");

  getGenresJquery(function (response) {
    selectGenre.empty();
    selectGenre.append($("<option disabled selected>").append("Choose"));

    response.forEach((element) => {
      selectGenre.append(
        $("<option id='" + element["id"] + "'>").append(element["name"])
      );
    });
  });
};

// Find: https://api.jquery.com/find/
const addMovieJquery = () => {
  const data = {
    name: $("#inputNameAddModal").val(),
    synopsis: $("#txtAreaSynopsisAddModal").val(),
    genreId: $("#selectGenreAddModal").find("option:selected").attr("id"),
  };

  createMoviesJquery(data, function (response) {
    fillMoviesTbodyJquery();
    $("#addModal").modal("hide");
    createModalResponse(response["message:"]);
  });
};

// Edit

const putMovieDataInAddModal = (btnContext) => {
  const movieDataArray = $(btnContext).closest("tr").children();

  // Method #1

  $("#inputIdEditModal").val($(movieDataArray[0]).text());
  $("#inputNameEditModal").val($(movieDataArray[1]).text());
  $("#txtAreaSynopsisEditModal").val($(movieDataArray[2]).text());
  putGenresInEditModal($(movieDataArray[3]).text());

  // Method #2

  /*
    .eq(): https://api.jquery.com/eq/
    .find(): https://api.jquery.com/find/#find-selector
    .closest(): https://api.jquery.com/closest/#closest-selector-context

    $(btnContext).closest("tr").find("td").eq(0).text();
  */
};

const putGenresInEditModal = (currentGenre) => {
  const selectGenre = $("#selectGenreEditModal");

  getGenresJquery(function (response) {
    selectGenre.empty();

    response.forEach((element) => {
      if (element["name"] === currentGenre) {
        selectGenre.append(
          $("<option id='" + element["id"] + "' selected>").append(
            element["name"]
          )
        );
      }
      selectGenre.append(
        $("<option id='" + element["id"] + "'>").append(element["name"])
      );
    });
  });
};

const editMovie = () => {
  data = {
    id: $("#inputIdEditModal").val(),
    name: $("#inputNameEditModal").val(),
    synopsis: $("#txtAreaSynopsisEditModal").val(),
    genreId: $("#selectGenreEditModal").find("option:selected").attr("id"),
  };

  updateMoviesJquery(data, (response) => {
    fillMoviesTbodyJquery();
    $("#editModal").modal("hide");
    createModalResponse(response["message"]);
  });
};

// Delete

const putMovieDataInDeleteModal = (btnContext) => {
  // save the last movie clicked
  movieIdDelete = $(btnContext).closest("tr").find("td").eq(0).text();

  const modalHeader = $("#modalHeader");
  const modalBody = $("#modalBody");

  modalHeader.empty();
  modalBody.empty();

  modalHeader
    .append(
      $("<h5>")
        .attr({
          class: "modal-title",
        })
        .append("Are you sure to delete this movie?")
    )
    .append(
      $(
        '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">'
      )
    );

  modalBody.append($("<p>This movie will be delete forever</p>"));
};

const removeMovie = () => {
  deleteMoviesJquery(movieIdDelete, (response) => {
    fillMoviesTbodyJquery();
    $("#deleteModal").modal("hide");
    createModalResponse(response["message"]);
  });
};

// Search

const searchMovieById = async () => {
  const movieId = $("#inputIdSerachModal").val();
  $("#moviesTbody").empty();

  const genres = await getGenresJquery2().then((response) => {
    return response;
  });

  getMoviesJqueryById(movieId, (response) => {
    $("#searchModal").modal("hide");
    buildMovieTbodyJquery(genres, response);
  });
};

// Refresh

const refreshPage = () => {
  location.reload();
};

/* ------------------------------------------------- */

fillMoviesTbodyJquery();
