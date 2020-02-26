import * as React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import Hello from './Hello';
import Radio from './Radio';
interface HelloProps {
    ts?: string;
    react?: string;
}
interface HelloState {
    china: string;
    city: string;
}

export default class World extends React.Component<HelloProps, HelloState> {
    constructor(props: any) {
        super(props);
    }
    state: HelloState = {
        china: '中国',
        city: '江西',
    }
    render() {
        const { china, city } = this.state;
        const { ts, react } = this.props
        return (
            <div>
                <h1 style={{ background: 'pink' }}>Welcome to {ts} and {react}</h1>
                <div style={{ border: '1px solid #cfcfcf' }}>
                        <div style={{ display: 'inline-block', background: '#BFE8BF', width: '200px' }}>
                            <div style={{ height: 100, borderBottom: '1px solid #cfcfcf' }}>
                                <Link to='/'>
                                    Hello
                            </Link>
                            </div>
                            <div style={{ height: 100 }}>
                                <Link to='/radio'>
                                    World
                            </Link>
                            </div>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <Switch>
                                <Route path="/radio" component={Radio} />
                                <Route path="/" component={Hello} />
                            </Switch>
                        </div>
                </div>
            </div>
        );
    }
}