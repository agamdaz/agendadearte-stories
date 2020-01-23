import React from "react";
import {storiesOf} from "@storybook/react";
import {DateLink} from "./DateLink";
import {style} from "typestyle";

storiesOf("DateLink", module).add("default", () => (
    <div className={style({maxWidth: "300px"})}>
        <DateLink
            author={"Jorge Oteiza"}
            title={"Construcción con tres cuboides vacíos o circulación en oblicuo con tres vacíos Malevich"}
            images={['images/oteiza.jpg']}
            initialDate={"9 de abril"}
            finalDate={"21 de octubre"}
            entranceValue={"Entrada libre"}/>
        </div>
    )
);
