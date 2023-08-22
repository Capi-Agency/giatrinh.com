


function presentor(router, data) {
	switch(router) {
	case Router.getCloseTour:
			let html = tourOtoTourList(data, TourItemType.card);

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
	default:
    	return '';
	}
}

//===================================================
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
                    <div class="cardImage__content"><img class="rounded-4 col-12" src="${tour.cover}" alt="${tour.title}"></div>
                    ${cardTag}
                  </div>
                </div>

                <div class="hotelsCard__content mt-10">
                  <h4 class="hotelsCard__title text-dark-1 text-18 lh-16 fw-700 line-clamp">
                    <span>${tour.title}</span>
                  </h4>

                  <p class="text-light-1 lh-14 text-14 mt-5">${tour.location_type}, ${tour.location_title}</p>
                  <div class="d-flex items-center mt-20">
                    <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">${tour.total_rate}</div>
                    <div class="text-14 text-dark-1 fw-500 ml-10">${foodTag}</div>
                    <div class="text-14 text-light-1 ml-10">${tour.total_review} đánh giá</div>
                  </div>
                  <div class="mt-5">
                    <div class="fw-700">
                     Giá chỉ từ <span class="text-blue-1">${tour.price}</span> 1 người
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