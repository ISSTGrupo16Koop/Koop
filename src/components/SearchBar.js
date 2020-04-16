import React from "react";
import Button from "./Button"
import "../css/SearchBar.css";
export default class SearchBar extends React.Component {
 constructor(props) {
 super(props);
 this.subjectSearchSB = this.subjectSearchSB.bind(this);
 }
 
 
 subjectSearchSB() {
 this.props.subjectSearchHome();
 }
 
 
 render() {
 return (
    <ul class="searchcontainer">
        
               
                
        <li class="flex-item">
            <div class= "search">
                
                    <input
                        type = "text"
                        class="searchTerm"
                        placeholder="     ¿qué quieres aprender hoy?"
                        onChange={event => this.props.subjectSearchSB(event.target.value)}
                    />
                
                
                
            </div>
        </li>
        <li >
                <Button text={"buscar"}/>
                </li>
 </ul>
 );
 }
}
