import { View, StyleSheet, Image} from "react-native";

export default function Icona(){
    return(
        <View>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'}} height={30} width={30}/>
            </View>
    )


}const styles = StyleSheet.create({

    image:{
        height:10,
        width:10,
        color:'black'
    },
})