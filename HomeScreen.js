import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Modal,TextInput, Text,Image, View ,TouchableOpacity, ImageBackground} from 'react-native';

const image = {uri: 'https://st.quantrimang.com/photos/image/2021/02/03/Hinh-nen-quoc-huy-VN-4.jpg'};
export default function Home  ({navigation})  {

  const onPressBackLogin = () => {
      
    navigation.goBack();
 
  };
 const onPressDangKyKhaiSinh = () => {
    navigation.navigate('KhaiSinh');
 };
    
 const onPressThongTinNhanKhau = () => {};
   
  const onPressKhaiBaoThuongTru = () => {
   
  };
    
  const onPressChinhSachHoTro = () => {};
   
    const onPressCacDichVuKhac = () => {};
   
  return (
    <View style={styles.container}>
        
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}></Text>

      <View style = {styles.textcauHoiThuongGap}>
         <Text style = {styles.textcauHoiThuongGap}>Câu Hỏi Thường Gặp</Text>
      </View>
  
      <View style = {styles.Hotline}>
         <Text style = {styles.textHotline}>HotLine hỗ trợ</Text>
      </View>

      <View style = {styles.boxcauHoiThuongGap}>
      <Image
         source = {{uri : 'https://media.istockphoto.com/id/1162198273/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-d%E1%BA%A5u-ch%E1%BA%A5m-h%E1%BB%8Fi-thi%E1%BA%BFt-k%E1%BA%BF-minh-h%E1%BB%8Da-vector-ph%E1%BA%B3ng.jpg?s=612x612&w=0&k=20&c=kLu3UwW8UqmExa6IR9ygcQxG5h5JJUIjaqQfIMODkK4= '}}
         style = {styles.textboxCauhoi}
         />
      </View>

      <View style = {styles.boxHotline}>
        <Image
         source = {{uri : 'https://anhdep.tv/attachments/1d1a7a3a181c73fe249ba03433882a29-jpeg.18833/'}}
         style = {styles.textboxhotline}
         />
      </View>
      <View style = {styles.ThongTin}>
         <Text style = {styles.textThongTin}>Phần mềm quản lý nhân khẩu ở địa phương (cấp phường, xã), giúp cán bộ địa phương và người dân đơn giản hoá các thủ tục hành chính</Text>
      </View>

      <View style = {styles.boxThongTinNhanKhau}>
        <TouchableOpacity style={styles.button3} onPress={onPressThongTinNhanKhau}>
         <Text style = {styles.textThongTinNhanKhau}>Thông Tin Nhân Khẩu</Text>
         </TouchableOpacity>
      </View> 
      
      <View style = {styles.boxKhaiBaoThuongTru}>
      <TouchableOpacity style={styles.button5} onPress={onPressKhaiBaoThuongTru}>
         <Text style = {styles.textKhaiBaoThuongTru}>Khai Báo Tạm Trú</Text>
         </TouchableOpacity>
      </View>
      
      <View style = {styles.boxDangKyKhaiSinh}>
          <TouchableOpacity style={styles.button4} onPress={onPressDangKyKhaiSinh}>
         <Text style = {styles.textDangKyKhaiSinh}>Đăng Ký Khai Sinh</Text>
         </TouchableOpacity>
      </View>
      
     
      <View style = {styles.boxChinhSachHoTro}>
      <TouchableOpacity style={styles.button7} onPress={onPressChinhSachHoTro}>
         <Text style = {styles.textChinhSachHoTro}>Chính Sách Hỗ Trợ</Text>
         </TouchableOpacity>
      </View>
      <View style = {styles.boxCacDichVuKhac}>
      <TouchableOpacity style={styles.button8} onPress={onPressCacDichVuKhac}>
         <Text style = {styles.textCacDichVuKhac}>Thông tin nhân khẩu</Text>
         </TouchableOpacity>
      </View>
      
      <TouchableOpacity
            style={styles.BackLogin}
            onPress={onPressBackLogin} >                 
    
            <Text style={styles.textBackLogin}>Back</Text>
        
          </TouchableOpacity>
        
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

    textcauHoiThuongGap : {
      marginTop : 320,
      marginLeft : 15,
      fontWeight : 'bold',
    },
    textHotline : {
      marginTop : -20,
      marginLeft : 260,
   
      fontWeight : 'bold',
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
        borderRadius: 50, //
        
      },
      boxHotline : {
        width: 70,
        height: 70,
        borderRadius: 50, 
        backgroundColor: '#fdde2b', // Màu nền của hình tròn
        marginLeft : 270,
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
      textThongTin : {
        fontWeight : 'bold',
        marginTop : -158,
        marginLeft : 8,
        fontSize : 17,
      },
   
       /*textThongTinNhanKhau : {
        fontWeight : 'bold',
        marginTop : -10,
        marginLeft : 133,
        marginTop : -400,
        fontSize : 14,
        borderWidth : 1,
        borderRadius : 15,
        marginRight : 133,
        paddingHorizontal : 20,
        paddingVertical : 17,
        textAlign : 'center',
        backgroundColor : '#14b8a6',
      },*/
      boxKhaiBaoThuongTru : {
        fontWeight : 'bold',
     
        marginLeft : 205,
        marginTop : -400,
        fontSize : 14,
        borderWidth : 1,
        borderRadius : 15,
        marginRight : 5,
        paddingHorizontal : 20,
        paddingVertical : 17,
        textAlign : 'center',
        alignItems : 'center',
        backgroundColor : '#14b8a6',
      },
      boxDangKyKhaiSinh : {
        fontWeight : 'bold',
        marginTop : -10,
        marginLeft : 5,
        marginTop : -70,
        fontSize : 14,
        borderWidth : 1,
        borderRadius : 15,
        marginRight : 205,
        textAlign : 'center',
        paddingHorizontal : 20,
        paddingVertical : 17,
        backgroundColor : '#14b8a6',
        alignItems : 'center',
      },
     
      boxChinhSachHoTro: {
        fontWeight : 'bold',
     
        marginLeft : 255,
      
        fontSize : 14,
        borderWidth : 1,
        borderRadius : 15,
        marginRight : 5,
        paddingHorizontal : 20,
        paddingVertical : 17,
        textAlign : 'center',
        backgroundColor : '#14b8a6',
        alignItems : 'center',
      },
      boxCacDichVuKhac: {
        fontWeight : 'bold',
     
           marginLeft : 5,
           marginTop : -70,
           fontSize : 14,
           borderWidth : 1,
           borderRadius : 15,
           marginRight : 205,
           textAlign : 'center',
           paddingHorizontal : 20,
           paddingVertical : 17,
           backgroundColor : '#14b8a6',
           alignItems : 'center',
      },
      button4: {
        alignItems: 'center',
        backgroundColor: '#14b8a6',
        borderRadius: 20,
        width : '100%',
        fontWeight : 'bold',
        textAlign : 'center',
      },
      button5: {
        alignItems: 'center',
        backgroundColor: '#14b8a6',
        borderRadius: 20,
        width : '100%',
        fontWeight : 'bold',
        textAlign : 'center',
      },
});
