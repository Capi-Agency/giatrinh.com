//  =================================================================================================================================
// Model ============================================================================================================================
//  =================================================================================================================================

class Aggregated {
	constructor(json) {
		this.count = json[0].count.id;
	}
}

class Location {
	constructor(json) {
		this.id = json.id;
		this.name = json.name;
		this.slug = json.slug;
		this.regions = json.regions;
		
		this.count = json.tours_func?.count;
		this.cover = idToImg(
			json?.cover?.id || "f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9"
			);
		this.type = (json.type == "inland" ? "Trong nước" : "Quốc tế");
	}
}

class Tour {
	constructor(json) {
		this.id = json.id;
		this.name = json.name;
		this.duration = json.duration;
		this.description = json.description;
		this.short_description = json.short_description;
		this.groupSize = json.group_size;
		this.type = json.type;

		var transportation = "";

		switch (json.transportation) {
		case "car":
			transportation = "Xe ô tô";
			break;
		case "plane":
			transportation = "Máy bay";
			break;
		case "self-sufficient":
			transportation = "Chủ động di chuyển";
			break;
		default:
			break;
		}

		this.transportation = transportation;
		this.location = new Location(json.location);

		this.slug = json.slug;

		this.best_seller = json.best_seller;
		this.food_included = json.food_included;
		this.average_rate = (json.average_rate ? json.average_rate : 0).toFixed(1);
		this.total_review = json.reviews_func.count;

		let date = new Date(json.date_created);

    // dateFormat

		this.date_created = date;

		this.price = new Intl.NumberFormat().format(json.price);
		this.type = json.type;
		this.review = json?.review_func?.count || 0;
		this.cover = idToImg(
			json?.cover?.id || "f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9"
			);
	}
}

class Banner {
	constructor(json) {
		this.id = json.id;
		this.url = json.url;
		this.cover = idToImg(
			json?.cover?.id || "f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9"
			);
	}
}

class Post {
	constructor(json) {
		this.id = json?.id;
		this.content = json?.content;
		this.slug = json?.slug;
		this.title = json?.title;
		this.short_description = json?.short_description;
		this.tags = [];
		if (json?.tags?.length > 0) {
			json?.tags.map((t) => this.tags.push(t.post_tags_id.name));
		}
		this.date_created = changeDate(json?.date_created);
		this.cover = idToImg(
			json?.cover?.id || "f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9"
			);
		this.category = json?.categories[0].post_categories_id;
	}
}

class PostCategory {
	constructor(json) {
		this.id = json.id;
		this.title = json.title;
		this.post_count = json.post.count;
	}
}

class ServicePlane {
	constructor(json) {
		this.title = json.title;
		this.content = json.content;
	}
}

class CompanyInfo {
	constructor(json) {
		this.name = json?.name;
		this.slogan = json?.slogan;
		this.phone1 = json?.phone1;
		this.phone2 = json?.phone2;
		this.email1 = json?.email1;
		this.email2 = json?.email2;
		this.description = json?.description;
		this.short_description = json?.short_description;
		this.address = json?.address;
	}
}

//  =================================================================================================================================
// Service ============================================================================================================================
//  =================================================================================================================================

const Router = {
	getCloseTour: 0,
	getDomesticTours: 1,
	getInternationalTours: 2,
	getBanners: 3,
	getLocations: 4,
	getPosts: 5,
	getTours: 6,
	getCompanyInfo: 7,
	getServices: 8,
	getServiceDetail: 9,
	getPostDetail: 10,
	getTourDetail: 11,
};

function callAPI(router, data, handle, metaHandle) {
	let dataToSend = JSON.stringify({
		query: queryBody(router, data),
	});
	let settings = {
		url: api,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: dataToSend,
	};

	$.ajax(settings).done(function (response) {
		let responseData = response.data;
		let object = responseHandle(router, responseData);
		handle(object);
		let object2 = responseMetaHandle(router, responseData);
		if (metaHandle) {
			metaHandle(object2);
		}
	});
}

function responseHandle(router, data) {
	switch(router) {
	case Router.getTours:
		return data.tours.map((t) => new Tour(t));
		break;
	case Router.getTourDetail:
		return data.tours.map((t) => new Tour(t));
		break;
	case Router.getCloseTour:
		return data.tours.map((t) => new Tour(t));
		break;
	case Router.getDomesticTours:
		return data.tours.map((t) => new Tour(t));
		break;
	case Router.getInternationalTours:
		return data.tours.map((t) => new Tour(t));
		break;
	case Router.getBanners:
		return data.banners.map((t) => new Banner(t));
		break;
	case Router.getLocations:
		return data.locations.map((t) => new Location(t));
		break;
	case Router.getPosts:
		return data.posts.map((t) => new Post(t));
		break;
	case Router.getCompanyInfo:
		let object = new CompanyInfo(data.company_information);
		return object;
		break;
	default:
		return null;
	}
}

function responseMetaHandle(router, data) {
	switch (router) {
	case Router.getTours:
		let meta = new Aggregated(data.tours_aggregated);
		return meta;
		break;
	default:
		return null;
	}
}

function queryBody(router, data) {
	let limit = data ? (data.limit ? data.limit : 10) : 10;
	let page = data ? (data.page ? data.page : 1) : 1;

	let status = `
	{
		status: {
			_eq: "published"
		}
	}
	`;

	let tours = `
	id
	slug
	name
	duration
	cover {
		id
	}
	price
	location {
		name
		type
	}
	short_description
	transportation
	reviews_func {
		count
	}
	average_rate
	best_seller
	food_included
	`;

	let posts = `
	id
	title
	date_created
	short_description
	slug
	categories {
		post_categories_id {
			id
			name
		}
	}
	cover {
		id
	}
	`;

	let locations = `
	id
	name
	tours_func {
		count
	}
	slug
	type
	regions
	cover {
		id
	}
	`;

	let company_information = `
	name
	slogan
	description
	short_description
	email1
	email2
	address
	phone1
	phone2
	`;

	switch(router) {
	case Router.getTours:

		if (data.searchDurations.length != 0 ) {
			var filterString = '_or: [';
			data.searchDurations.forEach(function(duration){
				if (duration != 'long' || duration != 'long') {
					filterString += `
					{
						duration: {
							_eq: "${duration}"
						}
					}
					`; 
				}
			});
			filterString += ']';
			status += `,{
				${filterString}
			}`;
		}

		if (data.searchLocations.length != 0 ) {
			var filterString = '_or: [';
			data.searchLocations.forEach(function(location){
				filterString += `
				{
					location: {
						name: {
							_eq: "${location}"
						}
					}
				}
				`; 
			});
			filterString += ']';
			status += `,{
				${filterString}
			}`;
		}

		return `query {
			tours (page: ${page} , limit: ${limit},
			filter: {
				_and: [
				${status},
				]
			},
			sort: "-date_created"
			){
				${tours}
			}
			tours_aggregated (
			filter: {
				_and: [
				${status},
				]
			}){
				count {
					id
				}
			}
		}`;
		break;
	case Router.getTourDetail:
		let slug = data.slug;

		return `query {
			tours (limit: ${limit},
			filter: {
				_and: [
					${status},
					{
		                slug: {
		                    _eq: "${slug}"
		                }
		            }
				]
			},
			sort: "-date_created"
			){
				${tours}
				description
			}
		}`;
		break;
	case Router.getCloseTour:
		return `query {
			tours (limit: ${limit},
			filter: {
				_and: [
				${status},
				]
			},
			sort: "-date_created"
			){
				${tours}
			}
		}`;
		break;
	case Router.getDomesticTours:
		return `query {
			tours (limit: ${limit},
			filter: {
				_and: [
				${status},
				{
					location: {
						type: {
							_eq: "inland"
						}
					}
				}
				]
			},
			sort: "-date_created"
			){
				${tours}
			}   
		}`;
		break;
	case Router.getInternationalTours:
		return `query {
			tours (limit: ${limit},
			filter: {
				_and: [
				${status},
				{
					location: {
						type: {
							_neq: "inland"
						}
					}
				}
				]
			},
			sort: "-date_created"
			){
				${tours}
			}   
		}`;
		break;
	case Router.getBanners:
		return `query {
			banners (limit: 2,
			filter: {
				_and: [
				${status},
				]
			},
			sort: "-date_created"
			){
				id
				name
				cover {
					id
				}
			}
		}`;
		break;
	case Router.getLocations:
		return `query {
			locations (page: 1, limit: ${limit},
			filter: {
				_and: [
				${status},
				]
			}
			){
				${locations}
			}
		}`;
		break;
	case Router.getPosts:
		return `query {
			posts (page: 1, limit: ${limit},
			filter: {
				_and: [
				${status},
				]
			}
			){
				${posts}
			}
		}
		`;
	case Router.getCompanyInfo:
		return `
		query{
			company_information {
				${company_information}
			}
		}
		`;
	case Router.getPostDetail:
		return `
		query {
			posts(,
			filter: {
				_and: [
				{
					status: {
						_eq: "published"
					}
				},
				{
					slug:{
						_eq: "${data.slug}"
					}
				}
				]
			}
			){
				id
				date_created
				title
				short_description
				slug
				tags{
					post_tags_id{
						name
					}
				}
				content
				cover {
					id
				}
				categories{
					post_categories_id{
						name
					}
				}
			}
		}
		`;
	default:
		return "";
	}
}
