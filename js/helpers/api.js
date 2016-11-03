"use strict";

var API_URL = "http://monitor.adyouzi.cn/";
// TODO 可以在此做接口签名

function fetchData(URL) {
  return fetch(URL, {
    headers: {
      // "Authorization": "Bearer " + ACCESS_TOKEN
    }
  }).then((response) => response.json())
}

module.exports = {
  getShotsByType: function(type: string, pageNumber: ?number): ?Object {
    var URL = API_URL + "shots/?list=" + type;
    if (pageNumber) {
      URL += "&per_page=10&page=" + pageNumber;
    }

    return fetchData(URL);
  },
  getResources: function(url: ?string): ?Object {
    return fetchData(API_URL+url);
  }
};
