import React, { Component } from 'react';
import shortid from 'shortid';
import './PhoneBook.css';

class PhoneBook extends Component {
    state = {        
        contacts: [],
        name: '',
        number: ''
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({
            [name]:value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    }
    reset = () => {
        this.setState({
            name: '',
            number: ''
        });
    }

    

        
    render() {        
        return (            
                <form onSubmit={this.handleSubmit}  className="form">
                   <label className="label" htmlFor={this.nameInputId}>Name
                       <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} 
                        id={this.nameInputId}
                       ></input>
                   </label>
                   <label className="label" htmlFor={this.numberInputId}>Number   
                       <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        id={this.numberInputId}
                       ></input>
                    </label>
                    <button 
                        type="submit"
                        className="button"                        
                    >Add contact</button>
                </form>            
        )
    }
}

export default PhoneBook;