// ===============================
// KKSTORE-22 Script
// ===============================

// Cart & Wishlist Count
let cart = 0;
let wishlist = 0;

const container = document.getElementById("products");

// ===============================
// Display Products
// ===============================
function displayProducts(data) {

    container.innerHTML = "";

    data.forEach((item) => {

        container.innerHTML += `
        <div class="card">

            <img src="${item.image}" alt="${item.name}" onclick='openProduct(${JSON.stringify(item)})'>

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

                <button onclick="addWish()" class="wish-btn">
                    ❤️ Wishlist
                </button>

                <button onclick="addCart()" class="cart-btn">
                    🛒 Cart
                </button>

                <a href="${item.link}" target="_blank">
                    <button class="buy-btn">
                        Buy Now
                    </button>
                </a>

            </div>

        </div>
        `;

    });

}

displayProducts(products);

// ===============================
// Search
// ===============================
const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const filtered = products.filter(item =>
            item.name.toLowerCase().includes(value)
        );

        displayProducts(filtered);

    });

}

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

// ===============================
// Banner Slider
// ===============================
let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlides() {

    slides.forEach(slide => slide.classList.remove("active"));

    slideIndex++;

    if (slideIndex > slides.length) {

        slideIndex = 1;

    }

    slides[slideIndex - 1].classList.add("active");

}

if (slides.length > 0) {

    showSlides();

    setInterval(showSlides, 3000);

}

// ===============================
// Product Modal
// ===============================
const modal = document.getElementById("productModal");

const close = document.querySelector(".close");

function openProduct(product) {

    modal.style.display = "block";

    document.getElementById("modalImage").src = product.image;

    document.getElementById("modalName").innerText = product.name;

    document.getElementById("modalPrice").innerText = "₹" + product.price;

    document.getElementById("modalRating").innerText = "⭐ " + product.rating;

    document.getElementById("modalDelivery").innerText = product.delivery;

    document.getElementById("buyNowLink").href = product.link;

}

close.onclick = function () {

    modal.style.display = "none";

}

window.onclick = function (e) {

    if (e.target == modal) {

        modal.style.display = "none";

    }

}
