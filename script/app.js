const WaterColor = (() => {
    function WaterColor() {
        const selector = "#wcCanvas";
        const circleSettings = {
            center: { x: 0, y: 0 },
            radius: 120,
            color: { fill: "rgba(64, 188, 153, 0.1)", stroke: "rgba(247, 246, 243, 0.4)" },
            lineWidth: 5,
        };
        
        circleSettings.setCenter = ({w, h}) => {
            circleSettings.center.x = w / 2;
            circleSettings.center.y = h / 2;
        }

        this.init = () => {
            const canvas = document.querySelector(selector);
            const context = canvas.getContext("2d");

            context.beginPath();
            circleSettings.setCenter({ w: 400, h: 400 });
            const gradiant = context.createRadialGradient(
                circleSettings.center.x,
                circleSettings.center.y,
                0,
                40,
                circleSettings.center.y,
                200);
            gradiant.addColorStop(0, circleSettings.color.fill);
            gradiant.addColorStop(.5, circleSettings.color.stroke);
            context.arc(circleSettings.center.x, 
                circleSettings.center.y, 
                circleSettings.radius, 
                2 * Math.PI,
                false);
            context.fillStyle = gradiant;
            context.strokeStyle = circleSettings.color.stroke;
            context.fill();
            context.lineWidth = circleSettings.lineWidth;
            context.stroke();
        }
    }

    return WaterColor;
})();

// const wc = new WaterColor();
// wc.init();

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => {
        const elem = e.target.closest(".menu");
        if(elem) {
            [].map.call(document.querySelectorAll(".view"), (_i) => { 
                _i.classList.toggle("display-none", true);
                _i.classList.toggle("flex", false);
            });
            if(elem.classList.contains("about")) {
                document.querySelector(".about-view").classList.toggle("display-none", false);
                document.querySelector(".about-view").classList.toggle("flex", true);
            }
            else if(elem.classList.contains("contact")) {
                document.querySelector(".contact-view").classList.toggle("flex", true);
                document.querySelector(".contact-view").classList.toggle("display-none", false);
            }
        }
    });

}, false);