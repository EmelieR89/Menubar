function toggleHamburgerbar() {
    let header = document.querySelector("header")

    if (header.style.height === "100vh") {
        header.style.height = "5rem"

    }

    else {
        header.style.height = "100vh"
    }
}