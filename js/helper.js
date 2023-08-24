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