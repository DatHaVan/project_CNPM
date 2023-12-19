import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { StyleSheet,Modal,Text,Image,TextInput, View ,TouchableOpacity, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const image = {uri: 'https://images.pexels.com/photos/62693/pexels-photo-62693.jpeg?auto=compress&cs=tinysrgb&w=600'};




export default function Login({navigation}) {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const [cccdValue, setcccdValue] = useState('');
  const [sdtValue, setsdtValue] = useState('');
  const [hotenValue, sethotenValue] = useState('');
  const [gioitinhValue, setgioitinhValue] = useState('');
  const [ngaysinhValue, setngaysinhValue] = useState('');
  const [noithuongtruValue, setnoithuongtruValue] = useState('');
  
  const [matkhauDangKyValue, setmatkhauDangKyValue] = useState('');
  const [socccdDangNhapValue, setsocccdDangNhapValue] = useState('');
  const [matkhauDangNhapValue, setmatkhauDangNhapValue] = useState('');


  const cccdInputRef = useRef(null);
  const sdtInputRef = useRef(null);
  const hotenInputRef = useRef(null);
  const gioitinhInputRef = useRef(null);
  const ngaysinhInputRef = useRef(null);
  const noithuongtruInputRef = useRef(null);

  const matkhauDangKyInputRef = useRef(null);
  const socccdDangNhapInputRef = useRef(null);
  const matkhauDangNhapInputRef = useRef(null);
  

  const handlecccdInputChange = (text) => {
    setcccdValue(text);
  };
  const handlesdtInputChange = (text) => {
    setsdtValue(text);
  };
  
  const handlehotenInputChange = (text) => {
    sethotenValue(text);
  };

  const handlegioitinhInputChange = (text) => {
    setgioitinhValue(text);
  };
  const handlengaysinhInputChange = (text) => {
    setngaysinhValue(text);
  };
  const handlenoithuongtruInputChange = (text) => {
    setnoithuongtruValue(text);
  };
  
  const handlematkhauDangKyInputChange = (text) => {
    setmatkhauDangKyValue(text);
  };
  const handlesocccdDangNhapInputChange = (text) => {
    setsocccdDangNhapValue(text);
  };
  const handlematkhauDangNhapInputChange = (text) => {
    setmatkhauDangNhapValue(text);
  };
  const onPressDangKy = () => {

      setModalVisible(true); // Mở modal khi nhấn nút "ĐĂNG KÝ"
    
  };
  const closeModal = () => {
    setModalVisible(false); // Đóng modal khi cần
    setLoginModalVisible(false);
  };
 const onPressDangNhap = () => {
   // Xử lý khi người dùng chạm vào nút
    // Thêm các xử lý khác nếu cần
    setLoginModalVisible(true); // Mở modal khi nhấn nút "ĐĂNG NHẬP"

 };
 const onPressDienCCCD = () => {
  // Xử lý khi người dùng chạm vào nút
   // Thêm các xử lý khác nếu cần
    if (cccdInputRef.current) {
      cccdInputRef.current.focus();
    }
};
const onPressDienSDT = () => {
  // Xử lý khi người dùng chạm vào nút
   // Thêm các xử lý khác nếu cần
   
   if (sdtInputRef.current) {
    sdtInputRef.current.focus();
  }

};
const onPressDienHovaTen = () => {
  // Xử lý khi người dùng chạm vào nút
   // Thêm các xử lý khác nếu cần
   if (hotenInputRef.current) {
    hotenInputRef.current.focus();
  }

};
const onPressDienGioiTinh = () => {
  // Xử lý khi người dùng chạm vào nút
   // Thêm các xử lý khác nếu cần
   if (gioitinhInputRef.current) {
    gioitinhInputRef.current.focus();
  }

};
const onPressDienNamSinh = () => {
  // Xử lý khi người dùng chạm vào nút
   // Thêm các xử lý khác nếu cần
   if (ngaysinhInputRef.current) {
    ngaysinhInputRef.current.focus();
  }

};
const onPressDienDiaChi = () => {
  // Xử lý khi người dùng chạm vào nút
   // Thêm các xử lý khác nếu cần
   if (noithuongtruInputRef.current) {
    noithuongtruInputRef.current.focus();
  }

};

const onPressDienMatKhauDangKy = () => {
  // Xử lý khi người dùng chạm vào nút
   // Thêm các xử lý khác nếu cần
   if (matkhauDangKyInputRef.current) {
    matkhauDangKyInputRef.current.focus();
  }

};
 const closeModalDangNhap = async () => {
  // Đóng modal khi cần

 //readData(); async
 const cccdValue = await AsyncStorage.getItem('cccdValue');
 const matkhauDangKyValue = await AsyncStorage.getItem('matkhauDangKyValue');
 if(cccdValue === socccdDangNhapValue && matkhauDangKyValue === matkhauDangNhapValue){
  navigation.navigate('Home');
 }else {

  Alert.alert('Số CCCD hoặc mật khẩu chưa chính xác ! Hãy thử lại ');
 }

 
};



const closeModalDangKy = async () => {
  try {
    await AsyncStorage.setItem('cccdValue', cccdValue);
    await AsyncStorage.setItem('sdtValue', sdtValue);
    await AsyncStorage.setItem('hotenValue', hotenValue,);
    await AsyncStorage.setItem('gioitinhValue', gioitinhValue);
    await AsyncStorage.setItem('ngaysinhValue', ngaysinhValue,);
    await AsyncStorage.setItem('noithuongtruValue', noithuongtruValue);

    await AsyncStorage.setItem('matkhauDangKyValue', matkhauDangKyValue);
    // Các bước lưu dữ liệu khác nếu cần thiết

    Alert.alert('Đăng ký thành công.');

    setModalVisible(false); // Đóng modal sau khi lưu dữ liệu thành công
 } catch (error) {
    console.log(error);
  }
};
/*const readData = async () => {
  try {
    const cccdValue = await AsyncStorage.getItem('cccdValue');
    const sdtValue = await AsyncStorage.getItem('sdtValue');
    const hotenValue = await AsyncStorage.getItem('hotenValue');
    const gioitinhValue = await AsyncStorage.getItem('gioitinhValue');
    const ngaysinhValue = await AsyncStorage.getItem('ngaysinhValue');
    const noithuongtruValue = await AsyncStorage.getItem('noithuongtruValue');
   
    const matkhauDangKyValue = await AsyncStorage.getItem('matkhauDangKyValue');


    if (cccdValue !== null  && matkhauDangKyValue !== null && sdtValue !== null  && hotenValue !== null && gioitinhValue !== null && ngaysinhValue !== null && noithuongtruValue !== null && sonhaValue !== null ) {
      // Xử lý dữ liệu ở đây nếu cần
      console.log('cccdValue:',cccdValue);
      console.log('matkhauDangKyValue:', matkhauDangKyValue);

    } else {
      console.log('No data found');
    }
  } catch (error) {
    console.error(error);
  }
};*/

const onPressDienSoCCCDDangNhap= () => {
  // Xử lý khi người dùng chạm vào nút
   // Thêm các xử lý khác nếu cần
   if (socccdDangNhapInputRef.current) {
    socccdDangNhapInputRef.current.focus();
   }
};
const onPressDienMatKhau = () => {
  // Xử lý khi người dùng chạm vào nút
   // Thêm các xử lý khác nếu cần
   if (matkhauDangNhapInputRef.current) {
    matkhauDangNhapInputRef.current.focus();
   }
};
return ( 

    //<Home />
    
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}></Text>

  <View style = {styles.topDangKy}>
          <TouchableOpacity style={styles.button1} onPress={onPressDangKy}>
               <Text style = {styles.TextDangKy}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
  </View>
  
  <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
  <View style={styles.centeredView}>
        <View style={styles.modalView}>
             <View style={styles.textDienSoCCCD}>
               <TouchableOpacity style={styles.boxDienCCCD} onPress={onPressDienCCCD}>
                  <Text style = {styles.TextDienSoCCCD}></Text>
                  <TextInput
                           ref={cccdInputRef}
                           style={styles.Textcccd}
                           onChangeText={handlecccdInputChange}
                           value={cccdValue}
                           placeholder="Nhập số căn cước công dân"
                          />

               </TouchableOpacity>  
            </View>
            
            <View style={styles.textDienSDT}>
               <TouchableOpacity style={styles.boxDienSDT} onPress={onPressDienSDT}>
                  <Text style = {styles.TextDienSDT}></Text>
                  <TextInput
                           ref={sdtInputRef}
                           style={styles.TextSDT}
                           onChangeText={handlesdtInputChange}
                           value={sdtValue}
                           placeholder="Nhập số điện thoại"
                          />
               </TouchableOpacity>  
            </View>
            
            <View style={styles.textDienHovaTen}>
               <TouchableOpacity style={styles.boxDienHovaTen} onPress={onPressDienHovaTen}>
                  <Text style = {styles.TextHoten}></Text>
                  <TextInput
                           ref={hotenInputRef}
                           style={styles.Texthoten}
                           onChangeText={handlehotenInputChange}
                           value={hotenValue}
                           placeholder="Nhập họ và tên"
                          />
               </TouchableOpacity>  
            </View>
             
            <View style={styles.textDienGioiTinh}>
               <TouchableOpacity style={styles.boxDienGioiTinh} onPress={onPressDienGioiTinh}>
                  <Text style = {styles.TextDienGioiTinh}></Text>
                  <TextInput
                           ref={gioitinhInputRef}
                           style={styles.TextGioiTinh}
                           onChangeText={handlegioitinhInputChange}
                           value={gioitinhValue}
                           placeholder="Nhập giới tính"
                          />
               </TouchableOpacity>  
            </View>

            <View style={styles.textDienNamSinh}>
               <TouchableOpacity style={styles.boxDienNamSinh} onPress={onPressDienNamSinh}>
                  <Text style = {styles.TextNamSinh}></Text>
                  <TextInput
                           ref={ngaysinhInputRef}
                           style={styles.Textngaysinh}
                           onChangeText={handlengaysinhInputChange}
                           value={ngaysinhValue}
                           placeholder="Nhập ngày / tháng / năm sinh "
                          />
               </TouchableOpacity>  
            </View>

            <View style={styles.textDienDiaChi}>
               <TouchableOpacity style={styles.boxDienDiaChi} onPress={onPressDienDiaChi}>
                  <Text style = {styles.TextDiaChi}> </Text>
                  <TextInput
                           ref={noithuongtruInputRef}
                           style={styles.Textnoithuongtru}
                           onChangeText={handlenoithuongtruInputChange}
                           value={noithuongtruValue}
                           placeholder="Nhập địa chỉ thường trú "
                          />
               </TouchableOpacity>  
            </View>
            
           

          <View style={styles.textDienMatKhauDangKy}>
               <TouchableOpacity style={styles.boxDienMatKhauDangKy} onPress={onPressDienMatKhauDangKy}>
                  <Text style = {styles.textMatKhauDangKy}></Text>
                  <TextInput
                           ref={matkhauDangKyInputRef}
                           style={styles.Textmatkhaudangky}
                           onChangeText={handlematkhauDangKyInputChange}
                           value={matkhauDangKyValue}
                           placeholder="Nhập mật khẩu "
                          />
               </TouchableOpacity>  
            </View> 

          <Text style={styles.modalText1}>Số định danh cá nhân</Text>
          <Text style={styles.modalText2}>Số điện thoại</Text>
          <Text style={styles.modalText3}>Họ và tên</Text>
          <Text style={styles.modalText4}>Giới tính</Text>
          <Text style={styles.modalText5}>Ngày-Tháng-Năm Sinh</Text>
          <Text style={styles.modalText6}>Nơi thường trú(xã,huyện/phường,tỉnh)</Text>
         
          <Text style={styles.modalText8}>Nhập mật khẩu </Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={closeModal} >                 
    
            <Text style={styles.textStyle}>Đóng </Text>
        
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonDangKyTaiKhoan}
            onPress={closeModalDangKy} >                 
    
            <Text style={styles.textStyleDangKy}>Đăng Ký</Text>
        
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    
  <View style = {styles.topDangNhap}>
          <TouchableOpacity style={styles.button2} onPress={onPressDangNhap}>
              <Text style = {styles.TextDangNhap}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
  </View>
  
  <Modal
      animationType="slide"
      transparent={true}
      visible={loginModalVisible}
      onRequestClose={() => {
        setLoginModalVisible(!loginModalVisible);
      }}>
  <View style={styles.centeredViewDangNhap}>
    
        <View style={styles.modalViewDangNhap}>
              <View style={styles.textDienSoCCCDDangNhap}>
               <TouchableOpacity style={styles.boxDienSoCCCDDangNhap} onPress={onPressDienSoCCCDDangNhap}>
                  <Text style = {styles.textDienSoDinhDanhCaNhan}></Text>
                  <TextInput
                           ref={socccdDangNhapInputRef}
                           style={styles.cccdDangNhap}
                           onChangeText={handlesocccdDangNhapInputChange}
                           value={socccdDangNhapValue}
                           placeholder="Nhập số căn cước công dân"
                          />
               </TouchableOpacity>  
             </View>
            
        <View style={styles.textDienMatKhau}>
               <TouchableOpacity style={styles.boxDienMatKhau} onPress={onPressDienMatKhau}>
                  <Text style = {styles.TextMatKhau}></Text>
                  <TextInput
                           ref={matkhauDangNhapInputRef}
                           style={styles.TextmatkhauDangNhap}
                           onChangeText={handlematkhauDangNhapInputChange}
                           value={matkhauDangNhapValue}
                           placeholder="Nhập mật khẩu"
                          />
               </TouchableOpacity>  
          </View>
           

          <Text style={styles.modalTextUserName}>Số định danh cá nhân</Text>
          <Text style={styles.modalTextPasswork}>Mật Khẩu</Text>

          <TouchableOpacity
            style={[styles.buttonDangNhap, styles.buttonCloseDangNhap]}
            onPress={closeModal} >                 
    
            <Text style={styles.textStyleDangNhap}>Đóng </Text>
        
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonDangNhapTaiKhoan}
            onPress={closeModalDangNhap} >                 
    
            <Text style={styles.textStyleDangNhap}>Đăng Nhập</Text>
        
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

    



  <View style = {styles.ThongTin}>
         <Text style = {styles.TextThongTin}>    Phần mềm quản lý nhân khẩu ở địa phương giúp cán bộ địa phương và người dân đơn giản hoá các thủ tục hành chính</Text>
  </View>

  <View style = {styles.textcauHoiThuongGap}>
     <Text style = {styles.TextCauHoiThuongGap}>Câu Hỏi Thường Gặp</Text>
  </View>

  <View style = {styles.Hotline}>
     <Text style = {styles.TextHotline}>HotLine hỗ trợ</Text>
  </View>

  <View style = {styles.boxcauHoiThuongGap}>
         <Image
            source = {{uri : 'https://media.istockphoto.com/id/1162198273/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-d%E1%BA%A5u-ch%E1%BA%A5m-h%E1%BB%8Fi-thi%E1%BA%BFt-k%E1%BA%BF-minh-h%E1%BB%8Da-vector-ph%E1%BA%B3ng.jpg?s=612x612&w=0&k=20&c=kLu3UwW8UqmExa6IR9ygcQxG5h5JJUIjaqQfIMODkK4= '}}
            style = {styles.textboxCauhoi}/>
  </View>

  <View style = {styles.boxHotline}>
         <Image
            source = {{uri : 'https://anhdep.tv/attachments/1d1a7a3a181c73fe249ba03433882a29-jpeg.18833/'}}
            style = {styles.textboxhotline}/>
  </View>

  </ImageBackground>
  </View>
 

);
}

const styles = StyleSheet.create({
container: {
 flex : 1,
  backgroundColor : 'yellow',
  alignItems: 'center',
  justifyContent: 'center',
},

image : {
flex: 1,
resizeMode: 'center',
},
button1 : {
 backgroundColor : '#5bc7eb',
 marginTop : 250,
 borderRadius : 50,
 marginLeft : 35,
 marginRight : 190,
 marginVertical : 30, 
 borderWidth : 1,
},
centeredView: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
marginTop: 23,
},



modalView: {
margin: 20,
width : 500,
height : 500,
backgroundColor: '#ffffff',
borderRadius: 20,
padding: 35,
alignItems: 'center',
shadowColor: '#000',
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5,
},
button: {
borderRadius: 20,
padding: 10,
elevation: 2,
},
buttonOpen: {
backgroundColor: '#F194FF',
},
buttonClose: {
backgroundColor: '#0866ff',
marginLeft : -30,
height : '10%', 
width : '40%',
marginTop : 70,
marginRight : 150,


},
textStyle: {
fontSize : 18,
color: 'white',
fontWeight: 'bold',
textAlign: 'center',


},

modalText1: {
marginBottom: 15,
textAlign: 'center',
marginLeft : -240,
marginTop : -368,
},

modalText2 :{
marginBottom: 15,
textAlign: 'center',
marginLeft : -290,
marginTop : 20,
},
modalText3 :{
marginBottom: 15,
textAlign: 'center',
marginLeft : -315,
marginTop : 18,
},
modalText4 :{
marginBottom: 15,
textAlign: 'center',
marginLeft : -325,
marginTop : 15,
},
modalText5 :{
marginBottom: 15,
textAlign: 'center',
marginLeft : -240,
marginTop : 18,
},
modalText6 :{
marginBottom: 15,
textAlign: 'center',
marginLeft : -145,
marginTop : 17,
},


modalText8 : {
marginLeft : -275,
marginTop : 25,

},

centeredViewDangNhap: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
marginTop: 23,
},



modalViewDangNhap: {
margin: 20,
width : 500,
height : 500,
backgroundColor: 'white',
borderRadius: 20,
padding: 35,
alignItems: 'center',
shadowColor: '#000',
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5,
},
buttonDangNhap: {
borderRadius: 20,
padding: 10,
elevation: 2,

},
buttonOpenDangNhap: {
backgroundColor: '#F194FF',
},
buttonCloseDangNhap: {
backgroundColor: '#0866ff',
marginLeft : -30,
height : '10%', 
width : '40%',
marginTop : 80,
marginRight : 150,
},
textStyleDangNhap: {
fontSize : 18,
color: 'white',
fontWeight: 'bold',
textAlign: 'center',
},
TextDangKy : {
fontSize : 20,
fontStyle : 'italic',
textAlign : 'center'
}, 
button2 : {
backgroundColor : '#5bc7eb',
marginTop : -59,
borderRadius : 50,
marginLeft : 190,
marginRight : 35,
marginVertical : 30, 
borderWidth : 1,
},
TextDangNhap : {
fontSize : 20,
fontStyle : 'italic',
textAlign : 'center'
},
TextThongTin : {
fontSize : 20,
fontWeight : 'bold',
marginTop : -3,
},
TextCauHoiThuongGap : {
fontStyle : 'italic',
fontSize : 16,
marginTop : 350,
marginLeft : 20,
},
TextHotline : {
fontStyle : 'italic',
fontSize : 16,
marginTop : -23,
marginLeft : 220,
},
boxcauHoiThuongGap : {
width: 70,
height: 70,
 borderRadius: 50, 
 backgroundColor: '#ffff', // Màu nền của hình tròn
 marginLeft : 53,
 marginTop : -95,
 justialfyContent : 'center',
 alignItems : 'center',
 overflow : 'hidden',
},
textboxCauhoi : {
width: '90%',
height: '90%',
resizeMode: 'cover', // Để hình ảnh tự điều chỉnh kích thước để vừa với hình tròn
borderRadius: 50, 
},
boxHotline : {
width: 70,
height: 70,
borderRadius: 50, 
backgroundColor: '#fdde2b', // Màu nền của hình tròn
marginLeft : 235,
marginTop : -70,
justialfyContent : 'center',
alignItems : 'center',
overflow : 'hidden',
},
textboxhotline  : {
width: '100%',
height: '100%',
resizeMode: 'cover', // Để hình ảnh tự điều chỉnh kích thước để vừa với hình tròn
borderRadius: 50, // Đảm bảo hình ảnh cũng là hình tròn
},
textDienSoCCCD :{
 marginLeft : -255,
 backgroundColor : '#f0f2f5',
 marginTop : -5, 
 width : '100%',
 height : '7%',
 textAlign : 'center',
 alignItems : 'center',
 marginLeft : -30,
}, 
TextDienSoCCCD: {
textAlign : 'center',
opacity: 0.2,
marginTop : -20,
alignItems : 'center',

},











textDienSDT :{
marginLeft : -255,
backgroundColor : '#f0f2f5',
marginTop : 20, 
width : '100%',
height : '7%',
textAlign : 'center',
marginLeft : -25,
alignItems : 'center',
}, 
TextDienSDT : {
textAlign : 'center',
opacity: 0.2,
marginHorizontal : 'auto',
marginVertical : 'auto',
marginTop : -20,
},
textDienHovaTen :{
marginLeft : -255,
backgroundColor : '#f0f2f5',
marginTop : 20, 
width : 100,
height : 20,
textAlign : 'center',
marginLeft : -25,
alignItems : 'center',
}, 
TextHoten : {
textAlign : 'center',
opacity: 0.2,
marginHorizontal : 'auto',
marginVertical : 'auto',
marginTop : -20,
},

textDienGioiTinh :{
marginLeft : -255,
backgroundColor : '#f0f2f5',
marginTop : 20, 
width : '100%',
height : '7%',
textAlign : 'center',
marginLeft : -25,
alignItems : 'center',
}, 

TextDienGioiTinh : {
textAlign : 'center',
opacity: 0.2,
marginLeft : -100,
marginTop : -20,
},


textDienNamSinh :{
marginLeft : -255,
backgroundColor : '#f0f2f5',
marginTop : 20, 
width : '100%',
height : '7%',
textAlign : 'center',
marginLeft : -25,
alignItems : 'center',
}, 

TextNamSinh : {
textAlign : 'center',
opacity: 0.2,
marginHorizontal : 'auto',
marginVertical : 'auto',
marginTop : -20,
},

textDienDiaChi :{
marginLeft : -255,
backgroundColor : '#f0f2f5',
marginTop : 22, 
width : '100%',
height : '7%',
textAlign : 'center',
marginLeft : -25,
alignItems : 'center',
}, 

TextDiaChi : {
textAlign : 'center',
opacity: 0.2,
marginHorizontal : 'auto',
marginVertical : 'auto',
marginTop : -20,
},

textDienDiaChiCuThe :{
marginLeft : -255,
backgroundColor : '#f0f2f5',
marginTop : 22, 
width : '100%',
height : '7%',
textAlign : 'center',
marginLeft : -25,
alignItems : 'center',
}, 

textDiaChiCuThe : {
textAlign : 'center',
opacity: 0.2,
marginHorizontal : 'auto',
marginVertical : 'auto',
marginTop : -20,

},
textDienMatKhauDangKy :{
marginLeft : 25,
backgroundColor : '#f0f2f5',
marginTop : 30, 
width : '100%',
height : '7%',
textAlign : 'center',
marginLeft : -25,
alignItems : 'center',
}, 

textMatKhauDangKy : {
marginTop : -17,
},

textStyleDangKy: {
fontSize : 18,
color: 'white',
fontWeight: 'bold',
textAlign: 'center',


},
buttonDangKyTaiKhoan: {
borderRadius: 20,
padding: 10,
elevation: 2,
backgroundColor : 'red',

height : '10%', 
width : '40%',
marginTop : -43,
marginLeft : 170,
},

modalTextUserName  : {
marginTop : -120,
marginLeft : 30,
marginRight : 30,
alignItems : 'center',
},
modalTextPasswork : {
marginRight : 30,
marginTop : 40,
marginLeft : 20,

},

buttonCloseDangNhap: {
backgroundColor: '#0866ff',
marginLeft : -30,
height : '10%', 
width : '40%',
marginTop : 100,
marginRight : 150,
},
buttonDangNhapTaiKhoan: {
borderRadius: 20,
padding: 10,
elevation: 2,
backgroundColor : 'red',
height : '10%', 
width : '40%',
marginTop : -43,
marginLeft : 170,
},

textDienSoCCCDDangNhap : {

backgroundColor : '#f0f2f5',

width : '100%',
height : '7%',
textAlign : 'center',
marginLeft : -5,
alignItems : 'center',

marginTop : 225,
},
textDienSoDinhDanhCaNhan : {
 marginTop : -20,
 alignItems : 'center',
},

textDienMatKhau : {
marginLeft : -255,
backgroundColor : '#f0f2f5',
marginTop : 30, 
width : '100%',
height : '9%',
textAlign : 'center',
marginLeft : -25,
}, 
boxDienMatKhau : {
marginHorizontal : 'auto',
marginVertical : 'auto',
marginTop : -18,
alignItems : 'center',
},
   
  
   
   });
   
