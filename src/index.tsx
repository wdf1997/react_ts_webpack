import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import World from "./components/World";

ReactDOM.render(
    (
        <BrowserRouter>
            <World ts='TypeScript' react='React' />
        </BrowserRouter>
    ),
    document.getElementById("example")
);