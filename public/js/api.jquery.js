// AJAX -> jQuery

/*
  Docs: https://www.w3schools.com/jquery/ajax_ajax.asp
*/

/* --------------- GET --------------------- */

const getMoviesJquery = () => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/movies",
    type: "GET",
    dataType: "json",
    success: function (response) {
      fillMoviesTbodyJquery(response);
    },
  });
};

const getGenresJquery = () => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/genres",
    type: "GET",
    dataType: "json",
    success: function (response) {
      fillGenresTbodyJquery(response);
    },
  });
};

/* --------------- GET BY ID --------------------- */

const getMoviesJqueryById = () => {
  $.ajax({
    url:
      "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" +
      35 /* add some id */,
    type: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  });
};

const getGenresJqueryById = () => {
  $.ajax({
    url:
      "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" +
      35 /* add some id */,
    type: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  });
};

/* --------------- CREATE / POST -------------------- */

const createMoviesJquery = () => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/movies",
    type: "POST",
    data: {
      name: "Spieder-Men 2",
      synopsis: "Good!",
      genre_id: 1,
    },
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  });
};

const createGenresJquery = () => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/genres",
    type: "POST",
    data: {
      name: "Action 9",
    },
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  });
};

/* --------------- UPDATE / PUT --------------------- */

const updateMoviesJquery = () => {
  $.ajax({
    url:
      "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" +
      1 /* add some id */,
    type: "PUT",
    data: {
      name: "Spieder-Men",
      synopsis: "Good!",
      genre_id: 1,
    },
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  });
};

const updateGenresJquery = () => {
  $.ajax({
    url:
      "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" +
      1 /* add some id */,
    type: "PUT",
    data: {
      name: "LoveJquery",
    },
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  });
};

/* --------------- Delete --------------------- */

const deleteMoviesJquery = (btnContext) => {
  const movieId = $(btnContext).closest("tr").find("td").eq(0).text();
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" + movieId,
    type: "DELETE",
    dataType: "json",
    success: function (response) {
      showMessageResponseAfterDelete(response);
    },
  });
};

// -----------------------------------------------------------------------------------------

// Requests

/* --------------- GET --------------------- */

// getMoviesJquery();
// getGenresJquery();

/* --------------- GET BY ID --------------------- */

// getMoviesJqueryById();
// getGenresJqueryById();

/* --------------- CREAT / POST --------------------- */

// createMoviesJquery();
// createGenresJquery();

/* --------------- UPDATE / PUT --------------------- */

// updateMoviesJquery();
// updateGenresJquery();

/* --------------- Delete --------------------- */

// deleteMoviesJquery();
