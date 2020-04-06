import React, {FunctionComponent} from "react"
import {media, style} from "typestyle";
import {bodyCss, authorCss, titleCss} from "./css";

const descriptionContainer = style({
    display: "flex",
    flexWrap: "wrap",
},
    media({minWidth: 641}, {
        flexDirection: "row-reverse",
        flexWrap: "nowrap",
    }),
);

const headerCss = style({
    marginBlockEnd: "1em",
    borderBottom: "1px solid darkslategrey",
});

const eventDescription = style({
    width: "100%",
    flexGrow: 1,
    flexShrink: 0,
},
    media({minWidth: 641}, {
        width: "50%",
    }),
    media({minWidth: 981}, {
        width: "60%",
    })
);

const locationDetails = style({
    marginBlockEnd: "1em",
    paddingBlockStart: "1em",
    paddingBlockEnd: "1em",
    backgroundColor: "#f0f0f0",
    $nest: {
        p: {
            margin: 0,
            paddingInlineStart: "1em",
            paddingInlineEnd: "1em",
        }
    }
});

const eventGallery = style({
    marginBlockEnd: "1em",
    $nest: {
        img: {
            width: "100%",
        }
    }
},
    media({minWidth: 641}, {
        marginInlineStart: "1em",
    })
);

interface DateDetailsProps {
    author: string,
    title: string,
    images: Array<string>,
    initialDate: string,
    finalDate: string,
    description: string,
    location: {name: string, address: string},
    entranceValue: string,
}

export const DateDetails: FunctionComponent<DateDetailsProps> = (props) => {
    const {author, title, images, initialDate, finalDate, description, location, entranceValue} = props;
    return (
        <div className={bodyCss}>
            <article>
                <header className={headerCss}>
                    <h1 className={authorCss}>{author}</h1>
                    <h2 className={titleCss}>{title}</h2>
                </header>
                <div className={descriptionContainer}>
                    <aside className={eventGallery}>
                        {images.length && <img src={images[0]} alt=""/>}
                    </aside>
                    <section className={eventDescription}>
                        <header className={locationDetails}>
                            <p>{location && location.name}</p>
                            <p>{location && location.address}</p>
                            <p>Del {initialDate} al {finalDate}</p>
                            <p>{entranceValue}</p>
                        </header>
                        <article>{description.replace(/<[/]?[pb]>/g, '')}</article>
                    </section>
                </div>
            </article>
        </div>
    )
};
