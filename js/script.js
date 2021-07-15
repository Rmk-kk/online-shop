const scrollBtn = document.querySelector(".scroll__top__btn");

const refreshPage = () => {
    if (document.documentElement.scrollTop < 500) {
        scrollBtn.style.opacity = 0;
    } else {
        scrollBtn.style.opacity = 0.9;
    }
}

refreshPage()


scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    refreshPage();
});
