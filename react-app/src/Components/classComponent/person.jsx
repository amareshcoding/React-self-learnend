import React, { Component } from 'react'

class Person extends Component{
     constructor(props){
          super(props);
     }
     render(){
          return(
               <h1>Name: Amaresh</h1>
          )
     }
}
export default Person;

let arr = [4,5,2];
arr = arr.sort(function(a,b){
     return a-b;
});