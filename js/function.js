//  =================================================================================================================================
// Config ===========================================================================================================================
//  =================================================================================================================================

let api = "https://admin.giatrinh.com/graphql";
let limit = 5;

//  =================================================================================================================================
// Model ============================================================================================================================
//  =================================================================================================================================

class Tour {
  constructor(json) {

  	this.title = json.title

  	let dateString = json.date_created;

  	let date = new Date(json.date_created);

  	// dateFormat

  	this.date_created = date

  	this.price = new Intl.NumberFormat().format(json.price);

  	this.type = json.type;

    this.review = json.review_func.count;

    this.covers = [];
    let coverString = json.covers;
    if (coverString.length != 0) {
      for (var i = 0; i < coverString.length; i++) {
        let cover = coverString[i];
        let url = idToImg(cover.directus_files_id.id);
        this.covers.push(url);
      }
    } else {
      let url = idToImg('f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9');
      this.covers.push(url);
    }
  }
}

function idToImg(id) {
  return 'https://admin.giatrinh.com/assets/' + id;
}

//  =================================================================================================================================
// Presentor ========================================================================================================================
//  =================================================================================================================================

function tourOtoTourList(tours) {
	var html = ``;

	for (var i = 0; i < tours.length; i++) {
		let tour = tours[i];
		html = html + tourOtoTourHTML(tour);
	}
	return html;
}

function tourOtoTourHTML(tour) {
  var imgString = '';
  imgString = imgString + `<div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style="width: 250px;" role="group" aria-label="2 / 3">
                                  <img class="col-12" src="`+tour.covers[0]+`" alt="image">
                                </div>`;

	let html = `<div class="row y-gap-30">
                <div class="col-12">
                  <div class="border-top-light pt-30">
                    <div class="row x-gap-20 y-gap-20">
                      <div class="col-md-auto">
                        <div class="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                          <div class="cardImage__content">
                            `+imgString+`
                          </div>

                        </div>

                      </div>

                      <div class="col-md">
                        <div class="row x-gap-10 items-center">
                          <div class="col-auto">
                            <p class="text-14 lh-14 mb-5">`+tour.type+`</p>
                          </div>
                          <div class="col-auto">
                            <div class="size-3 rounded-full bg-light-1 mb-5"></div>
                          </div>
                          <div class="col-auto">
                            <p class="text-14 lh-14 mb-5">Tiếng Trung</p>
                          </div>
                        </div>

                        <h3 class="text-18 lh-16 fw-500">`+tour.title+`</h3>
                        <p class="text-14 lh-14 mt-5">Trung Quốc</p>

                        <div class="text-14 lh-15 fw-500 mt-20">Thoi gian <span class="fw-600">`+tour.date_created+`</span></div>
                        <div class="text-14 fw-500 lh-15 mt-5">Giờ khởi hành <span class="fw-600 text-green-2">20 Tháng 8 2023</span></div>
                      </div>

                      <div class="col-md-auto text-right d-flex align-items-end flex-column md:text-left">

                        <!-- Content -->
                        <div class="text-14 lh-14 text-light-1">`+tour.review+` đánh giá</div>

                        <!-- Button -->
                        <div class="mt-auto">
                          <div class="text-14 text-light-1 md:mt-20">Từ</div>
                          <div class="text-24 lh-12 fw-700 mt-5 text-blue-1">`+tour.price+`₫</div>
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
  var html = '';
  for (var i = 1; i <= totalPage; i++) {
    if (i == page) {
      html = html + `<div class="col-auto">
                      <button class="btn size-40 flex-center rounded-full bg-dark-1 text-white" onclick="getTours(`+i+`)" >`+i+`</button>
                    </div>`;
    } else {
      html = html + `<div class="col-auto">
                      <button class="btn size-40 flex-center rounded-full" onclick="getTours(`+i+`)" >`+i+`</button>
                    </div>`;
    }
  }
  return html;
}

//  =================================================================================================================================
// Controller Tour =======================================================================================================================
//  =================================================================================================================================

function searchTourByKey() {
  let value = document.getElementById('tour_list_input_key').value;
  getTours(1, value);
}

function getTours(page, searchKey) {
  var searchString = '';
  if (searchKey != "") {
    searchString = `, {
                              title: {
                                  _icontains: "`+searchKey+`"
                              }
                          }`;
  }



  let filter = `filter: {
                      _and: [
                          {
                              status: {
                                  _eq: "published"
                                  }
                          }
                          `+searchString+`
                      ]
                  }`;

	let data = JSON.stringify({
	    query: `query {
          tours (page: `+page+`, limit: `+limit+`, `+filter+`) {
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
          tours_aggregated (`+filter+`) {
              count {
                  id
              }
          }
      }`
	});

	var settings = {
	  "url": api,
	  "method": "POST",
	  "headers": {
	    "Content-Type": "application/json"
	  },
	  "data": data
	};

	$.ajax(settings).done(function (response) {

	  let data = response.data;
	  let tours = data.tours;
    let totalTour = data.tours_aggregated[0].count.id;
    let totalPage = Math.ceil(totalTour/limit);

    document.getElementById('total_tour_content').innerHTML = totalTour;
    document.getElementById('tour_list_page_content').innerHTML = pageToTourList(page, totalPage);

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



//  =================================================================================================================================
// Controller Post =======================================================================================================================
//  =================================================================================================================================


//  =================================================================================================================================
// Router ===========================================================================================================================
//  =================================================================================================================================


function router() {
	let currentURL = window.location.href;
	if (currentURL.includes("tourList")) {
		getTours(1, "");
	}

	if (currentURL.includes("tourPost")) {
		alert("ok");
	}

	if (currentURL.includes("tourDetail")) {
		// getTours();
	}
}

router();