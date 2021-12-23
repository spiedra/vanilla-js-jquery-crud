// AJAX -> jQuery

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

// PUT

// UPDATE

// DELETE

// -----------------------------------------------------------------------------------

// AJX -> Vanilla JS

// -----------------------------------------------------------------------------------

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

// Request

// getMoviesJquery();
// getGenresJquery();
getMoviesVanillaJs();
getGenresVanillaJs();
