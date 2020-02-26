import * as React from "react";

interface State {
    li: any[]
}
class Radio extends React.Component {
    constructor(props: any) {
        super(props);
    }
    state: State = {
        li: ['第一行', '第二行', '第三行'],
    }
    render() {
        const { li } = this.state
        return (
            <div>
                <ul>
                    {li.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default Radio;
