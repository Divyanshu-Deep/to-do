import React, { Component } from "react";
import TodoItems from "./TodoItems";
import  "./TodoList.css"


class TodoList extends Component {
constructor(props){
    super(props);

this.state = {
    items: []  
};


 this.addItem = this.addItem.bind(this);
 this.deleteItem = this.deleteItem.bind(this);
}

addItem(e){

    if (this._inputElement.value !==""){              // if the input has some value then add new item
        var newItem = {
            text: this._inputElement.value,
            key: Date.now()  // to provide a rondom key to the item
        };

        this.setState((prevState) =>{
             return {
                 items: prevState.items.concat(newItem)
             };
        }
        );
    }
            this._inputElement.value = ""; // make the field empty for next item to be added
            console.log(this.state.items);

            e.preventDefault();
}
     
        deleteItem(key) {
            var filteredItems = this.state.items.filter( (item) => {

                    return(item.key !== key)

            });

            this.setState({
                items: filteredItems
            });
        }



    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                        placeholder="Kya krne ka hai bidu ?">       
                        </input>

                        <button type="submit">Add Me</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                            delete={this.deleteItem}
                />
            </div>
        );
    }
}


export default TodoList;