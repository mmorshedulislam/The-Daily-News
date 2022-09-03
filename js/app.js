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

const loadNews = async (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
  } catch (error) {
    console.log(error);
  }
};

const displayNews = (allNews) => {
  // Number of find news by category
  const newsCount = document.getElementById("news-count");
  newsCount.innerText = `${allNews.length ? allNews.length : "No News Found"}`;
  const newsContainer = document.getElementById("newsContainer");

  // Sorting by Most views
  const sortByViews = () => {
    allNews.sort((a, b) =>
      a.total_view < b.total_view ? 1 : b.total_view < a.total_view ? -1 : 0
    );
  };
  sortByViews();
  newsContainer.textContent = ``;
  allNews.forEach((news) => {
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("row", "news-item", "my-3");
    newsDiv.innerHTML = `
      <div class="col-md-3 d-flex align-items-center">
        <div class="news-thumbnail">
            <img src="${
              news.thumbnail_url
            }" class="img-fluid mb-3 w-100" alt="" />
        </div>
      </div>
      <div class="col-md-9 align-items-center d-flex">
        <div>
            <!-- POST DESCRIPTION -->
            <div class="news-description">
            <h3 class="fw-bold my-3" onclick="loadNewsDetail('${
              news._id
            }')" type="button"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#newsDetails">
                ${news.title}
            </h3>
            <p>
               ${news.details.substring(0, 350)} ...
            </p>
            </div>
            <div class="news-info container d-flex align-items-center justify-content-between">
            <div class="author-details d-flex align-items-center">
                <img src="${
                  news.author.img
                }" style="width: 50px; border-radius: 50%" class="img-fluid me-3" alt="" />
                <div class="author-name">
                <span class="fw-bold">${
                  news.author.name ? news.author.name : "No Author Found"
                }</span> <br />
                <span>${news.author.published_date}</span>
                </div>
            </div>
            <!-- VIEWS -->
            <div class="fw-bold fs-5">
                <p>
                <span><i class="fa-regular fa-eye"></i></span>
                <span>${news.total_view ? news.total_view : "No Views"}</span>
                </p>
            </div>
            <!-- RATING -->
            <div class="rating fs-5">
                <span><i class="fa-regular fa-star"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
            </div>
            <!-- DETAIL ICON -->
            <div class="detail-icon">
                <a onclick="loadNewsDetail('${news._id}')"
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#newsDetails"
              >
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            </div>
        </div>
      </div>

      `;
    newsContainer.appendChild(newsDiv);
    toggleLoader("stop");
  });
};

const loader = document.getElementById("loader");
const toggleLoader = (isLoading) => {
  if (isLoading === "start") {
    loader.classList.remove("d-none");
  } else if (isLoading === "stop") {
    loader.classList.add("d-none");
  }
};

const loadNewsDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/news/${id}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetail(data.data[0]);
  } catch (error) {
    console.log(error);
  }
};

const displayNewsDetail = (newsDetail) => {
  const modalTitle = document.getElementById("newsDetailsLabel");
  modalTitle.innerText = `${newsDetail.title}`;

  const modalBody = document.getElementById("news-detail-body");
  modalBody.innerHTML = `
  <div class="d-flex align-items-center">
    <div class="news-thumbnail w-100">
        <img src="${
          newsDetail.thumbnail_url
        }" class="img-fluid mb-3 w-100" alt="" />
    </div>
  </div>

  <div class="align-items-center d-flex">
        <div>
            <!-- POST DESCRIPTION -->
            <div class="news-description">
            <h3 class="fw-bold my-3">
                ${newsDetail.title}
            </h3>
            <p>
               ${newsDetail.details.slice(0, 450)}
            </p>
            </div>
        <div class="news-info d-flex align-items-center justify-content-between">
            <div class="author-details d-flex align-items-center">
                <img src="${
                  newsDetail.author.img
                }" style="width: 50px; border-radius: 50%" class="img-fluid me-3" alt="" />
                <div class="author-name">
                <span class="fw-bold">${
                  newsDetail.author.name
                    ? newsDetail.author.name
                    : "No Author Found"
                }</span> <br />
                <span>${newsDetail.author.published_date}</span>
                </div>
            </div>
            <!-- VIEWS -->
            <div class="fw-bold fs-5 d-flex align-items-center">
                <p>
                <span><i class="fa-regular fa-eye"></i></span>
                <span>${
                  newsDetail.total_view ? newsDetail.total_view : "No Views"
                }</span>
                </p>
            </div>
            <!-- RATING -->
            <div class="rating fs-5">
                <span><i class="fa-regular fa-star"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
            </div>
          </div>
        </div>
      </div>
  
  `;
};

loadNews("01");
