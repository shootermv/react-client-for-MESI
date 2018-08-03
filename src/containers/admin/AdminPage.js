import React,{Component} from 'react'
class AdminPage extends Component {
    constructor(props) {
      super(props);
    }
    getData() {    
        fetch('http://localhost:8000/users', {
            credentials: 'include',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(response => {
          return response.json();
        })
        .then(response => {
          console.log(response)

        })
        .catch(error => console.error(`Fetch Error =\n`, error));
      }
        
    componentDidMount( ) {
      this.getData();
    }
    render() {
        return (
            <div className="container">this is Admin page!</div>
        )
    }
}
export default AdminPage;