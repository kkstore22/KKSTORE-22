// ===========================
// KKSTORE-22 JavaScript
// ===========================

console.log("KKSTORE-22 Loaded Successfully");

// Search Box
const searchInput = document.querySelector("input");

if(searchInput){
    searchInput.addEventListener("keyup", function(){
        console.log("Searching:", this.value);
    });
}

// Shop Now Buttons
document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("click", function(e){
        e.preventDefault();
        alert("Products Coming Soon!");
    });
});

// Card Hover
document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("mouseenter",()=>{
        card.style.transform="scale(1.05)";
    });

    card.addEventListener("mouseleave",()=>{
        card.style.transform="scale(1)";
    });
});
