// ex15_url.js
const str1 = `https://shopping.naver.com/window/fashion-group/category/20005987?sort=BRAND_POPULARITY#hash`;
const str2 = `https://example.com:8080/path/name?query=string&query2=string2#page1`;

//1. WHATWG 에서 URL표준을 따르는 api를 제시 => 권장
const url = require('url');
const { URL } = url;
const myUrl = new URL(str1); //WHATWG에서 제시한 표준
console.log(myUrl);
console.log(myUrl.search); //querystring 반환
console.log(myUrl.searchParams.get('sort'));
console.log(myUrl.hash);
console.log(myUrl.hostname);

//2. url.parse(url주소) : url 주소를 분해함
//   url.format(객체) : 분해된 객체를 원래상태로 조립한 문자열 반환
console.log('------------------');

const parseUrl = url.parse(str2);
console.log(parseUrl);
console.log(parseUrl.query);
console.log(parseUrl.pathname);
console.log('url.format(): ', url.format(parseUrl));
