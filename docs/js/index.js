console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("* Greetings human. You're a curios one.        *");
console.log("*   Call butterfly() and unleash the powers of *");
console.log("*   the butterfly.                             *");
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

function butterfly() {
    const textWrappers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (const textWrapper of textWrappers) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }
    anime.timeline({loop: true})
        .add({
            targets: 'h1 .letter, h2 .letter, h3 .letter, h4 .letter, h5 .letter, h6 .letter',
            translateY: [-1000,0],
            easing: "easeOutExpo",
            duration: 500,
            delay: (el, i) => 30 * i
        })
        .add({
            targets: '.ml16',
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    console.log("Watch the headings on the page!");
}
