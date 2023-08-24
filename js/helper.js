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
			searchTerm = event.target.value.toLowerCase().trim();
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
		.filter((location) => location.name.toLowerCase().includes(searchTerm))
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
	return daysDifference;
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
