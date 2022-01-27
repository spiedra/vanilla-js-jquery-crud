/* --------------- GET --------------------- */

const getGenresVanillaJs = async () => {
  return fetch("https://lavarel-rest-ful-api.vercel.app/public/api/genres", {
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

const getGenresVanillaJsById = async (genreId) => {
  return fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" + genreId,
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

const createGenresVanillaJs = async (name) => {
  return fetch("https://lavarel-rest-ful-api.vercel.app/public/api/genres", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
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

const updateGenresVanillaJs = async (data) => {
  return fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" + data.genreId,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
};
