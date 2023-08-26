import React,{Component} from "react";
class Users extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const {avatar_url,login,html_url,repos_url}=this.props.user;
        return ( 
            <div class="card mt-3 shadow">
                                <img class="card-img-top" src={avatar_url} alt=""/>
                                <div class="card-body">
                                    <h4 class="card-title text-center">{login}</h4>
                                    <div className="text-center">
                                        <a href={html_url} className="btn btn-outline-primary ">Profiles</a>
                                        <a href={repos_url} className="btn btn-outline-danger ms-2">Reposits</a>
                                    </div>
                                </div>
                            </div>
         );
    }
}
 
export default Users;