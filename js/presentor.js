


function presentor(router, data) {
	var html = '';

	switch(router) {
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

	default:
		return '';
	}
}

//======================================================================================================
//Banner ===============================================================================================
//======================================================================================================

function bannerOtoBannerList(banners) {
	var html = '';
	banners.forEach(function(banner){
		html = html + bannerOtoBannerListItem(banner);
	});
	return html;
}

function bannerOtoBannerListItem(banner) {
	var html = `
		<div data-anim="slide-up" class="col-md-6 is-in-view">
	        <a href="`+banner.url+`">
	            <div class="ctaCard -type-1 rounded-4 ">
	                <div class="ctaCard__image ratio ratio-16:9">
	                    <img class="img-ratio js-lazy loaded" src="`+banner.cover+`" alt="image" data-ll-status="loaded">
	                </div>
	            </div>
	        </a>
	    </div>
	`;
	return html;
}

//======================================================================================================
//Location =============================================================================================
//======================================================================================================
const LocationItemType = {
	card: 0,
	row: 1,
}

function locationOtoList(locations, type) {
	var html = '';
	for (var i = 0; i < locations.length; i++) {
		let location = locations[i];
		html = html + locationOtoListItem(location, type, i);
	}
	return html;
}

function locationOtoListItem(location, type, index) {
	var html = '';
	switch (type) {
	case LocationItemType.card:
		html = `
			<div data-anim-child="slide-up delay-3" class="`+ ((index == 1 || index == 3) ? `col-xl-6 col-md-4 col-sm-6 is-in-view` : `col-xl-3 col-md-4 col-sm-6 is-in-view`) +`">
	            <a href="#" class="citiesCard -type-3 d-block rounded-4 `+ ((index == 1 || index == 3) ? `h-full` : ``) +`">
	                <div class="citiesCard__image `+ ((index == 1 || index == 3) ? `` : `ratio ratio-1:1`) +`">
	                    <img class="img-ratio js-lazy loaded" src="`+location.cover+`" alt="image" data-ll-status="loaded">
	                </div>
	                <div class="citiesCard__content px-30 py-30">
	                    <h4 class="text-26 fw-600 text-white">`+location.name+`</h4>
	                    <div class="text-15 text-white">`+location.count+` Điểm đến</div>
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
//Banner ===============================================================================================
//======================================================================================================

const TourItemType = {
	card: 0,
	row: 1,
}


function tourOtoTourList(tours, type) {
	var html = ``;

	for (var i = 0; i < tours.length; i++) {
		let tour = tours[i];
		html = html + tourOtoTourlistItem(tour, type);
	}
	return html;
}

function tourOtoTourlistItem(tour, type) {

	var html = '';

	var foodTag = '';

	if (tour.food_included) {
		foodTag = "Bao gồm đồ ăn";
	} else {
		foodTag = "Ăn ngoài";
	}

	switch (type) {
	case TourItemType.card:
		var cardTag = '';

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
		<a href="tours/${tour.slug}" class="hotelsCard -type-1 ">
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
	default:
		break;
	}

	return html;
}