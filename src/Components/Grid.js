import React from "react";
import Square from "./Square";

function Grid(props) {
    const arr = props.data;

    const data = arr.map((row) => {
        return (
            <div>
                {row.map((data) => {
                    return <Square data={data} function={props.function} />;
                })}
            </div>
        );
    });

    return data;
}

export default Grid;
