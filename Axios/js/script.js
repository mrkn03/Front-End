// 1 - Instalacao
console.log("---------- Instalação ----------");
console.log(axios);

// 2 - Primeira request
console.log("---------- Primeira request ----------");

const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      //   4 - Definindo headers
      {
        headers: {
          "Content-Type": "application/json",
          custom: "header",
        },
      }
    );
    console.log(response);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

getData();

// 3 - Imprimindo dados da API
console.log("---------- Imprimindo dados da API ----------");
const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await getData();

  console.log(data);

  data.forEach((user) => {
    const div = document.createElement("div");

    const nameElement = document.createElement("h2");

    nameElement.textContent = user.name;

    div.appendChild(nameElement);

    const emailElement = document.createElement("p");

    emailElement.textContent = user.email;

    div.appendChild(emailElement);

    container.appendChild(div);
  });
};

printData();

// 5 - Requisicoes Post
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1,
  });
});
