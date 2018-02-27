var AES = require("crypto-js/aes");
var UTF8 = require("crypto-js/enc-utf8")
var BASE64 = require("crypto-js/enc-base64")
var PKCS7 = require("crypto-js/pad-pkcs7")
var ECB = require("crypto-js/mode-ecb");
var RSA = require('./wxapp_rsa.js');

import Storage from 'utils/storage';

var STORE = new Storage();

var RSA_PUB_KEY = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCzbwReUd2Ep1Qdtd7R6SdvrvQr
ZQYule5bIkPhVXaKaKgn7z2TYgyh2yXtj0jFMkBgUPDJ4nOepIa7xmHg9+bQv7JL
dSpvPWVCCLSs3kpAOsKs70G/4y9dNmjajsDjKjZsxxvZDrtfTcFH4AAWOKvW229b
o8HalBs+o6q36WamLwIDAQAB
-----END PUBLIC KEY-----
`
import {
  JSEncrypt
} from './jsencrypt';
import './extend'


/**
 *   随机生成对应长度的字符串
 * @param {Number} length 生产的字符串长度
 * @returns {String} str
 */
function genRandomString(length = 16) {
  var str = [];
  var strs = "0123456789abcdefghijklnmopqrstuvwxyz";
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * strs.length);
    str.push(strs[index]);
  }
  return str.join('');

}

/**
 * 请求参数加密
 * @param {String |Object } reqContent 请求参数
 */
// 
// 

//6、放入key 7、请求matrix
// 8、获取返回报文后，用RSA_PUB_KEY对sign验签，签名内容为原AES_KEY。
function encrypt(
  data = {},
) {


  // 1、前端随机生成16个字符，作为AES_KEY 
  const AES_KEY = genRandomString();
  // 2、将AES_KEY、data转为UTF-8编码字节数组
  const AES_KEY_UTF8 = UTF8.parse(AES_KEY);
  if (data) {
    data.reqNo = genRandomString() //请求流水号加到reqContent里面加密
    console.log('data.reqNo',data.reqNo)
    data.reqDate = new Date().formatDate('yyyy-MM-dd hh:mm:ss')
  }
  var reqContent_UTF8 = UTF8.parse(JSON.stringify(data));
  // 3、使用 AES_KEY字节数组对reqContent  AES/ECB/PKCS5Padding 方式加密
  var ciphertext = AES.encrypt(reqContent_UTF8, AES_KEY_UTF8, {
    mode: ECB,
    padding: PKCS7
  }).ciphertext;

  // 4、获得加密后字节数组进行Base64编码，然后转化成字符串 
  var cipherContent = BASE64.stringify(ciphertext);
  //  方式 对key进行加密，经过base64编码获得密文
  // 5、用RSA_PUB_KEY  RSA/ECB/PKCS5Padding
  var cipherKey = encryptKey(AES_KEY, RSA_PUB_KEY || STORE.get('RSA_PU_KEY'));
  return {
    AES_KEY,
    apiVersion: '1.0.0',
    thirdUserNo: '36012219690415062X',
    client: 'WX',
    channelID: '01',
    key: cipherKey,
    reqContent: cipherContent
  }
}
/**
 * 通过RSA形式加密随机生成的key 公钥是RSA_PUB_KEY
 * @param {*} key 
 * @param {*} RSA_PUB_KEY 
 */
function encryptKey(key, RSA_PUB_KEY) {
  var encrypt = new JSEncrypt();
  encrypt.setPublicKey(RSA_PUB_KEY);

  var cipherKey = encrypt.encrypt(key);
  BASE64.parse(cipherKey);
  return cipherKey;
}

/**
 * 通过私钥解密key ，仅测试用，私钥在金融服务端
 * @param {*} cipherKey 
 */
function decrypt(respContent, AES_KEY) {
  const AES_KEY_UTF8 = UTF8.parse(AES_KEY);
  var bytes = AES.decrypt(respContent, AES_KEY_UTF8, {
    mode: ECB,
    padding: PKCS7
  });
  var decryptedData = JSON.parse(bytes.toString(UTF8));
  return decryptedData
  //验签失败，返回报文作废
}

/**
 * 验签方法
 * @param {String} sign  JAVA返回签名
 * @param {String} AES_KEY  前端随机生成的length=16字符串
 */
function verify(sign, AES_KEY) {
  var verify_rsa = new RSA.RSAKey();
  verify_rsa = RSA.KEYUTIL.getKey(RSA_PUB_KEY);
  var hSig = RSA.b64tohex(sign)
  var ver = verify_rsa.verifyString(AES_KEY, hSig)
  return ver
}
export default {
  encrypt,
  decrypt,
  verify
}

// obj.encode();