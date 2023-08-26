import React,{Component} from "react";
import axios from "axios";
import Navbar from "./component/Navbar";
import Users from "./component/Users";
class App extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        Users:[],
     }
     getUsers=()=>{
        axios.get("https://api.github.com/users")
        .then(response=>{
            this.setState({
                Users:response.data,
            })
        })
     }
     componentDidMount(){
        this.getUsers();
     }
     serchUserget=(data)=>{
        if(data !=''){
            axios.get(`https://api.github.com/search/users?q=${data}`)
            .then(response=>{
                this.setState({
                    Users:response.data.items
                })
            })
        }

     }
    render() { 
        return (  
            <div >
            <Navbar getUsersearch={this.serchUserget}/>
            <div className="container">
            <div className="row">
                {this.state.Users.map((user)=>{
                    return(
                        <div className="col-md-3">
                            <Users
                            key={user.id}
                            user={user}/>
                        </div>
                    )
                })}

            </div>

            </div>
            </div>
        );
    }
}
 
export default App;