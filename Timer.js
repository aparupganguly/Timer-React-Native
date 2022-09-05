import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'


const Timer = () => {




    const Restart = () =>{
        setSeconds(0);
        setMinutes(0);

    }
    const Stop = () =>{ 
        clearInterval(timer);
        
    }

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    var timer;

    useEffect(() => {
        timer = setInterval(() => {


            setSeconds(seconds + 1);

            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }





        }, 1000)


        return () => clearInterval(timer);



    })





    return (
        <>
        <View style ={styles.main}>

        <Text style = {styles.text}>Welcome To Timer!</Text>
        <View style = {styles.container}>
            

            <Text style = {styles.timer}>{minutes <10? "0" + minutes: minutes} : {seconds<10? "0" + seconds: seconds}</Text>
<View style = {styles.btn}>

        <TouchableOpacity
        onPress={Restart}
        >
            <Text style= {styles.btn}>
                Restart
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress = {Stop}
        >
            <Text style= {styles.btn}>
                Stop
            </Text>
        </TouchableOpacity>

        </View>
        </View>
</View>
        <Text style ={styles.credits}> Created By Aparup Ganguly!</Text>
</>
    )
}

export default Timer

const styles = StyleSheet.create({
    
    
    
    text: {
        fontSize: 40,
        color: "#0F3460",
        textAlign: "center",
        marginTop:100,
        
        
    },
    timer : {
        textAlign: "center",
        color: "#EEEEEE",
        fontSize: 50,
        padding: 50,


    },
    container:{
        
        backgroundColor:"#645CAA",
        margin: 20,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop:110,
        borderRadius:10,
    },
    btn :{
        flexDirection:'row',
        padding : 25,
        fontSize : 20,
        color: "#EEEE",
    },
    main :{
        backgroundColor: "#9FC9F3",
    },
    credits:{
        textAlign: 'center',
        color: "#16213E",
        fontSize :  16,
        marginTop: 120,
    }
})