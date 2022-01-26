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

const getGenresJquery = (callback) => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/genres",
    type: "GET",
    dataType: "json",
    success: function (response) {
      callback(response);
    },
  });
};

const getGenresJquery2 = () => {
  return $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/genres",
    type: "GET",
    dataType: "json",
  });
};

/* --------------- GET BY ID --------------------- */

const getMoviesJqueryById = (movieId, callback) => {
  $.ajax({
    url:
      "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" +
      movieId,
    type: "GET",
    dataType: "json",
    success: function (response) {
      callback(response);
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

const deleteMoviesJquery = (movieId, callback) => {
  $.ajax({
    url:
      "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" +
      movieId,
    type: "DELETE",
    dataType: "json",
    success: function (response) {
      callback(response);
    },
  });
};
