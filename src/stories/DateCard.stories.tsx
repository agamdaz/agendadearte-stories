import React from "react";
import {storiesOf} from "@storybook/react";
import {DateCard} from "../components/DateCard";
import {style} from "typestyle";
import {oteiza} from "../data/oteiza";

storiesOf("Date Card", module).add("default", () => (
    <div className={style({maxWidth: "300px"})}>
        <DateCard
            author={oteiza.author}
            title={oteiza.title}
            images={oteiza.images}
            initialDate={oteiza.initialDate}
            finalDate={oteiza.finalDate}
            entranceValue={oteiza.entranceValue}/>
    </div>
    )
);
