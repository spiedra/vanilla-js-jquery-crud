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

const getGenresVanillaJsById = (genreId) => {
  fetch(
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

const createGenresVanillaJs = (name) => {
  fetch("https://lavarel-rest-ful-api.vercel.app/public/api/genres", {
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

const updateGenresVanillaJs = (data) => {
  fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" + data.id,
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
