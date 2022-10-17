import {Component} from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

// const data = [
//     {name: 'John', salary: 800, increase: false, like: true, id: 1},
//     {name: 'Bruce',  salary: 1500, increase: false, like: false, id: 2},
//     {name: 'Alex' , salary: 2000, increase: false, like: false, id: 3},
// ]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John', salary: 800, increase: false, rise: true, id: 1},
        {name: 'Bruce',  salary: 1500, increase: false, rise: false, id: 2},
        {name: 'Alex' , salary: 2000, increase: false, rise: false, id: 3},
      ],
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id) 
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      id: this.maxId++,
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      }
    });
  }

  // Одн из вариантов реализации

  // onToggleIncrease = (id) => {
  //   this.setState(({data}) => {
  //     const index = data.findIndex(elem => elem.id === id);

  //     const oldObj = data[index];
  //     const newItem = {...oldObj, increase: !oldObj.increase};
  //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

  //     return {
  //       data: newArr,
  //     }
  //   })
  // }

  onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, [prop]: !item[prop]}
        }

        return item;
      })
    }))
  }

  render(){
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;

    return (
      <div className="app">
          <AppInfo employees={employees} increased={increased}/>
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
          data={this.state.data} 
          onDelete={this.deleteItem} 
          onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
