let articleDiv = document.getElementById("wrapper");

function createBodyElement(body) {
  const bodyElement = document.createElement("strong");
  bodyElement.classList.add("body");
  bodyElement.textContent = body;
  return bodyElement;
}

function createTitleElement(title) {
  const titleElement = document.createElement("div");
  titleElement.classList.add("title");
  titleElement.textContent = title;
  return titleElement;
}

function createIdElement(userId, id) {
  const idElement = document.createElement("div");
  idElement.classList.add("id");
  idElement.textContent = `User ID: ${userId} Post ID: ${id}`;
  return idElement;
}

async function getUser() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  response.data.forEach((el) => {
    const titleElement = createTitleElement(el.title);
    const bodyElement = createBodyElement(el.body);
    const idElement = createIdElement(el.userId, el.id);
    const posts = document.createElement("div");
    posts.classList.add("posts");

    posts.appendChild(idElement);
    posts.appendChild(bodyElement);
    posts.appendChild(titleElement);

    articleDiv.appendChild(posts);
  });
}

getUser();
