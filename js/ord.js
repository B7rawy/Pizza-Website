

var sizeOptions = document.querySelectorAll('.size-option');
var productPrice = document.getElementById("product-price");
var quantity = document.getElementById("quantity");
var minusButton = document.getElementById("minus-button");
var plusButton = document.getElementById("plus-button");
var totalPrice = document.getElementById("total-price");

sizeOptions.forEach(function(option) {
    option.addEventListener("click", function() {
        sizeOptions.forEach(function(option) {
            option.classList.remove("selected");
        });
        this.classList.add("selected");
        var price = this.getAttribute("data-price");
        productPrice.innerHTML = "EGP " + price;
        totalPrice.innerHTML = "Total Price: EGP " + (price * quantity.value);
    });
});
minusButton.addEventListener("click", function() {
    if (quantity.value > 1) {
        quantity.value--;
        totalPrice.innerHTML = "Total Price: EGP " + (productPrice.innerHTML.replace("EGP","") * quantity.value);
    }
});
plusButton.addEventListener("click", function() {
    quantity.value++;
    totalPrice.innerHTML = "Total Price: EGP  " + (productPrice.innerHTML.replace("EGP","") * quantity.value);
});
