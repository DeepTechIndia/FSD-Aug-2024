// fetch => HTTP => promise

// syntax

// fetch(url, [option])

/* fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));
 */
/* 
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
    // return response.text();
  })
  .then((data) => {
    console.log(typeof data);
  })
  .catch((err) => {
    console.log("Ther was a problem with the fetch operation", err);
  });
 */
/* 
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((product) => {
      console.log(
        `Title : ${product.title}, Price: ${product.price}, Category: ${product.category}`
      );
    })
  )
  .catch((error) => {
    console.log(error);
  }); */

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos) => {
    const completedTodos = todos.filter((todo) => todo.completed);
    const notCompletedTodos = todos.filter((todo) => !todo.completed);

    console.log("Completed Todos:");
    completedTodos.forEach((todo) => {
      console.log(`Title : ${todo.title}, UserID : ${todo.userId}`);
    });

    console.log("Not Completed Todos:");
    notCompletedTodos.forEach((todo) => {
      console.log(`Title : ${todo.title}, UserID : ${todo.userId}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
