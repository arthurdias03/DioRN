import React from 'react'
import {View, Image,Text, StyleSheet, SafeAreaView, StatusBar,Pressable,Linking} from 'react-native'

const colorGithub= '#010409'
const imageProfileGithub='https://avatars.githubusercontent.com/u/82972465?v=4'
const urlToMyGithub='https://github.com/arthurdias03'
const App= ()=>{
    const handlePressGoToGithub= async () => {
        console.log('verificando link');
      const res = await  Linking.canOpenURL(urlToMyGithub);
      if(res){
        console.log('link aprovado');
        console.log('abrindo link ');
        await Linking.openURL(urlToMyGithub);
      }
    }
    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="white-content"/>
    <View style={style.content}>
        <Image accessibilityLabel='Arthur Github' source={{uri:imageProfileGithub}} style={style.avatar}/>
        <Text 
        accessibilityLabel='Nome' 
        style={[style.text,style.name]}>Arthur Dias
        </Text>
        <Text 
        accessibilityLabel='Nickname' 
        style={[style.text,style.nickname]}>arthurdias03
        </Text>
        <Text 
        accessibilityLabel='Descrição' 
        style={style.text}>Front-end Developer UX/UI designer
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
        <View style={style.button}>
            <Text style={[style.text,style.textButton]}>Open in Github</Text>
        </View>
        </Pressable>

    </View>
    </SafeAreaView>
    )
}

export default App;

const style = StyleSheet.create({
    container:{
        //Column
        backgroundColor:colorGithub,
        flex:1, //expandir para a tela inteira
        justifyContent:'center',
    },
    content:{
        alignItems:'center',
        padding:20,
        
    },
    text:{
        color:'white',
        fontSize:20,
        marginTop:4,
        marginBottom:5,
    },
    avatar:{
        width:200,
        height:200,
        borderRadius:100,
        borderColor:'white',
        borderWidth:2,
        
    },
    name:{
        fontSize:25,
        fontWeight:'bold',
        marginTop:15,
    },
    nickname:{
        fontSize:18,
        color:'grey',
        marginTop:-4,
    },
    button:{
        backgroundColor:'grey',
        borderRadius:10,
        padding:20,
        marginTop:10, 
    },
    textButton:{
        fontWeight:'bold',
        fontSize:18,
    }
});