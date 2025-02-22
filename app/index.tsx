import { Text, View,StyleSheet, Button, TextInput, Image, ImageBackground } from "react-native";
import { useState } from 'react';


export default function Index() {
const [value, Setvalue] = useState(-1);
const [tries, Settries] = useState(0);
const [randomNumber,SetrandomNumber]=useState(Math.floor(Math.random() * 100));
const [perfect,SetPerfect] = useState(false)
const [higher,Sethigher] = useState(false)
const [lower,Setlower] = useState(false)
const [toobig,Settoobig] = useState(false)
const [empty,Setempty] = useState(false)
const [limit,Setlimit] = useState(false)
const [hit,Sethit] = useState(true)

function reset(){
    console.log(randomNumber);
    SetrandomNumber( Math.floor(Math.random() * 100));
    Setvalue(-1)
    Settries(0)
    SetPerfect(false)
    Sethigher(false)
    Setlower(false)
    Settoobig(false)
    Setempty(false)
    Setlimit(false)
    Sethit(true)
}
function  Setries(){
  Settries(tries+1)
}
function check (){
    console.log(randomNumber)
      if (value==-1){
        Setempty(true)
        SetPerfect(false)
        Sethigher(false)
        Setlower(false)
        Settoobig(false)
      }
      else if (value>99||value<-1){
        Settoobig(true)
        Setempty(false)
        SetPerfect(false)
        Sethigher(false)
        Setlower(false)
      }
      else if (randomNumber==value){
        if(hit){
            Setries()
            Sethit(false)
        }
        Settoobig(false)
        Setempty(false)
        SetPerfect(true)
        Sethigher(false)
        Setlower(false)
      }
      else if (randomNumber>value){
        Setries()
        Sethigher(true)
        Setlower(false)
        SetPerfect(false)
        Settoobig(false)
        Setempty(false)
      }
      else if (randomNumber<value){
        Setries()
        Setlower(true)
        SetPerfect(false)
        Sethigher(false)
        Settoobig(false)
        Setempty(false)
      }
}
function limittries(){
    if (tries<10 && hit){
      return check()
    }
    else{
      return Setlimit(true)
    }
}
return (
    <View style={styles.container}>
      <View style={styles.divstyle}></View>

      <View style={styles.box1}>

        <Text style={styles.text1}>Enter your guess between 0 and 99:</Text>
        <View style={styles.inbutbox}>
          <TextInput style={styles.input}
            placeholder="Enter your guess"
            placeholderTextColor="gray"
            keyboardType="numeric"
            onChangeText={(text) => {
              console.log(text);
              Setvalue(Number(text));
            }}
            >
          </TextInput>
          <View style={styles.bottom1}>
          <Button title="CHECK" onPress={limittries}/>
          </View>        
        </View>
      </View>

      <View style={styles.divstyle}></View>

      <View style={styles.box2}>
      <Text style={styles.text2}>Your guesses: {tries} ,Remain {10-tries}</Text>
      </View>

      <View style={styles.divstyle}></View>

      <View style={styles.box3}>

      {/* <ImageBackground source={require('./assets/images/icon.png') } style={{width: '100%', height: '100%'}}> */}

      <Text style={styles.text3}>{
      perfect ? "Got it!🎉 Perfect Guess. \n"+ `The number was ✨${randomNumber}✨.` 
      : limit ? `You have reached the limit of 10 tries.🤯\nThe number was\n☠️${randomNumber}☠️.`
      : lower ? "Your guess is too high.📈\ntry going lower.🥺"  
      : higher? "Your guess is too low.📉\ntry going higher.🥺" 
      : empty? "Please enter a number 😐"
      : toobig? "Please enter a number\nbetween 0 and 99.😔"
      : "Lower OR Higher\n🎮Game🎮"}</Text>

      {/* </ImageBackground> */}

      </View>

      <View style={styles.divstyle}></View>


      <View style={styles.box4}>
        <View style={styles.bottom2}>      
          <Button title="RESET" onPress={reset}/>
        </View>
      </View>

      <View style={styles.divstyle}></View>
    </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  box1: {
    width: "96%",
    height: "42%",
    backgroundColor: "#FF00FE",
    borderRadius: 5,

  },
  box2: {
    width: "90%",
    height: "3%",
    backgroundColor: "#2CFEFD",
    borderRadius: 5,
  },
  box3: {
    width: "96%",
    height: "43%",
    backgroundColor: "#FCFF12",
    borderRadius: 5,
  },
  box4: {
    width: "90%",
    height: "4.5%",
    backgroundColor: "#2CFEFD",
    borderRadius: 5,
  },
  divstyle: {
    width: "100%",
    height: "1%",
    backgroundColor: "#FFFFFF",
  },
  text1: {
    fontSize: 18,
    marginTop: 100,
    marginBottom: 10,
    textAlign: "center",
    textAlignVertical: "bottom",
    alignContent: "center",
    
  },
  text2: {
    fontSize: 17,
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  text3:{
    fontSize: 32,
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  text4:{
    fontSize: 20,
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  bottom2:{
    height: "100%",
    width: "17%",
    alignSelf: "center",
  },
  bottom1:{
    height: "100%",
    width: "17%",
    alignSelf: "center",
  },
  input:{
    backgroundColor:"#2CFEFD",
    width: 150,
    height: 35,
    alignSelf: "center",
    textAlign: "left",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  inbutbox:{
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  }
});
