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
                <input id="search_field" type="text" onChange={e => this.updateSearch(e.target.value, this.props.items, this.props.clanUsers)}/>
                <br></br>
                <h3>Result</h3>
                {
                    this.state.result.map(function(r) 
                    { 
                        return <p key={r.key}>{ console.log(r.value) }</p> 
                    })
                }
            </div>
        );
    }

    updateSearch(input, items, users){
        var searchResult;
        if(input.length < 3){
            this.setState({result: []});
            return;
        }

        var selectedItems = items.filter(function (item){
            return item.id.includes(input);
        });

        if(selectedItems){
            searchResult = [];
            selectedItems.forEach(function(sItem){
                var sUsers = [];
                users.forEach(function (user){
                    if (user.crafting.find(function(c) {
                        return (c.type == sItem.type && c.skill > sItem.skill);})) 
                        {
                        sUsers.push(user);
                    }
                });
                if(sUsers.length > 0){
                    searchResult.push({
                        key: sItem.id,
                        value: sUsers
                    });
                }
                else{
                    searchResult.push({
                        key: sItem.id,
                        value: "None"
                    });
                }
            });
            this.setState({result: searchResult});
        }        
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