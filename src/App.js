import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      person1: {
        firstname: "Gam",
        lastname: "Tran",
        phone: "778 999 999",
        mail: "gamhongnd92@gmail.com"
      },
      person2: {
        firstname: "Hoa",
        lastname: "Tran",
        phone: "778 000 000",
        mail: "gamhongnd92@gmail.com"
      },
      person3: {
        firstname: "Nhi",
        lastname: "Tran",
        phone: "778 111 1111",
        mail: "gamhongnd92@gmail.com"
      },
      person4: {
        firstname: "Xam",
        lastname: "Nguyen",
        phone: "778 777 777",
        mail: "gamhongnd92@gmail.com"
      },

      
    }
  }

  render() {
    return (
      <div className="container">
          <h1>{this.state.person1.firstname}</h1>
          <h1>{this.state.person2.firstname}</h1>
          <h1>{this.state.person3.firstname}</h1>
          <h1>{this.state.person4.firstname}</h1>
      </div>
    );
  }
  
}

export default App;
