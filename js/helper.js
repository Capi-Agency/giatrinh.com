// biến toàn cục
let domain = "https://giatrinh.com";

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

function pageToPostList(page, totalPage) {
	var html = "";
	for (var i = 1; i <= totalPage; i++) {
		if (i == page) {
			html = html + `<div class="col-auto"> <button class="btn size-40 flex-center rounded-full bg-dark-1 text-white" onclick="getPostPage(` + i + `)" >` + i + `</button> </div>`;
		} else {
			html += `<div class="col-auto"> <button class="btn size-40 flex-center rounded-full" onclick="getPostPage(` + i + `)" >` + i + `</button> </div>`;
		}
	}
	return html;
}
function pageToServiceList(page, totalPage){
	var html = "";
	for (var i = 1; i <= totalPage; i++) {
		if (i == page) {
			html = html + `<div class="col-auto"> <button class="btn size-40 flex-center rounded-full bg-dark-1 text-white" onclick="getServicesPage({page:${i}},true)" >` + i + `</button> </div>`;
		} else {
			html += `<div class="col-auto"> <button class="btn size-40 flex-center rounded-full" onclick="getServicesPage({page:${i}})" >` + i + `</button> </div>`;
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

			searchTerm = changeString(event.target.value.trim().length == 0);

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
			let locationParam = `location=${searchInput.value.trim().length == 0}`;
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
	if(document.getElementById('tours_location_in') && document.getElementById('tours_location_out')){
	  	document.getElementById('tours_location_in').innerHTML = inHtml;
		document.getElementById('tours_location_out').innerHTML = outHtml;
	}
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
// Services' page helpers
function clearServiceFilter(){
	getServicesPage({ typeSlug:[]}, false);
	var checkBoxes = document.querySelectorAll('input')
	checkBoxes.forEach(item => {
		item.checked = '';
	})
}
function filterByTypeSlug(slug){
	const slugString = JSON.stringify(slug);
	let index = typeSlugtoFilter.indexOf((slugString))
	
	if(index == -1){
		typeSlugtoFilter.push(slugString);
	}else{
		typeSlugtoFilter = typeSlugtoFilter.filter(slug => slug != slugString);
	}

	getServicesPage({ typeSlug: typeSlugtoFilter}, true);
}
function sortByPrice({sortAsc}){
	getServicesPage({sortAsc},true)
}
// Contact page helpers
function sendContactFormValues(title){
	const form = document.querySelector("#form");
	const nameEl = document.querySelector("#js-form-name");
	const emailEl = document.querySelector("#js-form-email");
	const titleEl = document.querySelector("#js-form-title");
	const contentEl = document.querySelector("#js-form-content");
	const nameValue = document.querySelector("#js-form-name-value");
	const emailValue = document.querySelector("#js-form-email-value");
	const titleValue = document.querySelector("#js-form-title-value");

	titleValue.value = title || "";
	
	const contentValue = document.querySelector("#js-form-content-value");

	const emailError = document.getElementById('email-error');
	const nameError = document.getElementById('name-error');
	const titleError = document.getElementById('title-error');
	const contentError = document.getElementById('content-error');

	if(!form || !nameEl || !emailEl || !titleEl || !contentEl) return

	const ElArray = [nameEl,emailEl,titleEl,contentEl]
	const ValueArray = [nameValue,emailValue,titleValue,contentValue]
	const ErrorElArray = [nameError,emailError,titleError,contentError]

	document.addEventListener("DOMContentLoaded", function() {
		window.scroll(0,200)
	});

	const resetForm = function(){
 		for(let i=0; i <= 3; i++){
			ValueArray[i].value = "";
			ErrorElArray[i].innerHTML = "";
			ValueArray[i].style.outline = "1px solid #ccc";
		}
	}

	let isValid = true;
	for(let i=0; i <= 3; i++){
		ElArray[i].addEventListener("input",function(e){
			e.target.style.outline =  e.target.value.trim().length < 10 ? "1.5px solid #d93025" : "1px solid #008009"
			ErrorElArray[i].innerHTML = e.target.value.trim().length < 10 ? 'Vui lòng nhập trên 10 kí tự!':''
			isValid = e.target.value.trim().length == 0 ? false : true
		})
	}
	form.addEventListener("submit",function(e){
		e.preventDefault();
		if(isValid){
				let router = Router.sendContact;
				callAPI(
					router,{
						name: nameValue.value,
						email: emailValue.value,
						title: title || titleValue.value,
						content: contentValue.value,
					},
					function(){
						resetForm();
						showToastMsg();
					}	
				)
		} 
	})
}
function sendContactEmailAddress(){
	const contactEmailAddress = document.querySelector("#contact_email_address").value;
	data = {
		name: "<Không xác định>",
		email: contactEmailAddress,
		title: "Đăng ký email nhận tư vấn",
		content: `Khách hàng cần tư vấn dịch vụ qua email: ${contactEmailAddress}`,

	}

	callAPI(Router.sendContact, data, function(){
		showToastMsg();
		document.querySelector("#contact_email_address").value = "";
	} )
}
function showToastMsg(){
	document.querySelector("#toast-msg").style.display = "block"
	document.querySelector("#close-btn").onclick = ()=>{
		document.querySelector("#toast-msg").style.display = "none"
	}
	setTimeout(()=>{
		document.querySelector("#toast-msg").style.display = "none"
	},5000)
}
