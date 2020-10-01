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

const QuoteBlock = (() => {
    function QuoteBlock () {
        const containerId = "#quoteContainer",
            quoteTextSelector = ".quote-text",
            quoteNameSelector = ".quote-name";

        const quotes = [
            { name: "&mdash; quoter1", text: "this is a quote 1." },
            { name: "&mdash; quoter2", text: "this is a quote 2." },
            { name: "&mdash; quoter3", text: "this is a quote 3." },
            { name: "&mdash; quoter4", text: "this is a quote 4." },
        ];
        const elements = [
            document.querySelector(`${containerId}`),
            document.querySelector(`${quoteNameSelector}`),
            document.querySelector(`${quoteTextSelector}`),
        ];

        var quoteIndex = 0;
        elements[1].innerHTML = quotes[0].name;
        elements[2].innerHTML = quotes[0].text;
        this.fadout = () => {
            elements[0].classList.remove("fade-in");
            window.setTimeout(() => {
                //quoteIndex = quoteIndex < quotes.length ? quoteIndex++ : 0;
                quoteIndex++;
                if(quoteIndex >= quotes.length) {
                    quoteIndex = 0;
                }
                const quote = quotes[quoteIndex];
 
                elements[1].innerHTML = quote.name;
                elements[2].innerHTML = quote.text;
                elements[0].classList.add("fade-in");
            }, 200);
        }
    }
    return QuoteBlock;
    
})();
// const wc = new WaterColor();
// wc.init();

document.addEventListener("DOMContentLoaded", () => {
    const q = new QuoteBlock();
    window.setInterval(() => {
        q.fadout();
    }, 5000);
}, false);