import { View,Text, StyleSheet,TextInput,ScrollView,TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useState } from "react";

let n;
const App = () =>{

    const [Change, setchange] = useState(true)

    return(
        <View style ={style.main}>
            <View style= {style.ViewStyle} >
            <Text style={style.ViewText}>Login Basic</Text>

            <View style = {style.ViewContainerInput}>
            <TextInput style={style.ViewTextInput} onChange={()=>{
                
            }} placeholder="Username" defaultValue={n}/>
            <TextInput id="Input2" style={style.ViewTextInput} placeholder="Password" />
            </View >
            <TouchableOpacity onPress={()=>{
                setchange(!Change)
                Change ? alert('rojo') : alert('gris');
                if (n == undefined){
                    alert('si')
                }else{

                }
            }} style = { Change ? style.Btn :  style.Btn2}>
                <Text style = {style.BtnText}>
                    Login
                </Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}
const style = StyleSheet.create(
    {
        main:{
            flex:1,
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',

        },
        ViewStyle:{
            flex: 0.6,
            width: 300,
            backgroundColor: 'white',
            display: 'flex',
            gap: 20,
            justifyContent:'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'gray',
            boxShadow: '1px 1px 5px 5px #a8a8a8',

            

        },

        ViewText:{
            fontSize: 30,
            fontWeight: 600,
            color: 'black',

        },
        ViewTextInput:{
            height: 30,
            width: 200,
            borderWidth: 1,
            borderColor: 'black',
            color: 'black',
            fontSize: 14,
            backgroundColor: 'white',
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 1,
            padding: 5,



        },
        ViewContainerInput: {
            display: 'flex',
            gap:10,
            

        },
        Btn: {
            height: 30,
            width: 100,
            backgroundColor: 'gray',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,

        },
        Btn2:{
            height: 30,
            width: 100,
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
        },
        BtnText:{
            color:'white',
        }
    }
)
export default App;



