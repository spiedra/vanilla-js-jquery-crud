/* --------------- GET --------------------- */

const getMoviesVanillaJs = () => {
  return fetch("https://lavarel-rest-ful-api.vercel.app/public/api/movies", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

/* --------------- GET BY ID --------------------- */

const getMoviesVanillaJsById = (movieId) => {
  fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" + movieId,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

/* --------------- CREAT / POST --------------------- */

const createMoviesVanillaJs = (data) => {
  fetch("https://lavarel-rest-ful-api.vercel.app/public/api/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      synopsis: data.synopsis,
      genre_id: data.genreId,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

/* --------------- UPDATE / PUT --------------------- */

const updateMoviesVanillaJs = (data) => {
  fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" + data.id,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        synopsis: data.synopsis,
        genre_id: data.genreId,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error("Error:", error));
};

/* --------------- Delete --------------------- */

const deleteMoviesVanillaJs = (movieId) => {
  fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" + movieId,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
};
