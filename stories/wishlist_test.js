var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('lwishlist testing', function(){
	this.timeout(35000);
	browser.ignoreSynchronization = true

	//import page object
		var lego_home_page = require('../pages/lego_home_page.js');

		it ("Wishlist count verification", function(){

			lego_home_page.goToPage();

			var wishlist_page = lego_home_page.wishListLinkClick();

			wishlist_page.wishListCountGetText();

			wishlist_page.WishListCountPrintText();

			expect(wishlist_page.wishListCountGetText()).to.eventually.equal('My Wishlist (0)');

			var product_page = wishlist_page.productLinkClick();
			
			product_page.addToWishListButtonClick();

			product_page.wishListLinkClick();

			wishlist_page.wishListCountGetText();

			wishlist_page.WishListCountPrintText();

			expect(wishlist_page.wishListCountGetText()).to.eventually.equal('My Wishlist (1)');


		});	
});