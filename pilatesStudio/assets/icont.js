import { View, StyleSheet, Image} from "react-native";

export default function Icont(){
    return(
        <View>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/4804/4804073.png'}} height={40} width={40}/>
            </View>
    )


}const styles = StyleSheet.create({

    image:{
        height:10,
        width:10,
        color:'black'
    },
})