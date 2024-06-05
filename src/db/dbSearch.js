let formulateQuery = async (request) => {
	let searchText = request.searchText;
	let andOr = request.searchType;
	let searchFieldList = request.searchFields;
	let query = request.searchQuery;
	let expression = "";
	let searchTextLen = searchText.length;

	if(searchTextLen <= 0) return query;
	let searchList = searchText.split(" ");
	for(let i = 0; i < searchList.length; i++){
		let text = searchList[i];
		let delimiter = "|";
		if(text.length < 1) break;
		if(i === (searchList.length -1)) delimiter = "";
		expression = expression + text + delimiter;
	}

	let search_reg_exp = new RegExp("(" + expression + ")", "gi");
	query["$" + andOr] = [];

	for(let j = 0; j < searchFieldList.length; j++){
		let searchObj = {};
		searchObj[searchFieldList[j]] = search_reg_exp;
		query["$" + andOr].push(searchObj);
	}

	return query;
};
    
export async function mongo_search(request, modelName) {
	let response = { "recordList" : [], "totalRecord": 0 };

	let query = await formulateQuery(request);
	let model = require("../model/model")[modelName];
	response.recordList = await model.find(query);
	response.totalRecord = (response.recordList).length;

	return response;
}

    