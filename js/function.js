//  =================================================================================================================================
// Config ===========================================================================================================================
//  =================================================================================================================================

let api = "https://admin.giatrinh.com/graphql";

let limit = 6;

let currentPostCategory = "";
let currentPage = 1;
let totalPostCount = 0;
let totalPostPages = 0;
let searchKey = "";
let searchDurations = [];
let searchLocations = [];

// let tourListUrl = "http://localhost/giatrinh.com/tourList.php";
// let tourDetailUrl = "http://localhost/giatrinh.com/tourDetail.php";
// let blogListUrl = "http://localhost/giatrinh.com/tourExp.php";

//  =================================================================================================================================
// Presentor ========================================================================================================================
//  =================================================================================================================================

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
			${category.title == currentPostCategory ? "is-tab-el-active" : ""}
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
  let html = `<div class="row justify-center mb-20">
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
		<img class="img-h-full" src="${tour.cover}">
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
		<span class="fw-700 mt-20 text-20 text-blue-1">${tour.price}đ</span>
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

function createIndexTourCard(tours, title) {
  let html = `<div data-anim-child="slide-up delay-1" class="row y-gap-20 justify-between items-end is-in-view">
	<div class="col-auto">
	<div class="sectionTitle -md">
	<h2 class="sectionTitle__title">${title}</h2>
	</div>
	</div>
	<div class="col-auto">
	<a href="${tourListUrl}" class="button -blue-1 -md bg-blue-1-05 text-blue-1">
	Xem tất cả
	<i class="icon-arrow-top-right ml-10"></i>
	</a>
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
		<img class="img-h-full" src="${tour.cover}">
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
		<span class="fw-700 mt-20 text-20 text-blue-1">${tour.price}đ</span>
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

function createIndexPostCard(posts) {
  let html = "";
  posts
    .map(
      (p) =>
        (html += `<div data-anim="slide-up delay-5" class="col-lg-3 col-sm-6 is-in-view">

			<a href="#" class="blogCard -type-1 d-block ">
			<div class="blogCard__image">
			<div class="ratio ratio-4:3 rounded-4 rounded-8">
			<img class="img-ratio js-lazy loaded" src="${p.cover}" alt="image" data-ll-status="loaded">
			</div>
			</div>

			<div class="mt-20 line-clamp">
			<h4 class="text-dark-1 text-18 fw-500">${p.title}</h4>
			<div class="text-light-1 text-15 lh-14 mt-5">${p.date_created}</div>
			</div>
			</a>

			</div>`)
    )
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

function filterToursByValue(values) {
	searchLocations = [];
	searchDurations = [];

	let content = '';

	values.forEach(function(value){
		if (value.includes('filter_location')) {
			searchLocations.push(value.replace("filter_location_", ""))
			content += value.replace("filter_location_", "") + " ";
		} else {
			searchDurations.push(value.replace("filter_date_", ""))
		}
	})

	document.getElementById('tour_list_filter_content').innerHTML = content;

	if ((searchLocations.length + searchDurations.length) != 0) {
		document.getElementById('tour_list_meta_content_button').style.display = '';
	} else {
		document.getElementById('tour_list_meta_content_button').style.display = 'none';
	}

	getTours();
}

function getTours() {
	let router = Router.getTours;

	let data = {
		limit: limit,
		searchKey: searchKey,
		page: currentPage,
		searchDurations: searchDurations,
		searchLocations: searchLocations,

	};

	callAPI(router, data, function(tours){
		let html = presentor(router, tours);
		document.getElementById("tour_list_content").innerHTML = html;
		refreshAllJS();
	}, function(meta){
		let totalPage = Math.ceil(meta.count/limit);

		document.getElementById("tour_list_meta_content").innerHTML = `<div class="text-18"><span class="fw-500">${meta.count} chuyến đi </span></div>`;
		document.getElementById("tour_list_page_content").innerHTML = pageToTourList(currentPage, totalPage);
	})
}

function getTourPage(page) {
	currentPage = page;
	getTours();
}

function clearFilter() {
	filterToursByValue([]);
	clearCheckbox();
}
// =========================POSTS' LIST CONTROLLER========================
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
  // lấy slug từ url
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
				cover {
					id
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
				cover {
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
				cover {
					id
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
    const result = tours.map((t) => new Tour(t));

    const html = createRelatedTourCard(result, "Tour giờ chót giá tốt");
    document.getElementById("all_tours").innerHTML = html;
  });
}
//===========================HOME CONTROLLER=================================

function getBanners() {
  let router = Router.getBanners;

  callAPI(router, null, function (banners) {
    let html = presentor(router, banners);
    document.getElementById("index_banners_content").innerHTML = html;
    refreshAllJS();
  });
}

function getTourClose() {
  let router = Router.getCloseTour;

  let data = {
    limit: 8,
  };

  callAPI(router, data, function (tours) {
    let html = presentor(router, tours);
    document.getElementById("index_tour_close_content").innerHTML = html;
    refreshAllJS();
  });
}

function getDomesticTours() {
  let router = Router.getDomesticTours;

  let data = {
    limit: 4,
  };

  callAPI(router, data, function (tours) {
    let html = presentor(router, tours);
    document.getElementById("index_tour_inland_content").innerHTML = html;
    refreshAllJS();
  });
}

function getInterTours() {
  let router = Router.getInternationalTours;

  let data = {
    limit: 4,
  };

  callAPI(router, data, function (tours) {
    let html = presentor(router, tours);
    document.getElementById("index_tour_inter_content").innerHTML = html;
    refreshAllJS();
  });
}

function getLocations() {
  let router = Router.getLocations;

  let data = {
    limit: 6,
  };

  callAPI(router, data, function (locations) {
    let html = presentor(router, locations);
    document.getElementById("index_locations_content").innerHTML = html;
    refreshAllJS();
  });
}

function getSearchLocations() {
  let router = Router.getLocations;

  let data = {
    limit: 100,
  };

  callAPI(router, data, (locations) => {
    getSearchValueAndNavigate(locations);
    setFilterValue(locations);
  });
}

function getHomePosts() {
  let router = Router.getPosts;

  let data = {
    limit: 4,
  };

  callAPI(router, data, function (datas) {
    let html = presentor(router, datas);
    document.getElementById("index_posts_content").innerHTML = html;
    refreshAllJS();
  });
}
//  ABOUT US CONTROLLER ===========================================================================================================================
function getAboutUsPage() {
	let router = Router.getCompanyInfo;

	callAPI(router, null, function (companyInfo) {

		document.getElementById("company_name").innerHTML = companyInfo.name;
		document.getElementById("company_slogan").innerHTML = companyInfo.slogan;
		document.getElementById("company_short_description").innerHTML = companyInfo.short_description;
		document.getElementById("company_description").innerHTML = companyInfo.description;
		
		refreshAllJS();
	});
}
//POST DETAIL CONTROLLER===========================================================================================================================
function getPostDetail() {
  const router = Router.getPostDetail;
  const params = new URLSearchParams(window.location.search);
  const slugParam = params.get("slug");

  if (!slugParam || slugParam == "") {
    alert("Lỗi, không có slug hoặc slug rỗng!");
    return;
  }

  callAPI(router, { slug: slugParam }, function (post) {
    document.getElementById("post_category").innerHTML = post.category.name;
    document.getElementById("post_title").innerHTML = post.title;
    document.getElementById("post_date").innerHTML = post.date_created;
    document.getElementById("post_cover").src = post?.cover || defaultHeaderImg;
    document.getElementById("post_content").innerHTML = post.content;
    refreshAllJS();
  });
  callAPI(Router.getPosts, { limit: 4 }, function (datas) {
    let html = presentor(Router.getPosts, datas);
    document.getElementById("index_posts_content").innerHTML = html;
    refreshAllJS();
  });
}
//SERVICE DETAIL CONTROLLER===========================================================================================================================

function getServiceDetail() {
  let router = Router.getServiceDetail;
  let slug = getServiceSlug();
  callAPI(router, { slug }, function (service) {
    document.getElementById("service_title").innerHTML = service.title;
    document.getElementById("service_cover").src =
      service?.cover || defaultHeaderImg;
    document.getElementById("service_content").innerHTML = service.content;
  });
}
// Router ===========================================================================================================================

function refresh() {
	let params = new URLSearchParams(window.location.search);
	let currentURL = window.location.href;

	if (currentURL.includes("about")) {
		getAboutUsPage();
		return;
	}
	if (currentURL.includes("tourList")) {
		getTours(1, "");
		return;
	}

	if (currentURL.includes("tours")) {
		let searchLocation = params.get('location');
		let searchDuration = params.get('duration');

		if (searchLocation) {
			searchLocations.push(searchLocation);
		}

		if (searchDuration) {
			searchDurations.push(searchDuration);
		}

		getTours();
		getSearchLocations();
		return;
	}

	if (currentURL.includes("postDetail")) {
    getPostDetail();
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

	getTourClose();
	getBanners();
	getDomesticTours();
	getInterTours();
	getLocations();
	getSearchLocations();
	getHomePosts();
}

refresh();
