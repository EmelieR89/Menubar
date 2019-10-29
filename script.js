function toggleHamburgerbar() {
    let header = document.querySelector("header")

    if (header.style.height === "100vh") {
        header.style.height = "5rem"

    }

    else {
        header.style.height = "100vh"
    }
}

function getBiggerText() {
    const body = document.querySelector("body")
    // body.style.fontSize = "2rem";

    if (body.style.fontSize === "2rem") {
        body.style.fontSize = "1rem"
    }

    else {
        body.style.fontSize = "2rem"
    }

}

// let scale = 1;

// function enlarge() {
//     scale *= 1.1
//     applyScale()

// }

// function applyScale() {
//     const body = document.querySelector("body");
//     body.style.transform.fontsize = 'scale(' + scale + ')'
// }