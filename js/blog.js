const loadCategories = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
  } catch (error) {
    console.log(error);
  }
};

const displayCategories = async (categories) => {
  const ulContainer = document.getElementById("categories-items");
  categories.forEach((category) => {
    const categoryItem = document.createElement("li");
    categoryItem.classList.add("nav-item");
    categoryItem.innerHTML = `
    <a
    onclick="loadNews('${category.category_id}'); toggleLoader('start')"
    class="nav-link active"
    aria-current="page"
    href="#">${category.category_name}</a>
    `;
    ulContainer.appendChild(categoryItem);
  });
};

loadCategories();

const blogs = [
  {
    img: "../imgs/let-const.jpg",
    fact: "Let - Const",
    title: `Difference between let and const? `,
    discription: `let is block scoped
    A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
    let can be updated but not re-declared.
    Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. So while this will work:
    const declarations are block scoped
    Like let declarations, const declarations can only be accessed within the block they were declared.
    const cannot be updated or re-declared
    This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:
    `,
  },
  {
    img: "../imgs/filter-find.jpg",
    fact: "forEach - map - filter - find",
    title: `What are the major difference between forEach, map, filter, find?`,
    discription: `Differences Between the map and forEach Methods
    The main difference between map and forEach is that the map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn’t return anything.
    
    You can use the forEach method to mutate the source array, but this isn't really the way it's meant to be used. Instead, it's great for when you need to do some action with each element of the array.
    
    The find() method is used to find all the descendant elements of the selected element. It finds the element in the DOM tree by traversing through the root to leaf.
    
    The filter() method is used to filters all the elements and returns the element that matches and the element that do not match are removed.`,
  },
  {
    img: "../imgs/function.png",
    fact: "Regualar - Arrow Function",
    title: `Difference between regular functions and arrow functions?`,
    discription: `This article discusses the major differences between the regular functions and the arrow functions.

    Arrow functions – a new feature introduced in ES6 – enable writing concise functions in JavaScript. While both regular and arrow functions work in a similar manner, yet there are certain interesting differences between them, as discussed below.
    
    Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible. Thus, we will get a run-time error on trying to construct a non-constructible arrow functions using the new keyword.`,
  },
];

const displayBLog = () => {
  const blogsContainer = document.getElementById("blogs-container");
  // blogs.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("col-md-4");
    blogDiv.innerHTML = `
    <div class="card"> 
        <img src="${blog.img}" class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title fw-bold">${blog.title}</h5>
        <h5 class="my-3">Fact: ${blog.fact}</h5>
        <p class="card-text">${blog.discription.slice(0, 350)} ...</p>
        </div>
    </div>
    `;
    blogsContainer.appendChild(blogDiv);
  });
};

displayBLog();
