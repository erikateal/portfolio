(function () {
    let index = 0;
    let textEntries = ["hi there! 👋🏽 click me!",
        "~clears throat~",
        "I'm Erika!",
        "I'm a software engineer based in Austin, TX.",
        "Currently building websites and software with 100 Devs agency.",
        "I hope you're having a nice day!",
        "And I'm glad you found your way here...",
        "Feel free to browse through my work.",
        "Oh, and big shoutout to @khanhtncva for the portfolio design template.",
        "See you around! 😊",
    ];

    const bubbleTextElement = document.querySelector(".mainTextBox");

    function nextTextForBubble() {
        textEntries[index] && (bubbleTextElement.innerText = textEntries[index]);
        index++;
    }

    nextTextForBubble();

    Array.from(document.querySelectorAll(".mainIconContainer *")).forEach(i=>i.addEventListener("click", function (e) {
        nextTextForBubble();
    }));
}());