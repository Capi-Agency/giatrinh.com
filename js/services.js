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
		this.count = json.tours_func?.count;
		this.cover = idToImg(json?.cover?.id || "f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9");
		this.type = json.type == 'inland' ? 'Trong nước' : ' Quốc tế';
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

		var transportation = '';

		switch (json.transportation) {
		case 'car':
			transportation = 'Xe ô tô';
			break
		case 'plane':
			transportation = 'Máy bay';
			break
		case 'self-sufficient':
			transportation = 'Chủ động di chuyển';
			break
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
		this.cover = idToImg(json?.cover?.id || "f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9");
	}
}

class Banner {
	constructor(json) {
		this.id = json.id;
		this.url = json.url;
		this.cover = idToImg(json?.cover?.id || "f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9");
	}
}

class Post {
	constructor(json) {
		this.id = json?.id;
		this.author = json?.author;
		this.slug = json?.slug;
		
		this.category = json?.category?.title;
		this.content = json?.content;
		this.title = json?.title;
		this.short_description = json?.short_description;

		this.date_created = changeDate(json?.date_created);
		this.cover = idToImg(json?.cover?.id || "f0436575-a3e0-4e4a-badc-5ea5b7d7e7d9");
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
}

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
		metaHandle(object2);
	});
}

function responseHandle(router, data) {
	switch(router) {
	case Router.getTours:
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
	default:
		return null;
	}
}

function responseMetaHandle(router, data) {
	switch(router) {
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
        cover {
            id
        }
	`;

	switch(router) {
	case Router.getTours:
    	return `
	    	query {
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
			}
		`;
		break;
	case Router.getCloseTour:
    	return `
	    	query {
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
			}
		`;
		break;
	case Router.getDomesticTours:
		return `
			query {
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
			}
		`;
		break;
	case Router.getInternationalTours:
		return `
			query {
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
			}
		`;
		break;
	case Router.getBanners:
		return `
			query {
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
			}
		`;
		break;
	case Router.getLocations:
		return `
			query {
			    locations (page: 1, limit: ${limit},
			    filter: {
			        _and: [
			        	${status},
			        ]
			    }
			    ){
			        ${locations}
			    }
			}
		`;
		break;
	case Router.getPosts:
		return `
			query {
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
	default:
    	return '';
	}
}