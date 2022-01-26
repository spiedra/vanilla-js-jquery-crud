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
const addMovie = () => {
  const data = {
    name: $("#inputNameAddModal").val(),
    synopsis: $("#txtAreaSynopsisAddModal").val(),
    genreId: $("#selectGenreAddModal").find("option:selected").attr("id"),
  };

  createMoviesJquery(data, function (response) {
    $('#addModal').modal('hide');
    createModalResponse(response["message:"]);
  });
};
