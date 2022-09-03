const blogs = [
  {
    img: "../imgs/2.png",
    id: "02",
    title: `Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.`,
    discription: `Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight`,
  },
  {
    img: "../imgs/3.png",
    id: "03",
    title: `Biden Pledges 2 Nearly $3 Billion To Ukraine In Largest U.S.`,
    discription: `Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight`,
  },
  {
    img: "../imgs/1.png",
    id: "01",
    title: `Biden Pledges 3 Nearly $3 Billion To Ukraine In Largest U.S.`,
    discription: `Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight`,
  },
];

const displayBLog = () => {
  const blogsContainer = document.getElementById("blogs-container");
  blogs.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("col-md-4");
    blogDiv.innerHTML = `
    <div class="card"> 
        <img src="${blog.img}" class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title">${blog.title}</h5>
        <h5 class="">ID No. ${blog.id}</h5>
        <p class="card-text">${blog.discription}</p>
        <a href="#" class="btn btn-primary">Details</a>
        </div>
    </div>
    `;
    blogsContainer.appendChild(blogDiv);
  });
};

displayBLog();
