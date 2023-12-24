import React from "react"

export default function Square(props: {value:number; onSquareClick:()=>void}){
    const [value, setValue] = React.useState("")

    return(
        <button className="square col-span-1" onClick={props.onSquareClick}>{props.value}</button>
    )
}