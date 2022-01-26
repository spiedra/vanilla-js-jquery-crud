// AJAX -> jQuery

/*
  Docs: https://www.w3schools.com/jquery/ajax_ajax.asp
  ---
  * Una función que pasa como arguemento a otra función, se llama callback function
*/

/* --------------- GET --------------------- */

const getMoviesJquery = (callback) => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/movies",
    type: "GET",
    dataType: "json",
    success: function (response) {
      callback(response);
    },
  });
};

/* --------------- GET BY ID --------------------- */

const getMoviesJqueryById = (movieId, callback) => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" + movieId,
    type: "GET",
    dataType: "json",
    success: function (response) {
      callback(response);
    },
  });
};

/* --------------- CREATE / POST -------------------- */

const createMoviesJquery = (data, callback) => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/movies",
    type: "POST",
    data: {
      name: data.name,
      synopsis: data.synopsis,
      genre_id: data.genreId,
    },
    dataType: "json",
    success: function (response) {
      callback(response);
    },
  });
};

/* --------------- UPDATE / PUT --------------------- */

const updateMoviesJquery = (data, callback) => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" + data.id,
    type: "PUT",
    data: {
      name: data.name,
      synopsis: data.synopsis,
      genre_id: data.genreId,
    },
    dataType: "json",
    success: function (response) {
      callback(response);
    },
  });
};

/* --------------- Delete --------------------- */

const deleteMoviesJquery = (movieId, callback) => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" + movieId,
    type: "DELETE",
    dataType: "json",
    success: function (response) {
      callback(response);
    },
  });
};
