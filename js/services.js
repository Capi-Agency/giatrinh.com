const Router = {
	getCloseTour: 0,
	getDomesticTours: 1,

}

function callAPI(router, data, handle) {
	let dataToSend = JSON.stringify({
		query: queryBody(Router.getCloseTour, data),
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
		let tours = data.tours.map((t) => new Tour(t));
		return tours;
		break;
	case Router.getDomesticTours:

	default:
		return null;
	}
}

function queryBody(router, data) {
	switch(router) {
	case Router.getCloseTour:
    	return `query {
		    tours (limit: 8,
		        filter: {
		            _and: [
		                {
		                    status: {
		                        _eq: "published"
		                        }
		                },
		            ]
		        },
		        sort: "-date_created"
		        ){
		        id
		        slug
		        title
		        duration
		        cover {
		            id
		        }
		        type
		        price
		        location {
		            title
		            type
		        }
		        transportation
		        review_func {
		            count
		        }
		        total_rate
		        best_seller
        		food_included
		    }
		}`;
		break;
	case Router.getDomesticTours:
		return `
		query {
			locations( filter:{
				type:{
					_eq: "Trong Nước"
				}
			}){
				id
				title
				date_created
				type
				tours{
					id
					title
					price
					duration
					cover {
						id
					}
				}
			}
			tours_aggregated (
			filter: {
				status: {
					_eq: "published"
				}
			}
			) {
				count {
					id
				}
			}
		}
		`;
	default:
    	return '';
	}
}