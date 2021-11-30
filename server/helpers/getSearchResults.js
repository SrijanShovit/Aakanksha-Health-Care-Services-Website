// gets search results for a collection(Products, Camps, Doctors) and returns search result(Object)
const Product = require('../models/Product');

const getSearchResults = async (body, model) => {
  if (!body.hasOwnProperty('searchQuery')) {
    return { message: 'Please give {searchQuery}.' };
  }

  // If page is <= 0
  if (body.page <= 0) {
    return { message: 'Page value should be greater than 0.' };
  }

  let { searchQuery } = body,
    page = body.page || 1,
    pageLimit = body.pageLimit || 10;

  let query = model
    .find({
      $text: { $search: `${searchQuery}` },
    })
    .skip(pageLimit * (page - 1))
    .limit(pageLimit);

  if (model === Product) {
    query.populate('localStore', 'name address');
  }

  let results = await query;

  return {
    page,
    pageLimit,
    totalResults: results.length,
    results,
  };
};

module.exports = getSearchResults;
