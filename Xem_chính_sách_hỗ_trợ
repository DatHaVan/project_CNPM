
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Modal,TextInput, Text,Image, View ,Linking,ScrollView,TouchableOpacity, ImageBackground} from 'react-native';
import React, {useState, useRef} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Alert } from 'react-native';

export default function Chinh_sach_ho_tro_dan ({navigation})  {
  const [timKiemValue, settimKiemValue] = useState('');
  const timKiemInputRef = useRef(null);
  const handletimKiemInputChange = (text) => {
    settimKiemValue(text);
  };
  const onPressTimKiem= () => {
  
    console.log('Button pressed');
  };
 
const onPress1 = () => {
  const url = 'https://dichvucong.gov.vn/p/home/dvc-chi-tiet-thu-tuc-hanh-chinh.html?ma_thu_tuc=1.005144'; 
  Linking.openURL(url);
};

const onPress2 = () => {
  const url = 'https://dichvucong.gov.vn/p/home/dvc-chi-tiet-thu-tuc-hanh-chinh.html?ma_thu_tuc=1.002407'; 
  Linking.openURL(url);
};
const onPress3 = () => {
  const url = 'https://dichvucong.gov.vn/p/home/dvc-chi-tiet-thu-tuc-hanh-chinh.html?ma_thu_tuc=1.001622'; 
  Linking.openURL(url);
};
const onPress4= () => {
  const url = 'https://dichvucong.gov.vn/p/home/dvc-chi-tiet-thu-tuc-hanh-chinh.html?ma_thu_tuc=1.008999'; 
  Linking.openURL(url);
};
const onPress5 = () => {
  const url = 'https://dichvucong.gov.vn/p/home/dvc-chi-tiet-thu-tuc-nganh-doc.html?ma_thu_tuc=5.000109'; 
  Linking.openURL(url);
};
 return(
  <View style={styles.container}>
       <TextInput
        style={styles.boxtimKiem}
        placeholder="Tìm Kiếm Chính Sách"
        onChangeText={handletimKiemInputChange}
        value={timKiemValue}
      />
       <TouchableOpacity onPress={onPressTimKiem}>
      <Image
        source={require('c:\Users\phuong\Downloads\cnpmKinhLup.jpg')} // Thay đổi đường dẫn đến hình ảnh của bạn
        style={{ width: 50, height: 50 }} // Điều chỉnh kích thước hình ảnh theo ý muốn
      />
    </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={onPress1}>
        <Text>Đề nghị miễn giảm học phí,......</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button2} onPress={onPress2}>
        <Text>Xét cấp học bổng chính sách</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button3} onPress={onPress3}>
        <Text>Hỗ trợ ăn trưa đối với trẻ em mẫu giáo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button4} onPress={onPress4}>
        <Text>Chính sách hỗ trợ phẫu thuật tim cho trẻ em</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button5} onPress={onPress5}>
        <Text>Chính sách hỗ trợ chuyển đổi cơ cấu cây trồng </Text>
      </TouchableOpacity>
    </View>
 );


 };
const styles = StyleSheet.create({
  container: {
     flex : 1,
      backgroundColor : 'white',
      alignItems: 'center',
      justifyContent: 'center',
     
  },
 
   boxtimKiem : {
    width : '80%',
    height: 40,
    marginBottom :920,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  
    
   },
   button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width : '85%',
    height : 40,
    borderRadius : 15,
    marginTop : -707,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width : '85%',
    height : 40,
    borderRadius : 15,
    marginTop : 10,
  },

   button3: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width : '85%',
    height : 40,
    borderRadius : 15,
    marginTop : 10,
  },
  button4: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width : '85%',
    height : 40,
    borderRadius : 15,
    marginTop : 10,
  },
  button5: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width : '85%',
    height : 40,
    borderRadius : 15,
    marginTop : 10,
  },
});
