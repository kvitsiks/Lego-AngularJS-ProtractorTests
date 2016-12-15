require ('../pages/wishlist_page.js')
var lego_home_page = function(){

//go to the page
	this.goToPage = function(value){
		browser.get('https://shop.lego.com/en-US');
		browser.manage().window().maximize();
	};
//click on wishlist link
	this.wishListLinkClick = function(){
		//browser.ignoreSynchronization = true
		element(by.css('.util-bar__link-wishlist>span>span')).click();
			return require ('./wishlist_page.js');
		};
};

module.exports = new lego_home_page();
