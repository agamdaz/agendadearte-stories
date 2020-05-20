import {style} from "typestyle";

export const bodyCss = style({
    color: "#333",
    fontFamily: "Rubik, sans-serif",
    $nest: {
        a: {
            color: "#333"
        },
    }
});

export const authorCss = style({
    margin: 0,
    marginBottom: "0.5em",
    fontFamily: "Roboto Slab, serif",
    fontSize: "24px",
    fontWeight: 400,
    color: "#333"
});

export const titleCss = style({
    margin: 0,
    marginBottom: "0.5em",
    fontSize: "18px",
    fontWeight: 300,
    color: "slategrey"
});
