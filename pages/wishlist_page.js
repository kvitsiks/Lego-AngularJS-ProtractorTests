require ('../pages/product_page.js')
var wishlist_page = function(){
	
//verify wishlist count
	this.wishListCountGetText = function(){

		var name = element(by.css('.wishlist-header__title'));
			return name.getText();
	};

	this.WishListCountPrintText = function(){
		var name1 = element(by.css(".wishlist-header__title"));
		return name1.getText().then(function(str){
			console.log("Displayed wish list count is:", str);
		});
	};
//click on any product
	this.productLinkClick = function(){
		browser.executeScript('window.scrollTo(720, 881);');
		//browser.sleep(1000);
		element(by.css('.product-leaf__link-title>span')).click();
			return require ('./product_page.js');
	};

};

module.exports = new wishlist_page();
