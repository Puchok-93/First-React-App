import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            disabled: true,
        }
    }

    onInputChange = (e) => {
        if(this.state.name !== '' && this.state.salary !== '') {
            this.setState({
                disabled: false
            })
        };

        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
            disabled: true,
        })
    }

    render() {
        const {name, salary, disabled} = this.state;
        
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input onChange={this.onInputChange} type="text" className="form-control new-post-label" placeholder="Как его зовут?" name="name" value={name}/>
                    <input onChange={this.onInputChange} type="number" className="form-control new-post-label" placeholder="З/П в $?"  name="salary" value={salary}/>
                    <button type="submit" className="btn btn-outline-light" disabled={disabled}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;