import React, {FunctionComponent} from "react"
import {style} from "typestyle";
import {bodyCss, authorCss, titleCss} from "./css";

const dateCardContainer = style({
    display: "block",
    marginBottom: "8px",
    padding: "8px 10px",
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

const dateCardImage = style({
    width: "100%"
});

const dateCardDetails = style({
    marginTop: "4px",
    $nest: {
        p: {
            margin: "0px",
            color: "slategrey"
        }
    }
});

interface DateCardProps {
    author: string,
    title: string,
    images: Array<string>,
    initialDate: string,
    finalDate: string,
    entranceValue: string
}

export const DateCard: FunctionComponent<DateCardProps> = (props) => {
    const {author, title, images, initialDate, finalDate, entranceValue} = props;
    return (
        <div className={bodyCss}>
            <article className={dateCardContainer}>
                <h1 className={authorCss}>{author}</h1>
                <h2 className={titleCss}>{title}</h2>
                {!!images.length && <img className={dateCardImage} src={images[0]} alt=""/>}
                <div className={dateCardDetails}>
                    <p>Del {initialDate} al {finalDate}</p>
                    <p>{entranceValue}</p>
                </div>
            </article>
        </div>
    )
};
