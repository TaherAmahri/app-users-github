import React,{Component} from "react";
class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        search:'',
     }
     HandlForm=(event)=>{
        this.setState({
            search:event.target.value,
        })
     }
     SearchUser=(e)=>{
        e.preventDefault();
        this.props.getUsersearch(this.state.search)
     }
    render() { 
        return ( 
            <>
            <nav className="navbar navbar-expand-sm bg-dark">
                <a className="navbar-brand ms-5 text-light" href="#">Users</a>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <form className="form-inline my-2 my-lg-0 ms-5 d-flex " onSubmit={this.SearchUser}>
                        <input  onChange={this.HandlForm} className="form-control mr-sm-2  " value={this.state.search} type="search" placeholder="Search User"/>
                        <button type="search" className="btn btn-success ms-1">Search</button>
                    </form>
                </div>
            </nav></>
         );
    }
}
 
export default Navbar;