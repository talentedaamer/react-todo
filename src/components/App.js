import React, {Component} from 'react';

import Todo from '../components/todo';
import { Pane } from 'evergreen-ui';

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Pane>
                    <Pane background="tint1" padding={24} marginBottom={16}>
                        <Todo/>
                    </Pane>
                </Pane>
            </div>
        );
    }
}

export default App;
