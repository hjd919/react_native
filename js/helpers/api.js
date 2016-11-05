"use strict";

var API_URL = "http://bookpp.applinzi.com/api/index.php/";
// TODO 可以在此做接口签名

// 通过获取数据
function _getData(URL) {
  return fetch(URL).then((response) => response.json());
}

module.exports = {
  getShotsByType: function(type, pageNumber) {
    var URL = API_URL + "shots/?list=" + type;
    if (pageNumber) {
      URL += "&per_page=10&page=" + pageNumber;
    }

    return _getData(URL);
  },
  getResources: function(url) {
    return _getData(API_URL+url);
  }
};
