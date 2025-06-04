"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarqueeDemo = MarqueeDemo;
const marquee_1 = require("@/components/magicui/marquee");
const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({ img, name, username, body, }) => {
    return className = {}
        >
            className;
    "flex flex-row items-center gap-2" >
        className;
    "rounded-full";
    width = "32";
    height = "32";
    alt = "";
    src = { img } /  >
        className;
    "flex flex-col" >
        className;
    "text-sm font-medium dark:text-white" >
        { name }
        < /figcaption>
        < p;
    className = "text-xs font-medium dark:text-white/40" > { username } < /p>
        < /div>
        < /div>
        < blockquote;
    className = "mt-2 text-sm" > { body } < /blockquote>
        < /figure>;
};
;
;
function MarqueeDemo() {
    return className = "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl" >
        pauseOnHover;
    className = "[--duration:20s]" >
        { firstRow, : .map((review) => key = { review, : .username }, Object.assign({}, review) /  >
            ) }
        < /Marquee>
        < marquee_1.Marquee;
    reverse;
    pauseOnHover;
    className = "[--duration:20s]" >
        { secondRow, : .map((review) => key = { review, : .username }, Object.assign({}, review) /  >
            ) }
        < /Marquee>
        < div;
    className = "pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" > /div>
        < div;
    className = "pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" > /div>
        < /div>;
    ;
}
