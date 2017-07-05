import React, {Component} from 'react';
import {connect} from 'react-redux';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: []
        }
    }
    componentWillReceiveProps(){
        console.log("1");
    }
    render() {
        return (
            <div>
                <h3>Search for item:</h3>
                <input id="search_field" type="text" onChange={e => this.updateSearch(e.target.value.toLowerCase())}/>
                <br></br>
                <h3>Result</h3>
                <div>
                {
                    this.state.result.map(r => { 
                        return  <div key={r.item.id}> <h3>{r.item.id }</h3> 
                                    { r.users.map(u => {
                                        return <p key={u.id}>{u.first + ' ' + u.last}</p>}) }
                                </div> })
                }
                </div>
            </div>
        );
    }

    getItems(input){    
        return this.props.items.filter(function (item){ return item.id.toLowerCase().includes(input); });
    }
    getUsersForItem(item){
        return this.props.clanUsers.filter(u => { return u.crafting.filter(c => { return c.type == item.type && c.skill > item.skill}); });
    }

    updateSearch(input){
        if(input.length < 3){
            this.setState({result: []});
            return;            
        }

        var results = this.getItems(input).map(i => { return {
                item: i,
                users: this.getUsersForItem(i)
            }; 
        });
        this.setState({result: results});  
    }
}


// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        clanUsers: state.clanUsers,
        items: state.items
    };
}

export default connect(mapStateToProps)(Search);