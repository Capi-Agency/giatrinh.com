function queryBody(router) {
	switch(router) {
	case 'getTourClose':
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
	default:
    	return '';
	}
}