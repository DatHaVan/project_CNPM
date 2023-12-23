import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Modal,TextInput, Text,Image, View ,TouchableOpacity, ImageBackground} from 'react-native';


export default function Home_Quan_Tri_Vien  ({navigation})  {

  const onPressBackLogin = () => {
      
    navigation.goBack();
 
  };
 
  return (
    <View style={styles.container}>
        
        <TouchableOpacity
            style={styles.BackLogin}
            onPress={onPressBackLogin} >                 
    
            <Text style={styles.textBackLogin}>Back</Text>
        
          </TouchableOpacity>
        


      </View>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
     flex : 1,
      backgroundColor : 'white',
      alignItems: 'center',
      justifyContent: 'center',
      
      BackLogin : {
        marginTop : -350,
        marginLeft : -65,
        marginRight : 255,
        
      },
      textBackLogin :{
         fontSize : 15,
         color : 'black',
         textAlign : 'center',
         fontWeight : 'bold'
      },  
  },

  
   

 
   
    
     
     
     
    
     
});
