// AJAX -> jQuery

/*
  Docs: https://www.w3schools.com/jquery/ajax_ajax.asp
*/

// GET

const getMoviesJquery = () => {
  $.ajax({
    url: "https://muscid-buses.000webhostapp.com/lavarel-RESTful-api/public/api/movies",
    type: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  });
};

const getGenresJquery = () => {
  $.ajax({
    url: "https://muscid-buses.000webhostapp.com/lavarel-RESTful-api/public/api/genres",
    type: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  });
};

// GET BY ID

const getMoviesJqueryById = () => {
  $.ajax({
    url:
      "https://muscid-buses.000webhostapp.com/lavarel-RESTful-api/public/api/movies/" +
      1 /* add some id */,
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
      "https://muscid-buses.000webhostapp.com/lavarel-RESTful-api/public/api/genres/" +
      1 /* add some id */,
    type: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  });
};

// UPDATE

// DELETE

// -----------------------------------------------------------------------------------------

// AJX -> Vanilla JS

// GET

const getMoviesVanillaJs = () => {
  fetch(
    "https://muscid-buses.000webhostapp.com/lavarel-RESTful-api/public/api/movies",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

const getGenresVanillaJs = () => {
  fetch(
    "https://muscid-buses.000webhostapp.com/lavarel-RESTful-api/public/api/genres",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

// GET BY ID

const getMoviesVanillaJsById = () => {
  fetch(
    "https://muscid-buses.000webhostapp.com/lavarel-RESTful-api/public/api/movies/" +
      1 /* add some id */,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

const getGenresVanillaJsById = () => {
  fetch(
    "https://muscid-buses.000webhostapp.com/lavarel-RESTful-api/public/api/genres/" +
      1 /* add some id */,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

// -----------------------------------------------------------------------------------------

// Request

/* --------------- GET --------------------- */

// getMoviesJquery();
// getGenresJquery();
// getMoviesVanillaJs();
// getGenresVanillaJs();

/* --------------- GET BY ID --------------------- */

getMoviesJqueryById();
getGenresJqueryById();
getMoviesVanillaJsById();
getGenresVanillaJsById();

/* --------------- UPDATE / PUT --------------------- */
