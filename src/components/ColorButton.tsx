import React from "react"

interface Props {
    color: string
    onClick?: (color: string) => void
}

export const ColorButton = (props: Props) => {
    const {color, onClick} = props;
    return <button style={{color}} onClick={() => onClick && onClick(color)}>Color Button</button>
};
