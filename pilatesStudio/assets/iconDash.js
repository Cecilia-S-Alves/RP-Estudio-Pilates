import { View, StyleSheet, Image} from "react-native";

export default function IconDash(){
    return(
        <View>
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6n7c141M8pM61DY99ZVOTNnOXm6r3u3kSmQKdqKYRfW7d9_kHkmpj1D4OCKxb2ZyF0Hc&usqp=CAU'}} height={38} width={40}/>
            </View>
    )


}const styles = StyleSheet.create({

    image:{
        height:10,
        width:10,
        color:'black'
    },
})