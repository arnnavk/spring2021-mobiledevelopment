import React from 'react';

class Pushups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sets: 0,
            reps: 0
        };
    };

    render() {
        return (
            <div>
                <h2>Pushups</h2>
                <h3>Sets: {this.state.sets}</h3>
                <h3>Reps: {this.state.reps}</h3>
                <button onClick={() => this.setState({sets: this.state.sets + 1})}>Sets</button>
                <button onClick={() => this.setState({reps: this.state.reps + 1})}>Reps</button>
                <button onClick={() => this.setState({sets: 0, reps: 0})}>Reset Counter</button>
                
            </div>
        );
    }
}

export default Pushups;