// biến toàn cục
let domain = "http://localhost:8888";

// khai báo DOM
const searchInput = document.querySelector("#js-search");
const datePickerInput = document.querySelector("#js-date-picker");
const popupWindow = document.querySelector("#js-popup-window");
const searchForm = document.querySelector("#js-search-form");
const btnSubmit = document.querySelector("#js-btn-submit");

// hàm hỗ trợ
function changeDate(gmtTimeString) {
	var gmtDate = new Date(gmtTimeString);
	return `${gmtDate.getUTCHours()}:${gmtDate.getUTCMinutes()}:${gmtDate.getUTCSeconds()} ${gmtDate.getUTCDate()}/${gmtDate.getUTCMonth() + 1}/${gmtDate.getUTCFullYear()}`;
}


function idToImg(id) {
	return "https://admin.giatrinh.com/assets/" + id;
}

function pageToTourList(page, totalPage) {
	var html = "";
	for (var i = 1; i <= totalPage; i++) {
		if (i == page) {
			html = html + `<div class="col-auto"> <button class="btn size-40 flex-center rounded-full bg-dark-1 text-white" onclick="getTourPage(` + i + `)" >` + i + `</button> </div>`;
		} else {
			html += `<div class="col-auto"> <button class="btn size-40 flex-center rounded-full" onclick="getTourPage(` + i + `)" >` + i + `</button> </div>`;
		}
	}
	return html;
}

function liveSearch(locations) {
	searchInput.addEventListener("input", function (e) {
		popupWindow.classList.add("-is-active");
		if (e.target.value == "") {
			popupWindow.classList.remove("-is-active");
		}
	});

	const targets = document.querySelectorAll(".js-liverSearch");
	if (!targets) return;

	targets.forEach((el) => {
		const search = el.querySelector(".js-search");
		const results = el.querySelector(".js-results");
		let searchTerm = "";

		results.querySelectorAll(".js-search-option").forEach((option) => {
			const title = option.querySelector(".js-search-option-target").innerHTML;

			option.addEventListener("click", () => {
				search.value = title;
				el.querySelector(".js-popup-window").classList.remove("-is-active");
			});
		});

		search.addEventListener("input", (event) => {

			searchTerm = changeString(event.target.value.trim());

			showList(searchTerm, results);

			results.querySelectorAll(".js-search-option").forEach((option) => {
				const title = option.querySelector(
					".js-search-option-target"
					).innerHTML;

				option.addEventListener("click", () => {
					search.value = title;
					el.querySelector(".js-popup-window").classList.remove("-is-active");
				});
			});
		});
	});

	const showList = (searchTerm, resultsEl) => {
		resultsEl.innerHTML = "";

		locations
		.filter((location) => changeString(location.name).includes(searchTerm))
		.forEach((e) => {
			const div = document.createElement("div");

			div.innerHTML = `
			<button class="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
			<div class="d-flex">
			<div class="icon-location-2 text-light-1 text-20 pt-4"></div>
			<div class="ml-10">
			<div class="text-15 lh-12 fw-500 js-search-option-target">${e.name}</div>
			<div class="text-14 lh-12 text-light-1 mt-5">${e.count} điểm đến</div>
			</div>
			</div>
			</button>
			`;

			resultsEl.appendChild(div);
		});
	};
}

function changeString(str){
	str = str.toLowerCase();
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    return str;
}

function dateRangePicker() {
  // Tạo date picker từ thư việc flatpickr
	$("#js-date-picker").flatpickr({
		mode: "range",
		dateFormat: "d/m/Y",
	});
}

function calcDuration(startDate, endDate) {
	const [startDay, startMonth, startYear] = startDate.split("/");
	const [endDay, endMonth, endYear] = endDate.split("/");

	const startDateObject = new Date(startYear, startMonth, startDay);
	const endDateObject = new Date(endYear, endMonth, endDay);

	const timeDifference = endDateObject.getTime() - startDateObject.getTime();
	const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24)) + 1;
	return daysDifference > 6 ? 'long' : daysDifference;
}

function getSearchValueAndNavigate(locations) {
	let urlParams = [];
	let url = "";
	if (!searchForm || !datePickerInput || !searchInput) return;

	dateRangePicker();
	liveSearch(locations);

	btnSubmit.addEventListener("click", () => {
		if (searchInput.value || searchInput.value != "") {
			let locationParam = `location=${searchInput.value.trim()}`;
			urlParams.push(locationParam);
		}
		if (datePickerInput.value || datePickerInput.value != "") {
			const [startDate, endDate] = datePickerInput.value.split(" - ");

			let durationParam = `duration=${calcDuration(startDate, endDate)}`;
			urlParams.push(durationParam);
		}

		if (urlParams.length == 0) {
			return;
		} else {
			url = domain + "/tours.php?" + urlParams.join("&");
			window.location.href = url;
			urlParams = [];
		}
	});
}

function setFilterValue(locations) {
	let inHtml = '';
	let outHtml = '';

	locations.forEach(function(location){
		if (location.type == "Trong nước") {
			inHtml += `
					<div class="row y-gap-10 items-center justify-between">
	                    <div class="col-auto">
	                        <div class="d-flex items-center">
	                            <div class="form-checkbox" style="align-items: center;">
	                                <input type="checkbox" name="name" id="filter_location_${location.name}" onchange="getFilterData()">
	                                <div class="form-checkbox__mark">
	                                    <div class="form-checkbox__icon icon-check"></div>
	                                </div>
	                                <div class="text-15 ml-10">${location.name}</div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
			`;
		} else {
			outHtml += `
					<div class="row y-gap-10 items-center justify-between">
	                    <div class="col-auto">
	                        <div class="d-flex items-center">
	                            <div class="form-checkbox" style="align-items: center;">
	                                <input type="checkbox" name="name" id="filter_location_${location.name}" onchange="getFilterData()">
	                                <div class="form-checkbox__mark">
	                                    <div class="form-checkbox__icon icon-check"></div>
	                                </div>
	                                <div class="text-15 ml-10">${location.name}</div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
			`;
		}
	});

	document.getElementById('tours_location_in').innerHTML = inHtml;
	document.getElementById('tours_location_out').innerHTML = outHtml;
}

function getFilterData() {
	    var itemForm = document.getElementById('tours_itemForm'); // getting the parent container of all the checkbox inputs
        var checkBoxes = itemForm.querySelectorAll('input[type="checkbox"]'); // get all the check box

        let result = [];

        result = [];
        checkBoxes.forEach(item => {
            if (item.checked) {
                result.push(item.id);
            }
        })
        filterToursByValue(result);
}

function clearCheckbox() {
	    var itemForm = document.getElementById('tours_itemForm');
        var checkBoxes = itemForm.querySelectorAll('input[type="checkbox"]')

        checkBoxes.forEach(item => {
            item.checked = '';
        })
}
function getServiceSlug() {
	let typeOfService = "";
  
	const params = new URLSearchParams(window.location.search);
	const slugParam = params.get("slug");
  
	switch (slugParam) {
	  case "dat-ve-may-bay":
		typeOfService = "plane_service";
		break;
	  case "dich-vu-dat-xe":
		typeOfService = "car_service";
		break;
	  case "dang-ki-visa":
		typeOfService = "visa_application";
		break;
	  case "xkld-han-quoc":
		typeOfService = "labor_export_korea";
		break;
	  case "xkld-uzbekistan":
		typeOfService = "labor_export_uzbekistan";
		break;
	  case "xkld-dai-loan":
		typeOfService = "labor_export_dailoan";
		break;
	  case "xkld-nhat-ban":
		typeOfService = "labor_export_japan";
		break;
  
	  default:
		return null;
	}
	return typeOfService;
  }