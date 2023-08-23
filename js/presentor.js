function presentor(router, data) {
  var html = "";
  let url = "";

  switch (router) {
    case Router.getCloseTour:
      html = tourOtoTourList(data, TourItemType.card);

      return `<div class="row y-gap-10 justify-between items-end">
			<div class="col-auto">
			<div class="sectionTitle -md">
			<h2 class="sectionTitle__title">Tour giờ chót giá tốt</h2>
			<p class=" sectionTitle__text mt-5 sm:mt-0">Dành riêng cho chuyến du lịch gần nhất của bạn</p>
			</div>
			</div>
			</div>
			<div class="relative overflow-hidden pt-40 sm:pt-20 js-section-slider" data-gap="30" data-scrollbar data-slider-cols="xl-4 lg-3 md-2 sm-2 base-1" data-nav-prev="js-hotels-prev" data-pagination="js-hotels-pag" data-nav-next="js-hotels-next">
			<div class="swiper-wrapper">
			${html}
			</div>
			<div class="d-flex x-gap-15 items-center justify-center sm:justify-start pt-40 sm:pt-20">
			<div class="col-auto">
			<button class="d-flex items-center text-24 arrow-left-hover js-hotels-prev">
			<i class="icon icon-arrow-left"></i>
			</button>
			</div>

			<div class="col-auto">
			<div class="pagination -dots text-border js-hotels-pag"></div>
			</div>

			<div class="col-auto">
			<button class="d-flex items-center text-24 arrow-right-hover js-hotels-next">
			<i class="icon icon-arrow-right"></i>
			</button>
			</div>
			</div>
			</div>`;
      break;
    case Router.getDomesticTours:
      html = tourOtoTourList(data, TourItemType.card);

      return `<div class="row y-gap-10 justify-between items-end">
			<div class="col-auto">
				<div class="sectionTitle -md">
				<h2 class="sectionTitle__title">Tour trong nước</h2>
				<p class=" sectionTitle__text mt-5 sm:mt-0">Những địa điểm tuyệt vời của Việt Nam</p>
				</div>
				</div>
				</div>
				<div class="relative overflow-hidden pt-40 sm:pt-20 js-section-slider" data-gap="30" data-scrollbar data-slider-cols="xl-4 lg-3 md-2 sm-2 base-1" data-nav-prev="js-hotels-prev" data-pagination="js-hotels-pag" data-nav-next="js-hotels-next">
				<div class="swiper-wrapper">
				${html}
				</div>
			</div>`;
      break;
    case Router.getInternationalTours:
      html = tourOtoTourList(data, TourItemType.card);

      return `<div class="row y-gap-10 justify-between items-end">
			<div class="col-auto">
				<div class="sectionTitle -md">
				<h2 class="sectionTitle__title">Tour quốc tế</h2>
				<p class=" sectionTitle__text mt-5 sm:mt-0">Những địa điểm tuyệt vời trên toàn thế giới</p>
				</div>
				</div>
				</div>
				<div class="relative overflow-hidden pt-40 sm:pt-20 js-section-slider" data-gap="30" data-scrollbar data-slider-cols="xl-4 lg-3 md-2 sm-2 base-1" data-nav-prev="js-hotels-prev" data-pagination="js-hotels-pag" data-nav-next="js-hotels-next">
				<div class="swiper-wrapper">
				${html}
				</div>
			</div>`;
      break;

    case Router.getBanners:
      return bannerOtoBannerList(data);
      break;

    case Router.getLocations:
      html = locationOtoList(data, LocationItemType.card);

      return `<div data-anim-child="slide-up delay-1" class="row justify-center text-center is-in-view">
                <div class="col-auto">
                    <div class="sectionTitle -md">
                        <h2 class="sectionTitle__title">Điểm đến ưa thích</h2>
                        <p class=" sectionTitle__text mt-5 sm:mt-0">Các điểm đến du lịch trong nước và nước ngoài</p>
                    </div>
                </div>
            </div>
            <div class="row y-gap-40 justify-between pt-40 sm:pt-20">
            ${html}
            </div>`;
      break;
    case Router.getPosts:
      html = postOtoList(data, PostItemType.card);
      url = domain + "/posts";

      return `
            <div data-anim-child="slide-up delay-1" class="row y-gap-20 justify-between items-end is-in-view">
                <div class="col-auto">
                    <div class="sectionTitle -md">
                        <h2 class="sectionTitle__title">Cảm hứng du lịch</h2>
                        <p class=" sectionTitle__text mt-5 sm:mt-0">Thông tin về du lịch, văn hóa, ẩm thực, các sự kiện và lễ hội tại các điểm đến Việt nam, Đông Nam Á và Thế Giới</p>
                    </div>
                </div>

                <div class="col-auto">
                    <a href="${url}" class="button -blue-1 -md bg-blue-1-05 text-blue-1">
                        Xem tất cả
                        <i class="icon-arrow-top-right ml-10"></i>
                    </a>
                </div>
            </div>

            <div class="row y-gap-30 pt-40">
            ${html}
            </div>
		`;
      break;
    case Router.getTours:
      return tourOtoTourList(data, TourItemType.row);
      break;
    case Router.getCompanyInfo:
      html = locationOtoList(data, LocationItemType.aboutUsCard);

      return `
			  ${html}
			  `;
    default:
      return "";
  }
}

//======================================================================================================
//Banner ===============================================================================================
//======================================================================================================

function bannerOtoBannerList(banners) {
  var html = "";
  banners.forEach(function (banner) {
    html = html + bannerOtoBannerListItem(banner);
  });
  return html;
}

function bannerOtoBannerListItem(banner) {
  var html = `
		<div data-anim="slide-up" class="col-md-6 is-in-view">
	        <a href="${banner.url}">
	            <div class="ctaCard -type-1 rounded-4 ">
	                <div class="ctaCard__image ratio ratio-16:9">
	                    <img class="img-ratio js-lazy loaded" src="${banner.cover}" alt="image" data-ll-status="loaded">
	                </div>
	            </div>
	        </a>
	    </div>
	`;
  return html;
}

//======================================================================================================
//Post ===============================================================================================
//======================================================================================================

const PostItemType = {
  card: 0,
  row: 1,
};

function postOtoList(posts, type) {
  var html = "";
  posts.forEach(function (post) {
    html = html + postOtoListItem(post, type);
  });
  return html;
}

function postOtoListItem(post, type) {
  var html = "";
  switch (type) {
    case LocationItemType.card:
      let url = domain + "/posts/" + post.slug;

      html = `
			<div data-anim-child="slide-left delay-1" class="col-lg-3 col-sm-6 is-in-view">
			<a href="${url}" class="blogCard -type-1 d-block ">
			<div class="blogCard__image">
			<div class="ratio ratio-4:3 rounded-4 rounded-8">
			<img class="img-ratio js-lazy loaded" src="${post.cover}" alt="image" data-ll-status="loaded">
			</div>
			</div>
			<div class="mt-20">
			<h4 class="text-dark-1 text-18 fw-700">${post.title}</h4>
			<div class="text-light-1 text-15 lh-14 mt-5">${post.date_created}</div>
			</div>
			</a>
			</div>
		`;
      break;
    default:
      break;
  }
  return html;
}

//======================================================================================================
//Location =============================================================================================
//======================================================================================================
const LocationItemType = {
  card: 0,
  row: 1,
  aboutUsCard: 2,
};

function locationOtoList(locations, type) {
  var html = "";
  for (var i = 0; i < locations.length; i++) {
    let location = locations[i];
    html = html + locationOtoListItem(location, type, i);
  }
  return html;
}

function locationOtoListItem(location, type, index) {
  let url = domain + "/tours?location=" + location.slug;

  var html = "";
  switch (type) {
    case LocationItemType.card:
      html =
        `
			<div data-anim-child="slide-up delay-3" class="` +
        (index == 1 || index == 3
          ? `col-xl-6 col-md-4 col-sm-6 is-in-view`
          : `col-xl-3 col-md-4 col-sm-6 is-in-view`) +
        `">
	            <a href="${url}" class="citiesCard -type-3 d-block rounded-4 ` +
        (index == 1 || index == 3 ? `h-full` : ``) +
        `">
	                <div class="citiesCard__image ` +
        (index == 1 || index == 3 ? `` : `ratio ratio-1:1`) +
        `">
	                    <img class="img-ratio js-lazy loaded" src="` +
        location.cover +
        `" alt="image" data-ll-status="loaded">
	                </div>
	                <div class="citiesCard__content px-30 py-30">
	                    <h4 class="text-26 fw-600 text-white">${location.name}</h4>
	                    <div class="text-15 text-white">${location.count} Điểm đến</div>
	                </div>
	            </a>
	        </div>
		`;
      break;
    case LocationItemType.aboutUsCard:
      html = `
		  <div class="swiper-slide">
		  <a href="${url}">
		  
		  <div class="">
			<img src="${location.cover}" alt="image" class="rounded-4 col-12"
			style="height: 200px; object-fit:cover;">

			<div class="mt-10">
			  <div class="text-18 lh-15 fw-700" style="color:#13357b;">${
          location.name
        }</div>
			  ${
          location.count == 0
            ? ""
            : `<div class='text-14 lh-15'>${location.count} tour</div>`
        }
			</div>
		  </div>
		  </a>
		</div>`;
    default:
      break;
  }
  return html;
}

//======================================================================================================
//Banner ===============================================================================================
//======================================================================================================

const TourItemType = {
  card: 0,
  row: 1,
};

function tourOtoTourList(tours, type) {
  var html = ``;

  for (var i = 0; i < tours.length; i++) {
    let tour = tours[i];
    html = html + tourOtoTourlistItem(tour, type);
  }
  return html;
}

function tourOtoTourlistItem(tour, type) {
  let url = domain + "/tours/" + tour.slug;

  var html = "";

  var foodTag = "";

  if (tour.food_included) {
    foodTag = "Bao gồm đồ ăn";
  } else {
    foodTag = "Ăn ngoài";
  }

  switch (type) {
    case TourItemType.card:
      var cardTag = "";

      if (tour.best_seller) {
        cardTag = `
			<div class="cardImage__leftBadge">
			<div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-700 uppercase bg-blue-1 text-white">
			Bán chạy
			</div>
			</div>
			`;
      }

      html = `
		<div class="swiper-slide">
		<a href="${url}" class="hotelsCard -type-1 ">
		<div class="hotelsCard__image">
		<div class="cardImage ratio ratio-1:1">
		<div class="cardImage__content"><img class="rounded-4 col-12" src="${tour.cover}" alt="${tour.name}"></div>
		${cardTag}
		</div>
		</div>

		<div class="hotelsCard__content mt-10">
		<h4 class="hotelsCard__title text-dark-1 text-18 lh-16 fw-700 line-clamp">
		<span>${tour.name}</span>
		</h4>

		<p class="text-light-1 lh-14 text-14 mt-5">${tour.location.name}, ${tour.location.type}</p>
		<div class="d-flex items-center mt-20">
		<div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">${tour.average_rate}</div>
		<div class="text-14 text-dark-1 fw-500 ml-10">${foodTag}</div>
		<div class="text-14 text-light-1 ml-10">${tour.total_review} đánh giá</div>
		</div>
		<div class="mt-5">
		<div class="fw-700">
		Giá chỉ từ <span class="text-blue-1">${tour.price}</span>/người
		</div>
		</div>
		</div>
		</a>
		</div>
		`;
      break;
    case TourItemType.row:
      html = `
		<div class="col-12">
		<div class="border-top-light pt-30">
		<div class="row x-gap-20 y-gap-20">
		<div class="col-md-auto">
		<div class="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
		<div class="cardImage__content">
		<img class="rounded-4 col-12" src="img/lists/tour/1/1.png" alt="image">
		</div>
		</div>
		</div>
		<div class="col-md">
		<div class="row x-gap-10 items-center">
		<div class="col-auto">
		<p class="text-14 lh-14 mb-5">6+ hours</p>
		</div>
		<div class="col-auto">
		<div class="size-3 rounded-full bg-light-1 mb-5"></div>
		</div>
		<div class="col-auto">
		<p class="text-14 lh-14 mb-5">Full-day Tours</p>
		</div>
		</div>
		<h3 class="text-18 lh-16 fw-500">Leeds Castle, Cliffs of Dover and Canterbury Day Trip from London with Guided Cathedral Tour</h3>
		<p class="text-14 lh-14 mt-5">Westminster Borough, London</p>

		<div class="text-14 lh-15 fw-500 mt-20">Taking safety measures</div>
		<div class="text-14 text-green-2 fw-500 lh-15 mt-5">Free cancellation</div>
		</div>

		<div class="col-md-auto text-right md:text-left">
		<div class="d-flex x-gap-5 items-center justify-end md:justify-start">
		<i class="icon-star text-10 text-yellow-1"></i>
		<i class="icon-star text-10 text-yellow-1"></i>
		<i class="icon-star text-10 text-yellow-1"></i>
		<i class="icon-star text-10 text-yellow-1"></i>
		<i class="icon-star text-10 text-yellow-1"></i>
		</div>
		<div class="text-14 lh-14 text-light-1 mt-10">3,014 reviews</div>
		<div class="text-14 text-light-1 mt-50 md:mt-20">From</div>
		<div class="text-22 lh-12 fw-600 mt-5">US$72</div>
		<div class="text-14 text-light-1 mt-5">per adult</div>
		<a href="#" class="button -md -dark-1 bg-blue-1 text-white mt-24">
		View Detail <div class="icon-arrow-top-right ml-15"></div>
		</a>
		</div>
		</div>
		</div>
		</div>
		`;
    default:
      break;
  }

  return html;
}

//About ===============================================================================================
