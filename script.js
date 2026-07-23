// ===============================
// KKSTORE-22 Script
// ===============================

let cart = [];
let wishlist = [];

const container = document.getElementById("products");

// Products दाखवण्यासाठी Function
function displayProducts(data) {

    container.innerHTML = "";

    data.forEach((item) => {

        container.innerHTML += `
        <div class="card">

            <img src="${item.image}" alt="${item.name}">

            <h3>${item.name}</h3>

            <div class="rating">
                ⭐ ${item.rating}
            </div>

            <h2>
                ₹${item.price}
                <span>₹${item.oldPrice}</span>
            </h2>

            <p class="discount">${item.discount}</p>

            <p class="delivery">${item.delivery}</p>

            <div class="btns">
             <a href="#" target="_blank" class="buy-btn">
        🛍️ Buy Now
    </a>

                <button onclick="addCart()">
                    🛒 Cart
                </button>

                <button onclick="addWish()">
                    ❤️
                </button>

            </div>

        </div>
        `;

    });

}

// सुरुवातीला सर्व Products दाखवा
displayProducts(products);

// ===============================
// Search
// ===============================

const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const filtered = products.filter(item =>
        item.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);

});

// ===============================
// Category Filter
// ===============================

document.querySelectorAll(".cat").forEach(btn => {

    btn.addEventListener("click", function () {

        const category = this.dataset.category;

        if (category === "All") {

            displayProducts(products);

            return;

        }

        const filtered = products.filter(item =>
            item.category === category
        );

        displayProducts(filtered);

    });

});

// ===============================
// Cart
// ===============================

function addCart() {

    cart++;

    document.getElementById("cart-count").innerText = cart;

}

// ===============================
// Wishlist
// ===============================

function addWish() {

    wishlist++;

    document.getElementById("wishlist-count").innerText = wishlist;

}
// Banner Slider

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlides(){

    slides.forEach(slide=>slide.classList.remove("active"));

    slideIndex++;

    if(slideIndex>slides.length){

        slideIndex=1;

    }

    slides[slideIndex-1].classList.add("active");

}

showSlides();

setInterval(showSlides,3000);
const modal=document.getElementById("productModal");

const close=document.querySelector(".close");

function openProduct(product){

    modal.style.display="block";

    document.getElementById("modalImage").src=product.image;

    document.getElementById("modalName").innerText=product.name;

    document.getElementById("modalPrice").innerText="₹"+product.price;

    document.getElementById("modalRating").innerText="⭐ "+product.rating;

    document.getElementById("modalDelivery").innerText=product.delivery;

}

close.onclick=function(){

    modal.style.display="none";

}

window.onclick=function(e){

    if(e.target==modal){

        modal.style.display="none";

    }

}
