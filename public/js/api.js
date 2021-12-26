// AJAX -> jQuery

/*
  Docs: https://www.w3schools.com/jquery/ajax_ajax.asp
*/

// GET

const getMoviesJquery = () => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/movies",
    type: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  });
};

const getGenresJquery = () => {
  $.ajax({
    url: "https://lavarel-rest-ful-api.vercel.app/public/api/genres",
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
      "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" +
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
      "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" +
      1 /* add some id */,
    type: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  });
};

// UPDATE

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
    dataType: "text",
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
    dataType: "text",
    success: function (response) {
      console.log(response);
    },
  });
};

// DELETE

// -----------------------------------------------------------------------------------------

// AJX -> Vanilla JS

// GET

const getMoviesVanillaJs = () => {
  fetch("https://lavarel-rest-ful-api.vercel.app/public/api/movies", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

const getGenresVanillaJs = () => {
  fetch("https://lavarel-rest-ful-api.vercel.app/public/api/genres", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

// GET BY ID

const getMoviesVanillaJsById = () => {
  fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" +
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
    "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" +
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

// UPDATE

const updateMoviesVanillaJs = () => {
  fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" +
      1 /* add some id*/,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Juan Carloss",
        synopsis: "Very good",
        genre_id: 2,
      }),
    }
  )
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

const updateGenresVanillaJs = () => {
  fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" +
      1 /* add some id*/,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Love",
      }),
    }
  )
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

// -----------------------------------------------------------------------------------------

// Request

/* --------------- GET --------------------- */

// getMoviesJquery();
// getGenresJquery();
// getMoviesVanillaJs();
// getGenresVanillaJs();

/* --------------- GET BY ID --------------------- */

// getMoviesJqueryById();
// getGenresJqueryById();
// getMoviesVanillaJsById();
// getGenresVanillaJsById();

/* --------------- UPDATE / PUT --------------------- */

// updateMoviesJquery();
// updateGenresJquery();
// updateMoviesVanillaJs();
// updateGenresVanillaJs();
