import { View, StyleSheet, Image} from "react-native";

export default function IconMensalidade(){
    return(
        <View>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/4305/4305512.png'}} height={38} width={40}/>
            </View>
    )


}const styles = StyleSheet.create({

    image:{
        height:10,
        width:10,
        color:'black'
    },
})