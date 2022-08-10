import React from 'react';
import '../styles/App.css';

class AddressForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            street_address: '',
            city: '',
            state: '',
            zip_code: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.autocomplete = null
    }

    initialState() {
        return {
            name: '',
            street_address: '',
            city: '',
            state: '',
            zip_code: ''
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({value: this.element.value});
        /*console.log(this.state.value);*/
    }

    render() {
    return(
        <div className='container'>
            <h1>Add New Delivery</h1>
            <form id="address-form" onSubmit={this.handleSubmit}>
                <p><em>* = required field</em></p>
                <label>
                    <span>Name*</span>
                    <input
                        className="input-field"
                        name={"name"}
                        value={this.state.name}
                        placeholder={"Name"}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <span>Address*</span>
                    <input 
                        name={"street_address"}
                        value={this.state.street_address}
                        placeholder={"Street Address"}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <span>City*</span>
                    <input 
                        name={"city"}
                        value={this.state.city}
                        placeholder={"City"}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <span>State*</span>
                    <input 
                        name={"state"}
                        value={this.state.state}
                        placeholder={"State"}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <span>Zip code*</span>
                    <input 
                        name={"zip_code"}
                        value={this.state.zip_code}
                        placeholder={"Zipcode"}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="button" id="my-button" onSubmit={this.handleSubmit}>Submit</button>
            </form>
        </div>
    )
    }

}

export default AddressForm