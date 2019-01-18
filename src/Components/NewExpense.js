import React,{Component} from 'react'
import {
    View,
    Text
    
} from 'react-native'

import Button from './Button'

export default class NewExpense extends Component{
    constructor(props){
        super(props);
        this.state={detail:props.detail}
    }
 
   _ValidateLogin = () =>{
        const {detail} = this.state ;
        if( !isNaN(detail) ){
            alert('Please enter valid detail ')
        }
        else{
                this.props.onSubmit({detail})
         }
    }
    render(){
        return(
            <View style={{ marginHorizontal:16,
            alignItems:'center',
            backgroundColor:'#333' }}>
                <Text style={{fontSize:16, color:'#eee'}}>Expense Detail</Text>
                <Button inputChange={(detail) => this.setState({ detail })}
                    inputValue={this.state.detail}
                    inputplaceholder={'detail'}
                />
                <Button inputtext={'Submit'} functionCall={this._ValidateLogin} />
                
                </View>
        )
    }
}