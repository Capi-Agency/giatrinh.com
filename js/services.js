const Router = {
	getCloseTour: 0,
	getDomesticTours: 1,
	getInternationalTours: 2,
	getBanners: 3,
	getLocations: 4,
}

function callAPI(router, data, handle) {
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
	});
}

function responseHandle(router, data) {
	switch(router) {
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
	default:
		return null;
	}
}

function queryBody(router, data) {
	let limit = data ? (data.limit ? data.limit : 10) : 8;

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
        transportation
        reviews_func {
            count
        }
        average_rate
        best_seller
		food_included
	`;


	switch(router) {
	case Router.getCloseTour:
    	return `
	    	query {
			    tours (limit: `+limit+`,
			        filter: {
			            _and: [
			            	`+status+`,
			            ]
			        },
			        sort: "-date_created"
			    ){
			    	`+tours+`
			    }
			}
		`;
		break;
	case Router.getDomesticTours:
		return `
			query {
			    tours (limit: `+limit+`,
				    filter: {
				        _and: [
				            `+status+`,
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
			        `+tours+`
			    }   
			}
		`;
		break;
	case Router.getInternationalTours:
		return `
			query {
			    tours (limit: `+limit+`,
				    filter: {
				        _and: [
				            `+status+`,
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
			        `+tours+`
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
			                `+status+`,
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
			    locations (page: 1, limit: `+limit+`,
			    filter: {
			        _and: [
			            `+status+`,
			        ]
			    }
			    ){
			        id
			        name
			        tours_func {
			            count
			        }
			        cover {
			            id
			        }
			    }
			}
		`;
		break;
	default:
    	return '';
	}
}