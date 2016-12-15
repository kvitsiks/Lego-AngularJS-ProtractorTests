require ('../pages/wishlist_page.js')
var product_page = function(){
	
//add product to the wishlist
	this.addToWishListButtonClick = function(){
		element(by.css('.add-to-wishlist-button')).click();	
	};

//click on wishlist link
	this.wishListLinkClick = function(){
		element(by.css('.util-bar__link-wishlist>span>span')).click();
		return require ('./wishlist_page.js');

		};

};

module.exports = new product_page();
