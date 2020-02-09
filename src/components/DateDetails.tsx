import React, {FunctionComponent} from "react"
import {media, style} from "typestyle";
import {authorCss, titleCss} from "./css";

const containerCss = style({
    display: "flex",
    color: "#333",
    fontFamily: "Rubik, sans-serif",
},
    getMobileCSS({
        flexWrap: "wrap"
    })
);

const sectionCss = style({
    flexGrow: 1,
    paddingInlineEnd: "1em"
},
    getMobileCSS({
        width: "100%",
        paddingInlineEnd: 0
    })
);

const asideCss = style({
    flexShrink: 0,
    marginBlockStart: "1em",
    paddingBlockStart: "1em",
    paddingBlockEnd: "1em",
    backgroundColor: "#f0f0f0",
    $nest: {
        p: {
            margin: 0,
            paddingInlineStart: "1em",
            paddingInlineEnd: "1em"
        }
    }
},
    getMobileCSS({
        width: "100%"
    })
);

const headerCss = style({
    marginBlockEnd: "1em",
    borderBottom: "1px solid darkslategrey"
});

const imageCss = style({
    display: "block",
    width: "100%",
    marginBlockStart: "1em"
});

function getMobileCSS(props: object) {
    return media({maxWidth: 640}, props);
}

interface DateDetailsProps {
    author: string,
    title: string,
    images: Array<string>,
    initialDate: string,
    finalDate: string,
    description: string,
    location: {name: string, address: string},
    entranceValue: string
}

export const DateDetails: FunctionComponent<DateDetailsProps> = (props) => {
    const {author, title, images, initialDate, finalDate, description, location, entranceValue} = props;
    return (
        <article className={containerCss}>
            <section className={sectionCss}>
                <header className={headerCss}>
                    <h1 className={authorCss}>{author}</h1>
                    <h2 className={titleCss}>{title}</h2>
                </header>
                <p>{description.replace(/<[/]?[pb]>/g, '')}</p>
                {images.length && <img className={imageCss} src={images[0]} alt=""/>}
            </section>
            <aside className={asideCss}>
                <p>Del {initialDate} al {finalDate}</p>
                <p>{entranceValue}</p>
                <p>{location && location.name}</p>
                <p>{location && location.address}</p>
            </aside>
        </article>
    )
};
