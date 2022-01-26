// AJAX -> jQuery

/*
  Docs: https://www.w3schools.com/jquery/ajax_ajax.asp
  ---
  * Una función que pasa como arguemento a otra función, se llama callback function
*/

/* --------------- GET --------------------- */

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

const getGenresJqueryById = (genreId, callback) => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" + genreId,
    type: "GET",
    dataType: "json",
    success: function (response) {
      callback(response);
    },
  });
};

/* --------------- CREATE / POST -------------------- */

const createGenresJquery = (name, callback) => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/genres",
    type: "POST",
    data: {
      name: name,
    },
    dataType: "json",
    success: function (response) {
      callback(response);
    },
  });
};

/* --------------- UPDATE / PUT --------------------- */

const updateGenresJquery = (data, callback) => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" + data.id,
    type: "PUT",
    data: {
      name: data.name,
    },
    dataType: "json",
    success: function (response) {
      callback(response);
    },
  });
};
