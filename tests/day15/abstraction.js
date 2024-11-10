var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProjectSpecificMethod = /** @class */ (function () {
    function ProjectSpecificMethod(page) {
        this.page = page;
    }
    ProjectSpecificMethod.prototype.logsession = function () {
        console.log("This is abstract class");
    };
    return ProjectSpecificMethod;
}());
var ShoppingPage = /** @class */ (function (_super) {
    __extends(ShoppingPage, _super);
    function ShoppingPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShoppingPage.prototype.navigateTo = function (url) {
        console.log("Navigating to login page ".concat(url));
    };
    ShoppingPage.prototype.login = function (username, password) {
        console.log("Enter the user credentials ".concat(username, " ").concat(password));
    };
    return ShoppingPage;
}(ProjectSpecificMethod));
var shopping = new ShoppingPage("PageObject");
shopping.navigateTo("https://www.amazon.in");
shopping.login("testdemo@gmail.com", "test");
var ProductPage = /** @class */ (function () {
    function ProductPage() {
    }
    ProductPage.prototype.enterUsername = function () {
        return 'username';
    };
    ProductPage.prototype.enterPassword = function () {
        return 'password';
    };
    return ProductPage;
}());
var product = new ProductPage();
product.enterPassword();
