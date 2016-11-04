'use strict';
import config from '../configs/config.json'
module.exports = {
  getImage: function(img_uri){
    return config.IMG_URL+img_uri;
  },
  shotImage: function(shot) {
    var uri = shot.images.normal ? shot.images.normal : shot.images.teaser;
    return {uri};
  },
  authorAvatar: function(player) {
    var uri;
    if (player) {
      uri = player.avatar_url;
      return {uri};
    } else {
      // uri = require('../../img/AuthorAvatar.png');//默认头像
      return uri;
    }
  }
}
