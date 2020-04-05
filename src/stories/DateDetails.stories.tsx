import React from "react";
import {storiesOf} from "@storybook/react";
import {DateDetails} from "../components/DateDetails";
import {oteiza} from "../data/oteiza";

storiesOf("Date Details", module).add("default", () => {
    return <DateDetails
        author={oteiza.author}
        title={oteiza.title}
        images={oteiza.images}
        initialDate={oteiza.initialDate}
        finalDate={oteiza.finalDate}
        description={oteiza.description}
        location={oteiza.location}
        entranceValue={oteiza.entranceValue}/>
});
