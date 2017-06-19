import React, {Component} from 'react';
import {connect} from 'react-redux';
var searchResult;
var searchResultDisplay;
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Search extends Component {
    render() {
        return (
            <div>
                <h3>Search for item:</h3>
                <input id="search_field" type="text" onChange={() => filterUsers(this.props.items, this.props.clanUsers)}/>
                <br></br>
                <h3>Result</h3>
                <div>{searchResultDisplay}</div>
            </div>
        );
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


function filterUsers(items, users){
    
    var sf = document.getElementById('search_field');

    if(sf.value.length < 3){
        return;
    }

    var selectedItems = items.filter(function (item){
        return item.id.includes(sf.value);
    });

    if(selectedItems){
        searchResult = [];
        selectedItems.forEach(function(sItem){
            var sUsers = [];
            users.forEach(function (user){
                var temp = [];

                temp = user.crafting.filter(function(c){
                    return (c.type == sItem.type &&
                    c.skill > sItem.skill);
                });
                if(temp.length){
                    sUsers.push(user);
                } 
            });
            if(sUsers.length){
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
        this.setState({result: searchResult !== -1});
    }
}