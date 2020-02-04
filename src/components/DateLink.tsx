import React, {FunctionComponent} from "react"
import {style} from "typestyle";

const dateLinkContainer = style({
    display: "block",
    marginBottom: "8px",
    padding: "8px 10px",
    color: "#333",
    fontFamily: "Rubik, sans-serif",
    border: "1px solid slategrey",
    borderRadius: "2px",
    transition: "border 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    $nest: {
        "&:hover": {
            border: "1px solid darkslategrey",
            boxShadow: "0 0 5px 0 slategrey"
        }
    }
});

const dateLinkAuthor = style({
    margin: "0px",
    marginBottom: "4px",
    paddingBottom: "4px",
    color: "black",
    fontFamily: "Roboto Slab, serif",
    fontSize: "large",
    fontWeight: 400
});

const dateLinkTitle = style({
    margin: "0px 0px 4px",
    paddingBottom: "4px",
    color: "slategrey",
    fontSize: "medium",
    fontWeight: 300
});

const dateLinkImage = style({
    width: "100%"
});

const dateLinkDetails = style({
    marginTop: "4px",
    $nest: {
        p: {
            margin: "0px",
            color: "slategrey"
        }
    }
});

interface DateLinkProps {
    author: string,
    title: string,
    images: Array<string>,
    initialDate: string,
    finalDate: string,
    entranceValue: string
}

export const DateLink: FunctionComponent<DateLinkProps> = (props) => {
    const {author, title, images, initialDate, finalDate, entranceValue} = props;
    return (
        <article className={dateLinkContainer}>
            <h1 className={dateLinkAuthor}>{author}</h1>
            <h2 className={dateLinkTitle}>{title}</h2>
            {!!images.length && <img className={dateLinkImage} src={images[0]} alt=""/>}
            <div className={dateLinkDetails}>
                <p>Del {initialDate} al {finalDate}</p>
                <p>{entranceValue}</p>
            </div>
        </article>
    )
};
