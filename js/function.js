//  =================================================================================================================================
// Config ===========================================================================================================================
//  =================================================================================================================================

let api = "https://admin.giatrinh.com/graphql";
let limit = 5;

let currentPostCategory = "";
let currentPostPage = 1;
let totalPostCount = 0;
let totalPostPages = 0;
let limitPostPerPage = 6;

let tourListUrl = "http://localhost/giatrinh.com/tourList.php";
let tourDetailUrl = "http://localhost/giatrinh.com/tourDetail.php";

//  =================================================================================================================================
// Model ============================================================================================================================
//  =================================================================================================================================

class Tour {
  constructor(json) {
    this.id = json.id;
    this.title = json.title;
    this.duration = json.duration;
    this.description = json.description;
    this.groupSize = json.group_size;
    this.type = json.type;
    this.transportation = json.transportation;

    let date = new Date(json.date_created);

    // dateFormat

    this.date_created = date;

    this.price = new Intl.NumberFormat().format(json.price);

    this.type = json.type;

    this.review = json?.review_func?.count || 0;

    this.covers = [];
    let coverString = json.covers;
    if (coverString.length != 0) {
      for (var i = 0; i < coverString.length; i++) {
        let cover = coverString[i];
        let url = idToImg(cover.directus_files_id.id);
        this.covers.push(url);
      }
    } else {
      let url = idToImg("f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9");
      this.covers.push(url);
    }
  }
}

class Post {
  constructor(json) {
    this.id = json.id;
    this.author = json.author;
    this.category = json.category.title;
    this.content = json.content;
    this.title = json.title;
    this.short_description = json.short_description;
    this.date_created = new Date(json.date_created);
    this.cover = idToImg(
      json?.cover?.id || "f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9"
    );
  }
}

class PostCategory {
  constructor(json) {
    this.id = json.id;
    this.title = json.title;
    this.post_count = json.post.count;
  }
}

class ServicePlane {
  constructor(json) {
    this.title = json.title;
    this.content = json.content;
  }
}

//  =================================================================================================================================
// Presentor ========================================================================================================================
//  =================================================================================================================================
function idToImg(id) {
  return "https://admin.giatrinh.com/assets/" + id;
}

function tourOtoTourList(tours) {
  var html = ``;

  for (var i = 0; i < tours.length; i++) {
    let tour = tours[i];
    html = html + tourOtoTourHTML(tour);
  }
  return html;
}

function tourOtoTourHTML(tour) {
  var imgString = "";
  imgString =
    imgString +
    `<div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style="width: 250px;" role="group" aria-label="2 / 3">
                                  <img class="col-12" src="` +
    tour.covers[0] +
    `" alt="image">
                                </div>`;

  let html =
    `<div class="row y-gap-30">
                <div class="col-12">
                  <div class="border-top-light pt-30">
                    <div class="row x-gap-20 y-gap-20">
                      <div class="col-md-auto">
                        <div class="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                          <div class="cardImage__content">
                            ` +
    imgString +
    `
                          </div>

                        </div>

                      </div>

                      <div class="col-md">
                        <div class="row x-gap-10 items-center">
                          <div class="col-auto">
                            <p class="text-14 lh-14 mb-5">` +
    tour.type +
    `</p>
                          </div>
                          <div class="col-auto">
                            <div class="size-3 rounded-full bg-light-1 mb-5"></div>
                          </div>
                          <div class="col-auto">
                            <p class="text-14 lh-14 mb-5">Tiếng Trung</p>
                          </div>
                        </div>

                        <h3 class="text-18 lh-16 fw-500">` +
    tour.title +
    `</h3>
                        <p class="text-14 lh-14 mt-5">Trung Quốc</p>

                        <div class="text-14 lh-15 fw-500 mt-20">Thoi gian <span class="fw-600">` +
    tour.date_created +
    `</span></div>
                        <div class="text-14 fw-500 lh-15 mt-5">Giờ khởi hành <span class="fw-600 text-green-2">20 Tháng 8 2023</span></div>
                      </div>

                      <div class="col-md-auto text-right d-flex align-items-end flex-column md:text-left">

                        <!-- Content -->
                        <div class="text-14 lh-14 text-light-1">` +
    tour.review +
    ` đánh giá</div>

                        <!-- Button -->
                        <div class="mt-auto">
                          <div class="text-14 text-light-1 md:mt-20">Từ</div>
                          <div class="text-24 lh-12 fw-700 mt-5 text-blue-1">` +
    tour.price +
    `₫</div>
                          <a href="#" class="button -md -dark-1 bg-blue-1 text-white mt-24">
                            Xem chi tiết <div class="icon-arrow-top-right ml-15"></div>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
  return html;
}

function pageToTourList(page, totalPage) {
  var html = "";
  for (var i = 1; i <= totalPage; i++) {
    if (i == page) {
      html =
        html +
        `<div class="col-auto">
                      <button class="btn size-40 flex-center rounded-full bg-dark-1 text-white" onclick="getTours(` +
        i +
        `)" >` +
        i +
        `</button>
                    </div>`;
    } else {
      html =
        html +
        `<div class="col-auto">
                      <button class="btn size-40 flex-center rounded-full" onclick="getTours(` +
        i +
        `)" >` +
        i +
        `</button>
                    </div>`;
    }
  }
  return html;
}
//-POST LISTS' PRESENTORS
function postObjectPostList(posts) {
  let html = "";

  posts.forEach((post) => {
    html += postObjectToHtml(post);
  });
  return html;
}
function postObjectToHtml(post) {
  let html = "";
  let url = "/giatrinh.com/tourPost.php";
  return (html += `
  <div class="col-lg-4 col-sm-6">
        <a href="${url}?id=${post.id}" class="blogCard -type-1 d-block ">
            <div class="blogCard__image">
                <div class="ratio ratio-4:3 rounded-8">
                    <img class="img-ratio js-lazy loaded" src="${post.cover}" alt="image" data-ll-status="loaded">
                </div>
            </div>
            <div class="pt-20">
                <h4 class="text-dark-1 text-18 fw-500 line-clamp">${post.title}</h4>
                <p class="text-light-1 text-14 fw-500 line-clamp">${post.short_description}</p>
            </div>
        </a>
  </div>
  `);
}
// --tạo categories để lọc
function postCategoriesToHtml(categories) {
  let html = `<div class="col-auto">
                <button class="tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button
                ${
                  currentPostCategory == "" ? "is-tab-el-active" : ""
                }"  onclick="getPosts(1,'')">Tất cả</button>
            </div>`;
  categories
    .map((category) => {
      return (html += `<div class="col-auto">
                    <button
                      class="tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button
                      ${
                        category.title == currentPostCategory
                          ? "is-tab-el-active"
                          : ""
                      }
                      "
                      ${category?.posts_func?.count == 0 ? "disabled" : ""} 
                      onclick="getPosts(1,'${category.title}')"
                      >${category.title}</button>
               </div>`);
    })
    .join("");
  return html;
}
// --tạo nút phân trang
function postPagination(toTotalPage, category) {
  let html = "";
  for (let i = 1; i <= toTotalPage; i++) {
    if (i === currentPostPage) {
      html += `<div class="col-auto">
        <button class="size-40 flex-center rounded-full bg-dark-1 text-white" onclick="getPosts(${i},'${category}')">${i}</button>
      </div>`;
    } else {
      html += `<div class="col-auto">
          <button class="size-40 flex-center rounded-full"
          onclick="getPosts(${i},'${category}')">${i}</button>
        </div>`;
    }
  }
  return html;
}
// RELATED TOURS PRESENTORS
function createRelatedTourCard(tours, title) {
  let html = `<div class="row justify-center">
  <div class="col-auto">
    <div class="sectionTitle -md">
      <h2 class="sectionTitle__title">${title}</h2>
    </div>
  </div>
</div>

`;

  tours
    .map(function (tour) {
      html += `<div class="col-xl-3 col-lg-3 col-sm-6">

    <a href="${
      tourDetailUrl + `?id=` + tour.id
    }" class="tourCard -type-1 rounded-4 ">
      <!-- Image -->
      <div class="tourCard__image">
        <div class="cardImage ratio ratio-1:1">
          <div class="cardImage__content">
                <img class="img-h-full" src="${tour.covers[0]}">
          </div>
        </div>

      </div>
      <!-- Content -->
      <div class="tourCard__content mt-10">

        <h4 class="tourCard__title text-dark-1 text-18 lh-16 fw-500 line-clamp">
          <span>${tour.title}</span>
        </h4>
        <p class="text-light-1 lh-14 text-14 mt-5">Thời gian:
          ${tour.duration} ngày</p>

        <div class="row justify-between items-center pt-15">
          <div class="col-auto">
            <div class="text-14 text-light-1">
              <span class="fw-700 mt-20 text-20 text-blue-1">${
                tour.price
              }đ</span>
            </div>
          </div>
          <div class="col-auto">
            <div class="px-10 py-10 rounded-4 flex-center bg-blue-1">
              <span class="text-14 fw-600 text-white"> Xem tour </span>
            </div>
          </div>
        </div>
      </div>
    </a>

  </div>`;
    })
    .join("");

  return html;
}

//  =================================================================================================================================
let defaultHeaderImg =
  "https://images.unsplash.com/photo-1507431489734-ef0dbfbf88e1?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1472&amp;q=80";
function getHeader(headerImg, headerHref, headerAchor) {
  const headerImgEl = document.querySelector("#header_img");
  const headerAnchorEl = document.querySelector("#breadcrumb_anchor");

  headerImgEl.src =
    headerImg == null || undefined ? defaultHeaderImg : headerImg;
  headerAnchorEl.href = headerHref;
  headerAnchorEl.innerHTML = headerAchor;
}
// Controller Tour =======================================================================================================================
//  =================================================================================================================================

function searchTourByKey() {
  let value = document.getElementById("tour_list_input_key").value;
  getTours(1, value);
}

function getTours(page, searchKey) {
  var searchString = "";
  if (searchKey != "") {
    searchString =
      `, { title: {_icontains: "` +
      searchKey +
      `"
                              }
                          }`;
  }

  let filter =
    `filter: {
                      _and: [
                          {
                              status: {
                                  _eq: "published"
                                  }
                          }
                          ` +
    searchString +
    `
                      ]
                  }`;

  let data = JSON.stringify({
    query:
      `query {
          tours (page: ` +
      page +
      `, limit: ` +
      limit +
      `, ` +
      filter +
      `) {
              id
              title
              date_created
              duration
              price
              type
              review_func {
                  count
              }
              covers {
                  directus_files_id {
                      id
                  }
              }
          }
          tours_aggregated (` +
      filter +
      `) {
              count {
                  id
              }
          }
      }`,
  });

  var settings = {
    url: api,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  $.ajax(settings).done(function (response) {
    let data = response.data;
    let tours = data.tours;
    let totalTour = data.tours_aggregated[0].count.id;
    let totalPage = Math.ceil(totalTour / limit);

    document.getElementById("total_tour_content").innerHTML = totalTour;
    document.getElementById("tour_list_page_content").innerHTML =
      pageToTourList(page, totalPage);

    var arrayTour = [];

    for (var i = 0; i < tours.length; i++) {
      let json = tours[i];
      let tour = new Tour(json);

      arrayTour.push(tour);
    }

    let html = tourOtoTourList(arrayTour);
    document.getElementById("tour_list_content").innerHTML = html;
  });
}
// =========================POST CONTROLLER===================================
function getPosts(page = 1, category = currentPostCategory) {
  getCategories();
  currentPostPage = page;
  currentPostCategory = category;
  let filter = `filter: {
    _and: [
        {
            status: {
                _eq: "published"
                }
        },
        ${
          category != ""
            ? `{
                category: {
                    title: {
                      _eq:"${category}"
                    }
                  }
              }`
            : ""
        }
    ]
}`;
  let data = JSON.stringify({
    query: `query {
      posts (page: ${page}, limit: ${limitPostPerPage},${filter}
      ){
          id
          date_created
          title
          content
          category{
            title
          }
          short_description
          cover{
              id
          }
      }
      posts_aggregated (${filter}) {
          count {
              id
          }
      }
  }`,
  });
  let settings = {
    url: api,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  $.ajax(settings).done(function (response) {
    const { posts, posts_aggregated } = response.data;

    totalPost = posts_aggregated[0].count.id;
    totalPostPages = Math.ceil(totalPost / limitPostPerPage);

    let html = postObjectPostList(posts.map((p) => new Post(p)));
    document.getElementById("post_list_content").innerHTML = html;
    if (totalPostPages == 1) {
      document.getElementById("post_pagination").innerHTML = "";
    } else {
      document.getElementById("post_pagination").innerHTML = postPagination(
        totalPostPages,
        category
      );
    }
  });
}
function getCategories() {
  let data = JSON.stringify({
    query: `query {
      categories {
          id
          title
          posts_func{
            count
          }
      }
  }`,
  });
  let settings = {
    url: api,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  $.ajax(settings).done(function (response) {
    const { categories } = response.data;
    let html = postCategoriesToHtml(categories);
    document.getElementById("category_list_content").innerHTML = html;
  });
}
// =====================PLANE SERVICE CONTROLLER================================
function getServicePlane() {
  let data = JSON.stringify({
    query: `query {
      vemaybay {
          title
          content
          header_img{
            id
        }
      }
  }`,
  });
  let settings = {
    url: api,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  $.ajax(settings).done(function (response) {
    const {
      vemaybay: { content, title, header_img },
    } = response.data;
    const headerImg = header_img ? idToImg(header_img?.id) : defaultHeaderImg;
    getHeader(
      headerImg,
      "http://localhost/giatrinh.com/servicePlane.php",
      title
    );
    document.getElementById("service_plane_title").innerHTML = title;
    document.getElementById("service_plane_content").innerHTML = content;
  });
}
// =====================CAR SERVICE CONTROLLER================================
function getServiceCar() {
  let data = JSON.stringify({
    query: `query {
      vexe {
          title
          content
          header_img{
            id
        }
      }
  }`,
  });
  let settings = {
    url: api,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  $.ajax(settings).done(function (response) {
    const {
      vexe: { content, title, header_img },
    } = response.data;
    const headerImg = header_img ? idToImg(header_img?.id) : defaultHeaderImg;
    getHeader(headerImg, "http://localhost/giatrinh.com/serviceCar.php", title);
    document.getElementById("service_car_title").innerHTML = title;
    document.getElementById("service_car_content").innerHTML = content;
  });
}
// =====================TOUR DETAIL CONTROLLER================================
function getTourDetail() {
  // lấy id từ url
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  // nếu không có id redirect về tourList

  if (!id) {
    window.location.href = tourListUrl;
    return;
  }
  let data = JSON.stringify({
    query: `
    query {
      tours (filter: {
          _and: [
              {
                  status: {
                      _eq: "published"
                      }
              },
              {
                  id: {
                      _eq: ${id}
                  }
              }
          ]
      }){
          id
          title
          date_created
          duration
          description
          price
          group_size
          transportation
          type
          covers {
              directus_files_id {
                  id
              }
          }
      }
  }
    `,
  });
  let settings = {
    url: api,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  $.ajax(settings).done(function (response) {
    const { tours } = response.data;
    if (tours.length === 0) {
      window.location.href = tourListUrl;
      return;
    }
    const tourDetail = new Tour(tours[0]);

    const tourTitle = document.getElementById("tour_title");
    const tourPrice = document.getElementById("tour_price");
    const tourDuration = document.querySelectorAll(".tour_duration");
    const tourDescription = document.getElementById("tour_description");
    const tourGroupSize = document.getElementById("tour_group_size");
    const tourTransportation = document.getElementById("tour_trans");
    const tourCover = document.getElementById("tour_cover");
    const tourType = document.getElementById("tour_type");

    tourCover.src = tourDetail.covers[0];
    tourTitle.innerHTML = tourDetail.title;
    tourPrice.innerHTML = tourDetail.price;
    tourType.innerHTML = tourDetail.type;
    tourDescription.innerHTML = tourDetail.description;
    tourDuration.forEach(
      (t) => (t.innerHTML = tourDetail.duration + "<span> ngày</span>")
    );
    tourGroupSize.innerHTML = tourDetail.groupSize;
    tourTransportation.innerHTML = tourDetail.transportation;

    getRelatedTourByType(tourDetail.type, tourDetail.id, 4);
    getAllTourCard();
  });
}
function getRelatedTourByType(type, id, limit = 4) {
  let data = JSON.stringify({
    query: `query {
      tours (page: 1, limit: ${limit},
      filter: {
          _and: [
              {
                  status: {
                      _eq: "published"
                      }
              },
              {
                  type: {
                      _eq: "${type}"
                  }
              },
              {
                  id:{
                      _neq: ${id}
                  }
              }
          ]
      }
      ){
          id
          title
          date_created
          duration
          price
          covers {
              directus_files_id {
                  id
              }
          }
      }
  }`,
  });
  let settings = {
    url: api,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  $.ajax(settings).done(function (response) {
    const { tours } = response.data;

    const result = tours.map((t) => new Tour(t));
    const html = createRelatedTourCard(result, "Các tour tương tự");

    document.getElementById("related_tours").innerHTML = html;
  });
}
function getAllTourCard(limit = 4) {
  let data = JSON.stringify({
    query: `
    query {
      tours (page: 1, limit: ${limit},
      filter: {
          _and: [
              {
                  status: {
                      _eq: "published"
                      }
              },
          ],
      }
      ){
          id
          title
          date_created
          duration
          price
          covers {
              directus_files_id {
                  id
              }
          }
      }
  }
    `,
  });
  let settings = {
    url: api,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  $.ajax(settings).done(function (response) {
    const { tours } = response.data;
    console.log(tours);
    const result = tours.map((t) => new Tour(t));

    const html = createRelatedTourCard(result, "Tour giờ chót giá tốt");
    document.getElementById("all_tours").innerHTML = html;
  });
}

// Router ===========================================================================================================================

function router() {
  let currentURL = window.location.href;
  if (currentURL.includes("tourList")) {
    getTours(1, "");
    return;
  }

  if (currentURL.includes("tourPost")) {
    // alert("ok");
    return;
  }
  if (currentURL.includes("tourDetail")) {
    getTourDetail();
    return;
  }
  if (currentURL.includes("tourExp")) {
    getPosts();
    return;
  }
  if (currentURL.includes("servicePlane")) {
    getServicePlane();
    return;
  }
  if (currentURL.includes("serviceCar")) {
    getServiceCar();
    return;
  }
}

router();
