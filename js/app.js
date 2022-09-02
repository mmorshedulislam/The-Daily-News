const loadNews = async () => {
  const url = `https://openapi.programming-hero.com/api/news/category/01`;
  const res = await fetch(url);
  const data = await res.json();
  displayNews(data.data);
};

const displayNews = (allNews) => {
  allNews.forEach((news) => {
    const newsContainer = document.getElementById("newsContainer");
    allNews.forEach((news) => {
      console.log(news);
      const newsDiv = document.createElement("div");
      newsDiv.classList.add("row", "news-item", "my-3");
      newsDiv.innerHTML = `
      <div class="col-md-3 d-flex align-items-center">
        <div class="news-thumbnail">
            <img src="${news.thumbnail_url}" class="img-fluid mb-3 w-100" alt="" />
        </div>
        </div>
        <div class="col-md-9 align-items-center d-flex">
        <div>
            <!-- POST DESCRIPTION -->
            <div class="news-description">
            <h3 class="fw-bold my-3">
                ${news.title}
            </h3>
            <p>
               ${news.details}
            </p>
            </div>
            <div class="news-info container d-flex align-items-center justify-content-between">
            <div class="author-details d-flex align-items-center">
                <img src="${news.author.img}" style="width: 50px; border-radius: 50%" class="img-fluid me-3" alt="" />
                <div class="author-name">
                <span class="fw-bold">${news.author.name}</span> <br />
                <span>${news.author.published_date}</span>
                </div>
            </div>
            <!-- VIEWS -->
            <div class="fw-bold fs-5">
                <p>
                <span><i class="fa-regular fa-eye"></i></span>
                <span>${news.total_view}</span>
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
                <a href="#"><i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            </div>
        </div>
        </div>

      `;
      newsContainer.appendChild(newsDiv);
    });
  });
};

loadNews();
