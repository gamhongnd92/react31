import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      people: [
        {
         
            firstname: "Gam",
            lastname: "Tran",
            phone: "778 999 999",
            mail: "gamhongnd92@gmail.com"
    
         
        }, 

        {
         
            firstname: "Hoa",
            lastname: "Tran",
            phone: "778 000 000",
            mail: "gamhongnd92@gmail.com"
          
        }, 

        {
         
            firstname: "Nhi",
            lastname: "Tran",
            phone: "778 111 1111",
            mail: "gamhongnd92@gmail.com"
          
        },

        {
          
            firstname: "Xam",
            lastname: "Nguyen",
            phone: "778 777 777",
            mail: "gamhongnd92@gmail.com"
          
        }
  

      ]
      
      
    }
  }

  render() {
    return (
      <div className="container">
         {
           this.state.people.map((person) => {
             return <h1>{person.firstname}</h1>
           })
         }
      </div>
    );
  }
  
}

export default App;
