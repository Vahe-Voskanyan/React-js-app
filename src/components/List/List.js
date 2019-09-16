import React from 'react';
import './List.css';
class List extends React.Component {
    constructor(){
        super();
        this.state={
            loading:false,
            currencies:[],
            error:null,
            
        }
    };
    
}
export default List;