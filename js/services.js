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
    this.type = json.type == "inland" ? "Trong nước" : "Quốc tế";
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
      json?.tags.map((t) => this.tags.push(t.post_tags_id?.name));
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
    this.name = json.name;
    this.slug = json.slug;
  }
}

class ServiceType {
  constructor(json) {
	this.id = json?.id
    this.name = json?.name;
	this.slug = json?.slug;
    this.cover = idToImg(
      json?.cover?.id || "f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9"
    );
	this.count = json?.detail_func.count
  }
}
class ServiceDetail{
	constructor(json){
		this.id = json?.id;
		this.date_created = changeDate(json?.date_created);
		this.price = json?.price.toLocaleString()
		this.title = json?.title;
		this.short_description = json?.short_description;
		this.status = json?.status;
		this.slug = json?.slug;
		this.content = json?.content;
		this.cover = idToImg(
			json?.cover?.id || "f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9"
		  );
		this.serviceTypeName = json?.type?.name || "danh mục chưa xác định";
		this.serviceTypeSlug = json?.type?.slug || "";
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
    this.header_img = idToImg(json?.header_img.id);
  }
}

//  =================================================================================================================================
// Service ============================================================================================================================
//  =================================================================================================================================

const Router = {
// common
	getBanners: 1,
	getLocations: 2,
	getCompanyInfo: 3,
	sendContact: 4,

// tours
	getCloseTour: 5,
	getDomesticTours: 6,
	getInternationalTours: 7,
	getTours: 8,
	getTourDetail: 9,

//   posts
	getPosts: 10,
	getPostDetail: 11,
	getPostsPage: 12,

// services
	getAllServiceTypes: 13,
	getAllServiceDetails: 14,
	getOneServiceDetail: 15,
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
  switch (router) {
    case Router.getTours:
      return data.tours.map((t) => new Tour(t));
      break;
	case Router.getTourDetail:
	  return new Tour(data.tours[0])
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
    case Router.getPostDetail:
      return new Post(data.posts[0]);
    case Router.getPostsPage:
		let categories = data.post_categories.map(c=> new PostCategory(c))
		categories = [ {id: -1, name: "Tất cả", slug:"tat-ca"},...categories]
		let posts = data.posts.map(p=> new Post(p))
      return {posts, categories};
	case Router.getAllServiceTypes:
		return data.service_types.map(t=> new ServiceType(t));
	case Router.getAllServiceDetails:
		return data.service_detail.map(t=> new ServiceDetail(t));
	case Router.getOneServiceDetail:
		return new ServiceDetail(data.service_detail[0]);
    default:
      return null;
  }
}

function responseMetaHandle(router, data) {
  switch (router) {
    case Router.getTours:
      return new Aggregated(data.tours_aggregated);
	case Router.getPostsPage:
	  return new Aggregated(data.posts_aggregated);
	case Router.getAllServiceDetails:
	 return new Aggregated(data.service_detail_aggregated);
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

	let postDetail = `
	tags{
		post_tags_id{
			id
			name
		}
	}
	content
	categories{
		post_categories_id{
			id
			name
			slug
		}
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
	header_img{
		id
	}
	`;
  	let service_detail = `
	id
	short_description
	date_created
	slug
	title
	content
	price
	status
	cover {
		id
	}
	type{
		id
		slug
		name
	}
	`;
	
	let serviceSort = data?.sortAsc ? `,sort:["price"]`:`,sort:["-price"]`;
  switch (router) {
    case Router.getTours:
      if (data.searchDurations.length != 0) {
        var filterString = "_or: [";
        data.searchDurations.forEach(function (duration) {
          if (duration != "long" || duration != "long") {
            filterString += `
					{
						duration: {
							_eq: "${duration}"
						}
					}
					`;
          }
        });
        filterString += "]";
        status += `,{
				${filterString}
			}`;
      }

      if (data.searchLocations.length != 0) {
        var filterString = "_or: [";
        data.searchLocations.forEach(function (location) {
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
        filterString += "]";
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
			},
			sort: "-date_created"
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
    case Router.getPostsPage:
		let categoryListString = '';
		if (data.needCategory) {
			categoryListString = `,
			post_categories{
				id
				name
				slug
			}`;
		}
		let categoryString = '';
		if (data.category != -1) {
			categoryString = `
				, {
					categories: {
						post_categories_id: {
							id: {
								_eq: ${data.category}
							}
						}
					}
				}
			`;
		}
      return `query {
		posts(page: ${data.page}, limit: ${data.limit},
			filter: {
				_and: [
					${status}
					${categoryString}
				]
			},
			sort: "-date_created"
			){
				${posts}
				${postDetail}
			}
			${categoryListString},
			posts_aggregated (
				filter: {
					_and: [
					${status}
					${categoryString}
					]
				}){
					count {
						id
					}
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
    case Router.getAllServiceTypes:
		return `
		query {
			service_types(
				sort:["name"]
			){
				id
				cover{
					id
				}
				name
				slug
				detail_func{
					count
				}
			}
		}
		`;
	case Router.getAllServiceDetails:
		let serviceFilter = "";
		if(data.typeSlug.length > 0){
			serviceFilter = `
			,filter:{
				_and:[
					{
						type:{
							slug:{
								_in: [${data?.typeSlug}]
							}
						}
					}
				]
			}
			`
		}
		return `
		query {
			service_detail(
				limit:6,
				page:${data?.page||1}
				${serviceSort}
				${serviceFilter}
				){
				${service_detail}
			}
			service_detail_aggregated (
				${serviceSort}
				${serviceFilter}){
				count{
					id
				}
			}
		}
		`;
	case Router.getOneServiceDetail:
		return `
		query {
			service_detail(
				filter:{
					slug: {
					   _eq: "${data.slug}"
					}
				}
			){
				${service_detail}
			}
		}
		`
    case Router.sendContact:
      return `
		mutation {
			create_contact_us_item (data:
				{
				user_name: "${data.name}",
				title: "${data.title}",
				user_email: "${data.email}",
				content: "${data.content}"},
				){
					user_name
					user_email
					content
					title
			}
		}
		`;
    default:
      return "";
  }
}
