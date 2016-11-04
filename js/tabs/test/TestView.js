import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import {
    loadConfig
} from '../../actions';
import TestList from './TestList';
import TestCell from './TestCell';
// import MyButton from '../../common/MyButton';

class TestView extends Component {
    // 渲染列表项
    renderRow(row){
      return (
        <TestCell
          row={row}
        />
      );
    }
    // 刷新列表事件
    onRefresh(){
      this.props.dispatch(fetchProductsIfNeeded());
    }
    // 渲染页面
    render() {
        let content = <TestList
          data={this.props.products}
          renderRow={this.renderRow}
          onRefresh={this.onRefresh}
        />;
        return (<View style={styles.container}>{content}</View>);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

function select(store) {
    return {
        products: [{
            "id": "3",
            "name": "高单价",
            "sub_name": "关注微信到账1元",
            "content": "<p><b><font color=\"#808080\" style=\"background-color: rgb(0, 255, 255);\" face=\"楷体\">观看动态图赚钱教程，按下列方法进行操作，几分钟试试就知道真假！不<span style=\"line-height: 1.8;\">赚钱我发红包给你！</span></font></b></p><p><b><font color=\"#808080\" face=\"宋体\">方法一：点击最下方分享按钮，分享至任意微信好友或者朋友圈，打开你分享的链接，按提示，简单三步完成安装，微信登陆，即可领取1元现金到微信钱包！</font></b></p><p><b><font color=\"#808080\" face=\"宋体\">方法二：点击最下方二维码图片保存到手机相册，打开微信扫一扫，右上角选择相册按钮，找到二维码扫描安装，同样领取1元现金到微信钱包！</font></b></p><p style=\"text-align: center; \"><img src=\"http://xz-yzzc.img-cn-beijing.aliyuncs.com/static/F9/5652929465286434.gif\" style=\"max-width: 100%; float: none;\" class=\"\"><br></p><p><br></p>",
            "logo": "images/C4/u697319598,701563172fm21gp01.jpg",
            "qrcode": "images/66/11.22_(2).jpg",
            "product_url": "http://dwz.cn/4apA1Q",
            "content_url": "http://bookpp.applinzi.com/api/index.php/product/content/3"
        }, {
            "id": "4",
            "name": "日赚50元",
            "sub_name": "两千万用户正在赚钱",
            "content": "<p><b><font color=\"#808080\" style=\"background-color: rgb(0, 255, 255);\">观看动态图赚钱教程，按下列方法进行操作，几分钟试试就知道真假！不赚钱我发红包给你！</font></b></p><p><b><font color=\"#808080\">方法一：点击最下方分享按钮，分享至任意微信好友或者朋友圈，打开你分享的链接，按提示，简单三步完成安装，微信登陆，即可领取1元现金到微信钱包！</font></b></p><p><b><font color=\"#808080\">方法二：点击最下方二维码图片保存到手机相册，打开微信扫一扫，右上角选择相册按钮，找到二维码扫描安装，同样领取1元现金到微信钱包！</font></b></p><p style=\"text-align: center; \"><img src=\"http://xz-yzzc.img-cn-beijing.aliyuncs.com/static/0C/5638803166802973.gif\" style=\"max-width: 100%; float: none;\" class=\"\"><br></p><p><br></p>",
            "logo": "images/51/2015123114348.jpg",
            "qrcode": "images/59/7794341144266293662.jpg",
            "product_url": "http://qianka.com/shoutu?u=39209055",
            "content_url": "http://bookpp.applinzi.com/api/index.php/product/content/4"
        }, {
            "id": "5",
            "name": "最轻松赚钱",
            "sub_name": "天天躺着就能赚钱",
            "content": "<p><font color=\"#808080\"><b style=\"background-color: rgb(0, 255, 255);\">观看动态图赚钱教程，按下列方法进行操作，几分钟试试就知道真假！不赚钱我发红包给你！</b></font></p><p><font color=\"#808080\"><b>方法一：点击最下方分享按钮，分享至任意微信好友或者朋友圈，打开你分享的链接，按提示，简单三步完成安装，微信登陆，即可领取1元现金到微信钱包！</b></font></p><p><font color=\"#808080\"><b>方法二：点击最下方二维码图片保存到手机相册，打开微信扫一扫，右上角选择相册按钮，找到二维码扫描安装，同样领取1元现金到微信钱包！</b></font></p><p><font color=\"#808080\"><b>除了自己做任务赚钱，邀请好友，好友的好友做任务都有提成赚，真正的躺着赚钱不要太容易</b></font></p><p style=\"text-align: center; \"><img src=\"http://xz-yzzc.img-cn-beijing.aliyuncs.com/static/1A/29310976224951446.gif\" style=\"max-width:100%;\"><br></p><p><br></p>",
            "logo": "images/2B/76505BD9-468E-4A03-8BAD-A3A816616C1B.jpg",
            "qrcode": "images/AA/11.22.jpg",
            "product_url": "http://m.hongbaodaren.com/?u=2135596",
            "content_url": "http://bookpp.applinzi.com/api/index.php/product/content/5"
        }, {
            "id": "15",
            "name": "小鱼",
            "sub_name": "小鱼",
            "content": "<p><b><font color=\"#808080\" style=\"background-color: rgb(0, 255, 255);\">观看动态图赚钱教程，按下列方法进行操作，几分钟试试就知道真假！不赚钱我发红包给你！</font></b></p><p><b><font color=\"#808080\">方法一：点击最下方分享按钮，分享至任意微信好友或者朋友圈，打开你分享的链接，按提示，简单三步完成安装，微信登陆，即可领取1元现金到微信钱包！</font></b></p><p><b><font color=\"#808080\">方法二：点击最下方二维码图片保存到手机相册，打开微信扫一扫，右上角选择相册按钮，找到二维码扫描安装，同样领取1元现金到微信钱包！</font></b></p><p style=\"text-align: center; \">小鱼<img src=\"http://xz-yzzc.img-cn-beijing.aliyuncs.com/static/1B/5859808819368482.gif\" style=\"text-align: left; max-width: 100%;\"></p><p><br></p>",
            "logo": "images/C9/29126.jpg",
            "qrcode": "images/EC/5228225768658398191.jpg",
            "product_url": "http://wx.xy599.com/share.php?id=10241672",
            "content_url": "http://bookpp.applinzi.com/api/index.php/product/content/15"
        }, {
            "id": "11",
            "name": "掉钱眼",
            "sub_name": "掉钱眼",
            "content": "<p><b><font color=\"#808080\" style=\"background-color: rgb(0, 255, 255);\">观看动态图赚钱教程，按下列方法进行操作，几分钟试试就知道真假！不赚钱我发红包给你！</font></b></p><p><b><font color=\"#808080\">方法一：点击最下方分享按钮，分享至任意微信好友或者朋友圈，打开你分享的链接，按提示，简单三步完成安装，微信登陆，即可领取1元现金到微信钱包！</font></b></p><p><b><font color=\"#808080\">方法二：点击最下方二维码图片保存到手机相册，打开微信扫一扫，右上角选择相册按钮，找到二维码扫描安装，同样领取1元现金到微信钱包！</font></b></p><p style=\"text-align: center; \"><img src=\"http://xz-yzzc.img-cn-beijing.aliyuncs.com/static/62/09943558066152036.gif\" style=\"max-width: 100%;\"></p><p><br></p>",
            "logo": "images/7E/45f612098a3baf0e360d439126c9a383.jpg",
            "qrcode": "images/61/595934146373473491.jpg",
            "product_url": "http://diaoqianyaner.com.cn/home.html?u=6294700",
            "content_url": "http://bookpp.applinzi.com/api/index.php/product/content/11"
        }, {
            "id": "7",
            "name": "试玩团",
            "sub_name": "试玩就有钱",
            "content": "<p><b><font color=\"#808080\" style=\"background-color: rgb(0, 255, 255);\">观看动态图赚钱教程，按下列方法进行操作，几分钟试试就知道真假！不赚钱我发红包给你！</font></b></p><p><b><font color=\"#808080\">方法一：点击最下方分享按钮，分享至任意微信好友或者朋友圈，打开你分享的链接，按提示，简单三步完成安装，微信登陆，即可领取1元现金到微信钱包！</font></b></p><p><b><font color=\"#808080\">方法二：点击最下方二维码图片保存到手机相册，打开微信扫一扫，右上角选择相册按钮，找到二维码扫描安装，同样领取1元现金到微信钱包！</font></b></p><p style=\"text-align: center; \"><img src=\"http://xz-yzzc.img-cn-beijing.aliyuncs.com/static/25/12433373462408781.gif\" style=\"max-width: 100%;\"></p><p><br></p>",
            "logo": "images/AF/169678215940253783.jpg",
            "qrcode": "images/3C/59237101969474312.jpg",
            "product_url": "http://api2.ppyaoqing.cn/app/views/down-invite.html?inviter=2024914",
            "content_url": "http://bookpp.applinzi.com/api/index.php/product/content/7"
        }, {
            "id": "6",
            "name": "PP红包",
            "sub_name": "还有红包抢",
            "content": "<p><b><font color=\"#808080\" style=\"background-color: rgb(0, 255, 255);\">观看动态图赚钱教程，按下列方法进行操作，几分钟试试就知道真假！不赚钱我发红包给你！</font></b></p><p><b><font color=\"#808080\">方法一：点击最下方分享按钮，分享至任意微信好友或者朋友圈，打开你分享的链接，按提示，简单三步完成安装，微信登陆，即可领取1元现金到微信钱包！</font></b></p><p><b><font color=\"#808080\">方法二：点击最下方二维码图片保存到手机相册，打开微信扫一扫，右上角选择相册按钮，找到二维码扫描安装，同样领取1元现金到微信钱包！</font></b></p><p style=\"text-align: center; \"><img src=\"http://xz-yzzc.img-cn-beijing.aliyuncs.com/static/A4/8451706245541573.gif\" style=\"max-width: 100%;\"></p><p><br></p>",
            "logo": "images/8C/011a27b2c16b4f25e89dae59ea354aac.jpg",
            "qrcode": "images/57/479406191522611427.jpg",
            "product_url": "http://11.pphongbao.com/?r=828308342",
            "content_url": "http://bookpp.applinzi.com/api/index.php/product/content/6"
        }, {
            "id": "8",
            "name": "小薇助手",
            "sub_name": "小薇",
            "content": "<p><b><font color=\"#808080\" style=\"background-color: rgb(0, 255, 255);\">观看动态图赚钱教程，按下列方法进行操作，几分钟试试就知道真假！不赚钱我发红包给你！</font></b></p><p><b><font color=\"#808080\">方法一：点击最下方分享按钮，分享至任意微信好友或者朋友圈，打开你分享的链接，按提示，简单三步完成安装，微信登陆，即可领取1元现金到微信钱包！</font></b></p><p><b><font color=\"#808080\">方法二：点击最下方二维码图片保存到手机相册，打开微信扫一扫，右上角选择相册按钮，找到二维码扫描安装，同样领取1元现金到微信钱包！</font></b></p><p style=\"text-align: center; \"><img src=\"http://xz-yzzc.img-cn-beijing.aliyuncs.com/static/6E/15233261976391077.gif\" style=\"max-width:100%;\"><br></p><p><br></p>",
            "logo": "images/F1/u832459421,354182507fm21gp0.jpg",
            "qrcode": "images/C0/252818611429544585.jpg",
            "product_url": "http://www.uxiaowei.com/#/tu?pid=2583852",
            "content_url": "http://bookpp.applinzi.com/api/index.php/product/content/8"
        }, {
            "id": "9",
            "name": "玩否",
            "sub_name": "玩否",
            "content": "<p><span style=\"background-color: rgb(0, 255, 255);\"><font color=\"#808080\" face=\"楷体\"><b>观看动态图赚钱教程，按下列方法进行操作，几分钟试试就知道真假！不赚钱我发红包给你！</b></font></span></p><p><font face=\"宋体\" color=\"#808080\"><b>方法一：点击最下方分享按钮，分享至任意微信好友或者朋友圈，打开你分享的链接，按提示，简单三步完成安装，微信登陆，即可领取1元现金到微信钱包！</b></font></p><p><font face=\"宋体\" color=\"#808080\"><b>方法二：点击最下方二维码图片保存到手机相册，打开微信扫一扫，右上角选择相册按钮，找到二维码扫描安装，同样领取1元现金到微信钱包！</b></font></p><p style=\"text-align: center; \"><img src=\"http://xz-yzzc.img-cn-beijing.aliyuncs.com/static/EA/2449483263771981.gif\" style=\"max-width:100%;\"><br></p><p><br></p>",
            "logo": "images/19/u2080430319,417623357fm11gp0.jpg",
            "qrcode": "images/01/11.221.jpg",
            "product_url": "http://m.vfou.com/share/vfou_weixin_2.do?uid=1368986&from=singlemessage&isappinstalled=0",
            "content_url": "http://bookpp.applinzi.com/api/index.php/product/content/9"
        }, {
            "id": "10",
            "name": "热葫芦",
            "sub_name": "热葫芦",
            "content": "<p><b><font color=\"#808080\"><span style=\"line-height: 1.8; background-color: rgb(0, 255, 255);\">观看动态图赚钱教程，按下列方法进行操作，几分钟试试就知道真假！不赚钱我发红包给你！</span><br></font></b></p><p><b><font color=\"#808080\">方法一：点击最下方分享按钮，分享至任意微信好友或者朋友圈，打开你分享的链接，按提示，简单三步完成安装，微信登陆，即可领取1元现金到微信钱包！</font></b></p><p><b><font color=\"#808080\">方法二：点击最下方二维码图片保存到手机相册，打开微信扫一扫，右上角选择相册按钮，找到二维码扫描安装，同样领取1元现金到微信钱包！</font></b></p><p style=\"text-align: center; \"><img src=\"http://xz-yzzc.img-cn-beijing.aliyuncs.com/static/D1/9752764741424471.gif\" style=\"max-width: 100%;\"></p><p><br></p>",
            "logo": "images/9D/e3dd7f0d37fef40315321668bc668ea8.jpg",
            "qrcode": "images/D1/433652271539533718.png",
            "product_url": "http://m.rhl3.cn?u=2473434",
            "content_url": "http://bookpp.applinzi.com/api/index.php/product/content/10"
        }]
    };
}


export default connect(select)(TestView);
