import { View,Text, StyleSheet } from "react-native";

export default function Card({nome,idade}){
    return(
        <View>
        <View style={styles.card}>
            <Text style={styles.texto}>
                {nome}<br/>Idade:{idade}</Text></View> <View>
            </View></View>
    )
}const styles = StyleSheet.create({

    card:{
        padding:10,
        margin:10,
        backgroundColor:'#f4f4f4',
        borderRadius:8,
        alignItems:'center',
        flexDirection:'row',
    },
    image:{
        height:170,
        width:170,
        flex:1,
        borderRadius:8,
    },
    texto:{
        flex:1,
        fontSize:35,
        color: '#7575e0',
        flexDirection:'column'
    },
    botao:{
        backgroundColor:"#7575e0",
        borderRadius:8,
    }
    

})