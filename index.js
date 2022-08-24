// Your code goes here
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded correctly");
    let heading = document.querySelector("#text");
    heading.textContent = "This is really cool!";
    console.log(heading);
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);