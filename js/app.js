document.querySelector("#linkTreeModal").style.display = "none";

(function () {

    for (let element of document.querySelectorAll(".projectTags li")) {
        let elementColor = TEXT_TO_COLOR[element.textContent];
        elementColor !== undefined && (element.style.backgroundColor = elementColor);
    }

    function startClassAnimation(element, animClass) {
        element.classList.remove(animClass);
        setTimeout(() => element.classList.add(animClass), 1);
    }
    
    Array.from(document.querySelectorAll(".mainIconContainer *")).forEach(item=>item.addEventListener("click", function (e) {
        startClassAnimation(document.querySelector(".mainIcon"), "nudge");
    }));
    
    HTMLElement.prototype.delegate = function (eventName, childSelector, callback) {
        this.addEventListener(eventName, function (e) {
            const currentElement = e.target.closest(childSelector);
            if (currentElement === null || !this.contains(currentElement)) return undefined;
            callback.call(currentElement, e);
        });
    }
    
    document.querySelector("body").delegate("click", ".fa-xmark", function() {
        fadeOut(document.querySelector("#" + this.getAttribute("targetElement")), 0.25);
    });
    
    document.querySelector("#connect").addEventListener("click", ()=>fadeIn(document.querySelector("#linkTreeModal"), 0.25));

    function fadeOut(element, time, easing="linear") {
        element.style.removeProperty("animation");
        element.style.animation = `fadeOut ${time}s ${easing} forwards`;
        function hide() {
            element.style.display = "none";
            element.removeEventListener("animationend", hide);
        }
        element.addEventListener("animationend", hide);
    }
    
    function fadeIn(element, time, easing="linear") {
        element.style.removeProperty("animation");
        element.style.removeProperty("display");
        if (getComputedStyle(element).display === "none") {
            element.style.display = "block";
        }
        element.style.opacity = '0';
        setTimeout(()=>{
            element.style.animation = `fadeIn ${time}s ${easing} forwards`;
            console.log("oof");
        }, 5);
    }
    
    Array.from(document.querySelectorAll(".modularCard a")).map(e=>e.target="_blank");
})();