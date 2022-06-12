window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home_section").classList.add("active");
    // Page Loader
    document.querySelector(".page_loader").classList.add("fade_out");
    setTimeout(() => {
        document.querySelector(".page_loader").style.display = "none";
    }, 600);
})
// Toggle Navbar
const navToggler = document.querySelector(".nav_toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide_scrolling");
});
function hideSection() {
    document.querySelector("section.active").classList.toggle("fade_out");
}
function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}

//Active Section
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link_item") && e.target.hash !== "") {
        //activate the overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if (e.target.classList.contains("nav_item")) {
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add("hide_scrolling")
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade_out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide_scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500)
    }
});
// About Tabs//
const tabsContainer = document.querySelector(".about_tabs"),
aboutSection = document.querySelector(".about_section");
console.log(aboutSection);
tabsContainer.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("tab_item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab_content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});


// Portfolio Item Details Popup
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view_project_btn")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio_popup").scrollTo(0, 0);
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
    document.body.classList.toggle("hide_scrolling");
    document.querySelector(".main").classList.toggle("fade_out");
}
document.querySelector(".popup_close").addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of it

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup_inner")) {
        togglePortfolioPopup();
    }
})

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".popup_thumbnail img").src = portfolioItem.querySelector(".portfolio_item_thumbnail img").src;

    document.querySelector(".popup_header h3").innerHTML = portfolioItem.querySelector(".portfolio_item_title").innerHTML;

    document.querySelector(".popup_body").innerHTML = portfolioItem.querySelector(".portfolio_item_details").innerHTML;
}

// toggle Navbar