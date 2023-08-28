//  =================================================================================================================================
// Config ===========================================================================================================================
//  =================================================================================================================================

let api = "https://admin.giatrinh.com/graphql";

let limit = 6;

let currentPostCategory = -1;
let currentPage = 1;
let searchKey = "";
let searchDurations = [];
let searchLocations = [];

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

function getHeader(headerImg, headerHref, headerAnchor) {
  const headerImgEl = document.querySelector("#header_img");
  const headerAnchorEl = document.querySelector("#breadcrumb_anchor");

  headerImgEl.src =
    headerImg == null || undefined ? defaultHeaderImg : headerImg;
  headerAnchorEl.href = headerHref;
  headerAnchorEl.innerHTML = headerAnchor;
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
let categories = [];

function getPostsPage() {
	const routerPosts = Router.getPostsPage
	let posts=[];

	let data = {
		needCategory: categories.length == 0,
		page: currentPage,
		limit: limit,
		category: currentPostCategory
	}

	callAPI(routerPosts, data, function({posts, categories}){
		document.getElementById("tab-btn").innerHTML =	categoryBtnList(categories, currentPostCategory)
		document.getElementById("tab-content").innerHTML = postDataToTabPane(posts,categories)
	}, function(meta){
		let totalPage = Math.ceil(meta.count/limit);
		document.getElementById("post_list_page_content").innerHTML =
		pageToPostList(currentPage, totalPage)
	})
}

function getPostPage(page) {
	currentPage = page;
	getPostsPage();
}

function getPostWithCategoryID(id) {
	currentPage = 1;
	currentPostCategory = id;
	getPostsPage();
}

// =====================TOUR DETAIL CONTROLLER================================

function getTourDetail(slug) {
  let router = Router.getTourDetail;
  let data = {
    slug,
  };

  callAPI(router, data, function (tour) {

    const tourTitle = document.getElementById("tour_title");
    const tourPrice = document.getElementById("tour_price");
    const tourDuration = document.querySelectorAll(".tour_duration");
    const tourDescription = document.getElementById("tour_description");
    const tourTransportation = document.getElementById("tour_trans");
    const tourFoods = document.getElementById("tour_foods");
    const tourCover = document.getElementById("tour_cover");
    const tourType = document.getElementById("tour_type");

    tourCover.src = tour.cover;
    tourTitle.innerHTML = tour.name;
    tourPrice.innerHTML = tour.price;
    tourType.innerHTML = tour.location.name + ", " + tour.location.type;
    tourDescription.innerHTML = tour.description;
    tourDuration.forEach(
      (t) => (t.innerHTML = tour.duration + "<span> ngày</span>")
    );
    tourTransportation.innerHTML = tour.transportation;
    tourFoods.innerHTML = tour.food_included ? "Bao gồm ăn uống" : "Ăn ngoài";

    refreshAllJS();
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
// SERVICES PAGE CONTROLLER
 
function getServicesPage(){
  let router = Router.getServices ;
  callAPI(router, null, function (service) {
    document.getElementById("service_title").innerHTML = service.title;
    document.getElementById("service_cover").src =
      service?.cover || defaultHeaderImg;
    document.getElementById("service_content").innerHTML = service.content;
  });

//   const serviceSlugs = [`dat-ve-may-bay`,`dich-vu-dat-xe`,`dang-ki-visa`,`xkld-han-quoc`,`xkld-uzbekistan`,`xkld-dai-loan`,`xkld-nhat-ban`]
// //   document.querySelector("services_list")
//   serviceSlugs.map(slug=>{
// 	callAPI(Router.getServiceDetail, {slug}, function(data){
// 		console.log(data)
// 	})
//})
  
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

// CONTACT CONTROLLER
function getContactPage(){
	sendContactFormValues();

	callAPI(Router.getCompanyInfo,null,function(companyInfo){
		document.getElementById("header_img").src = companyInfo.header_img
		document.getElementById("company_address").innerHTML = companyInfo.address
		document.getElementById("company_email1").href = `mailto:${companyInfo.email1}`
		document.getElementById("company_email1").textContent = companyInfo.email1
		document.getElementById("company_phone1").href = `tel:${companyInfo.phone1}`
		document.getElementById("company_phone1").textContent = companyInfo.phone1
	})
}

// Router ===========================================================================================================================

function refresh() {
	let params = new URLSearchParams(window.location.search);
	let currentURL = window.location.href;

	if (currentURL.includes("about")) {
		getAboutUsPage();
		return;
	}
	if (currentURL.includes("contact-us")) {
		getContactPage();
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
	if (currentURL.includes("tour-detail")) {
		const urlParams = new URLSearchParams(window.location.search);
  		const slug = urlParams.get("slug");
		getTourDetail(slug);
		return;
	}
	if (currentURL.includes("posts")) {
		getPostsPage();
		return;
	}
	if (currentURL.includes("post-detail")) {
		getPostDetail();
		return;
 	}
	if (currentURL.includes("services")) {
		getServicesPage();
		return;
	}
	if (currentURL.includes("service-detail")) {
		getServiceDetail();
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
