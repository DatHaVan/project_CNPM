import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Modal,TextInput, Text,Image, View ,ScrollView,TouchableOpacity, ImageBackground} from 'react-native';
import React, {useState, useRef} from 'react';

export default function Khaibao ({navigation})  {

  const [MaKhuVucValue, setMaKhuVucValue] = useState('');
  const MaKhuVucInputRef = useRef(null);
// tennguoikhaibao = tennguoidangky 
  const handleMaKhuVucInputChange = (text) => {
    setMaKhuVucValue(text);
  };
  const onPressDienMaKhuVuc = () => {
    
      if (MaKhuVucInputRef.current) {
        MaKhuVucInputRef.current.focus();
      }
  };
  const [noicutrunguoiyeucauValue, setnoicutrunguoiyeucauValue] = useState('');
  const noicutrunguoiyeucauInputRef = useRef(null);

  const handlenoicutrunguoiyeucauValueInputChange = (text) => {
    setnoicutrunguoiyeucauValue(text);
  };
  const onPressDiennoicutruNguoiYeuCau = () => {
    
      if (noicutrunguoiyeucauInputRef.current) {
        noicutrunguoiyeucauInputRef.current.focus();
      }
  };

  const [giaytotuythannguoiyeucauValue, setgiaytotuythannguoiyeucauValue] = useState('');
  const giaytotuythannguoiyeucauInputRef = useRef(null);

  const handlegiaytotuythannguoiyeucauValueInputChange = (text) => {
    setgiaytotuythannguoiyeucauValue(text);
  };
  const onPressDiengiaytotuythanNguoiYeuCau = () => {
    
      if (giaytotuythannguoiyeucauInputRef.current) {
        giaytotuythannguoiyeucauInputRef.current.focus();
      }
  };
  const [quanhenguoiyeucauValue, setquanhenguoiyeucauValue] = useState('');
  const quanhenguoiyeucauInputRef = useRef(null);

  const handlequanhenguoiyeucauValueInputChange = (text) => {
    setquanhenguoiyeucauValue(text);
  };
  const onPressDienquanheNguoiYeuCau = () => {
    
      if (giaytotuythannguoiyeucauInputRef.current) {
        giaytotuythannguoiyeucauInputRef.current.focus();
      }
  };

  const [hotenDangKyValue, sethotenDangKyValue] = useState('');
  const hotenDangKyInputRef = useRef(null);

  const handlehotenDangKyInputChange = (text) => {
    sethotenDangKyValue(text);
  };
  const onPressDienhotenDangKy = () => {
    
      if (hotenDangKyInputRef.current) {
        hotenDangKyInputRef.current.focus();
      }
  };


  const [ngaysinhValue, setngaysinhValue] = useState('');
  const ngaysinhInputRef = useRef(null);

  const handlengaysinhValueInputChange = (text) => {
    setngaysinhValue(text);
  };
  const onPressDienngaysinh = () => {
    
      if (ngaysinhInputRef.current) {
        ngaysinhInputRef.current.focus();
      }
  };

  const [gioitinhValue, setgioitinhValue] = useState('');
  const gioitinhInputRef = useRef(null);

  const handlegioitinhValueInputChange = (text) => {
    setngaysinhValue(text);
  };
  const onPressDiengioitinh = () => {
    
      if (gioitinhInputRef.current) {
        gioitinhInputRef.current.focus();
      }
  };

const [quoctichValue, setquoctichValue] = useState('');
  const quoctichInputRef = useRef(null);

  const handlequoctichValueInputChange = (text) => {
    setquoctichValue(text);
  };
  const onPressDienquoctich = () => {
    
      if (quoctichInputRef.current) {
        quoctichInputRef.current.focus();
      }
  };

  const [noisinhbabyValue, setnoisinhbabyValue] = useState('');
  const noisinhbabyInputRef = useRef(null);

  const handlenoisinhbabyValueInputChange = (text) => {
    setnoisinhbabyValue(text);
  };
  const onPressDiennoisinhbaby = () => {
    
      if (noisinhbabyInputRef.current) {
        noisinhbabyInputRef.current.focus();
      }
  };

  const [quequanbabyValue, setquequanbabyValue] = useState('');
  const quequanbabyInputRef = useRef(null);

  const handlequequanbabyValueInputChange = (text) => {
    setquequanbabyValue(text);
  };
  const onPressDienquequanbaby = () => {
    
      if (quequanbabyInputRef.current) {
        quequanbabyInputRef.current.focus();
      }
  };


  const [tenMeValue, settenMeValue] = useState('');
  const tenMeInputRef = useRef(null);

  const handletenMeValueInputChange = (text) => {
    settenMeValue(text);
  };
  const onPressDientenMe = () => {
    
      if (tenMeInputRef.current) {
        tenMeInputRef.current.focus();
      }
  };

  const [namsinhMeValue, setnamsinhMeValue] = useState('');
  const namsinhMeInputRef = useRef(null);

  const handlenamsinhMeValueInputChange = (text) => {
    settenMeValue(text);
  };
  const onPressDiennamsinhMe = () => {
    
      if (namsinhMeInputRef.current) {
        namsinhMeInputRef.current.focus();
      }
  };

  const [quoctichMeValue, setquoctichMeValue] = useState('');
  const quoctichMeInputRef = useRef(null);

  const handlequoctichMeValueInputChange = (text) => {
    setquoctichMeValue(text);
  };
  const onPressDienquoctichMe = () => {
    
      if (quoctichMeInputRef.current) {
        quoctichMeInputRef.current.focus();
      }
  };

  const [noicutruMeValue, setnoicutruMeValue] = useState('');
  const noicutruMeInputRef = useRef(null);

  const handlenoicutruMeValueInputChange = (text) => {
    setnoicutruMeValue(text);
  };
  const onPressDiennoicutruMe = () => {
    
      if (noicutruMeInputRef.current) {
        noicutruMeInputRef.current.focus();
      }
  };


  const [tenChaValue, settenChaValue] = useState('');
  const tenChaInputRef = useRef(null);

  const handletenChaValueInputChange = (text) => {
    settenChaValue(text);
  };
  const onPressDientenCha = () => {
    
      if (tenChaInputRef.current) {
        tenChaInputRef.current.focus();
      }
  };

  const [namsinhChaValue, setnamsinhChaValue] = useState('');
  const namsinhChaInputRef = useRef(null);

  const handlenamsinhChaValueInputChange = (text) => {
    setnamsinhChaValue(text);
  };
  const onPressDiennamsinhCha = () => {
    
      if (namsinhChaInputRef.current) {
        namsinhChaInputRef.current.focus();
      }
  };


  const [quoctichChaValue, setquoctichChaValue] = useState('');
  const quoctichChaInputRef = useRef(null);

  const handlequoctichChaValueInputChange = (text) => {
    setquoctichhaValue(text);
  };
  const onPressDienquoctichCha = () => {
    
      if (quoctichChaInputRef.current) {
        quoctichChaInputRef.current.focus();
      }
  };



  const [noicutruChaValue, setnoicutruChaValue] = useState('');
  const noicutruChaInputRef = useRef(null);

  const handlenoicutruChaValueInputChange = (text) => {
    setnoicutruChaValue(text);
  };
  const onPressDiennoicutruCha = () => {
    
      if (noicutruChaInputRef.current) {
        noicutruChaInputRef.current.focus();
      }
  };



  const onPressGuiDon = () => {
    
   
    console.log('Hoàn Thành!');
    navigation.goBack(); // Đóng modal sau khi lưu dữ liệu thành công
  
  
};







  const onPressBackHome = () => {
    navigation.goBack();
  };
  return (
    
    <View style={styles.container}>
      <View style = {styles.ThongTinTop1}>
         <Text style = {styles.textTieuNgu1}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM </Text>
      </View>
   
      <View style = {styles.ThongTinTop2}>
         <Text style = {styles.textTieuNgu2}>ĐỘC LẬP-TỰ DO-HẠNH PHÚC </Text>
      </View>

      <View style = {styles.ThongTinTop3}>
         <Text style = {styles.textGiayKhaiSinh}>Đăng Ký Tạm Trú</Text>
      </View>


      <View>
      <Text style={styles.modalText1}>Mã Khu Vực:  </Text>
      </View>

      <View style={styles.TextDienMaKhuVuc}>
               <TouchableOpacity style={styles.boxDienMaKhuVuc} onPress={onPressDienMaKhuVuc}>
                  <Text style = {styles.TextDienMaKhuVuc}></Text>
                  <TextInput
                           ref={MaKhuVucInputRef}
                           style={styles.TextMaKhuVuc}
                           onChangeText={handleMaKhuVucInputChange}
                           value={MaKhuVucValue}
                           placeholder="Điền Mã Khu Vực"
                          />
// ma khu vuc la tennguoiyeucaudangky
               </TouchableOpacity>  
            </View>
         
     

      
          
      <View>
      <Text style={styles.modalText3}>Họ,chữ đệm,tên: </Text>
      </View>
          
      
      

      <View style={styles.textDienbabyYeuCauKhaiSinh}>
               <TouchableOpacity style={styles.boxDienhotenDangKy} onPress={onPressDienhotenDangKy}>
                  <Text style = {styles.TextDienhotenDangKy}></Text>
                  <TextInput
                           ref={hotenDangKyInputRef}
                           style={styles.hotenDangKy}
                           onChangeText={handlehotenDangKyInputChange}
                                         
                           value={hotenDangKyValue}
                           placeholder="Điền Họ và Tên"
                          />

               </TouchableOpacity>  
            </View>

            <View style={styles.textDienngaysinhbaby}>
               <TouchableOpacity style={styles.boxDienngaysinh} onPress={onPressDienngaysinh}>
                  <Text style = {styles.TextDienngaysinh}></Text>
                  <TextInput
                           ref={ngaysinhInputRef}
                           style={styles.Textngaysinh}
                           onChangeText={handlengaysinhValueInputChange}
                                         
                           value={ngaysinhValue}
                           placeholder="Ngày , tháng , năm sinh"
                          />
// ngaysinhbay = ngaysinhnguowikhainao
               </TouchableOpacity>  
            </View>


  
            <View style={styles.textDiengioitinhbaby}>
               <TouchableOpacity style={styles.boxDiengioitinhbaby} onPress={onPressDiengioitinh}>
                  <Text style = {styles.TextDiengioitinh}></Text>
                  <TextInput
                           ref={gioitinhInputRef}
                           style={styles.Textgioitinh}
                           onChangeText={handlegioitinhValueInputChange}
                                         
                           value={gioitinhValue}
                           placeholder="Giới tính: "
                          />

               </TouchableOpacity>  
            </View>


            <View style={styles.textDienquoctichbaby}>
               <TouchableOpacity style={styles.boxDienquoctich} onPress={onPressDienquoctich}>
                  <Text style = {styles.TextDienquoctich}></Text>
                  <TextInput
                           ref={quoctichInputRef}
                           style={styles.Textquoctich}
                           onChangeText={handlequoctichValueInputChange}
                                         
                           value={quoctichValue}
                           placeholder="Quốc tịch: "
                          />

               </TouchableOpacity>  
            </View>



            <View style={styles.textDiennoisinhbaby}>
               <TouchableOpacity style={styles.boxDiennoisinhbaby} onPress={onPressDiennoisinhbaby}>
                  <Text style = {styles.TextDiennoisinhbaby}></Text>
                  <TextInput
                           ref={noisinhbabyInputRef}
                           style={styles.Textnoisinhbaby}
                           onChangeText={handlenoisinhbabyValueInputChange}
                                         
                           value={noisinhbabyValue}
                           placeholder="Nơi sinh: "
                          />

               </TouchableOpacity>  
            </View>

       
            <View style={styles.textDienquequanbaby}>
               <TouchableOpacity style={styles.boxDienquequanbaby} onPress={onPressDienquequanbaby}>
                  <Text style = {styles.TextDienquequanbaby}></Text>
                  <TextInput
                           ref={quequanbabyInputRef}
                           style={styles.Textquequanbaby}
                           onChangeText={handlequequanbabyValueInputChange}
                                         
                           value={quequanbabyValue}
                           placeholder="Quê quán: "
                          />

               </TouchableOpacity>  
            </View>

     
           

            <View style={styles.textDiennamsinhMe}>
               <TouchableOpacity style={styles.boxDiennamsinhMe} onPress={onPressDiennamsinhMe}>
                  <Text style = {styles.TextDiennamsinhMe}></Text>
                  <TextInput
                           ref={namsinhMeInputRef}
                           style={styles.TextnamsinhMe}
                           onChangeText={handlenamsinhMeValueInputChange}
                                         
                           value={namsinhMeValue}
                           placeholder="Ngày đăng ký: "
                          />

               </TouchableOpacity>  
            </View>

           
            <View style={styles.textDiennamsinhM}>
               <TouchableOpacity style={styles.boxDiennamsinhMe} onPress={onPressDiennamsinhMe}>
                  <Text style = {styles.TextDiennamsinhM}></Text>
                  <TextInput
                           ref={namsinhMeInputRef}
                           style={styles.TextnamsinhMe}
                           onChangeText={handlenamsinhMeValueInputChange}
                                         
                           value={namsinhMeValue}
                           placeholder="Lý Do: "
                          />

               </TouchableOpacity>  
            </View>


            
            

         

            


          

      
      <TouchableOpacity
            style={styles.BackHome}
            onPress={onPressBackHome} >                 
          <Text style={styles.textBackLogin}>Back</Text>
     </TouchableOpacity>
    <View>

    <TouchableOpacity
            style={styles.buttonGuiDon}
            onPress={onPressGuiDon} >                 
           
            <Text style={styles.textStyleDangNhap}>Gửi</Text>
        
          </TouchableOpacity>
    </View>
     
        
  


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
    BackHome: {
      marginTop : -1305,
      marginLeft : -59,
      marginRight : 255
    },
    textBackHome :{
       fontSize : 15,
       color : 'black',
       textAlign : 'center',
       fontWeight : 'bold'
    },
      textTieuNgu1 : {
        fontWeight : 'bold',
        marginTop : -680,
        marginLeft : 8,
        fontSize : 17,
        textAlign : 'center',
      },
      textTieuNgu2 : {
        fontWeight : 'bold',
        marginTop : -655,
        marginLeft : 8,
        fontSize : 17,
        textAlign : 'center',
      },
      textGiayKhaiSinh : {
        fontWeight : 'bold',
        marginTop : -609,
        marginLeft : 8,
        fontSize : 17,
        textAlign : 'center',
        color : 'red',
      },
      modalText1 : {
        fontWeight : 'bold',
        marginTop : -578,
        marginLeft : -165,
      },
      textDienTenYeuCauKhaiSinh :{
        backgroundColor : '#f0f2f5',
        top  : -555, 
        width : '100%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
       }, 
       TextDienTenYeuCauKhaiSinh: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
       alignItems : 'center',
       
       },
       textDiennoicutrunguoiYeuCauKhaiSinh :{
        backgroundColor : '#f0f2f5',
        top  : -555, 
        width : '100%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
       }, 
       TextDiennoicutrunguoiYeuCauKhaiSinh: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
       alignItems : 'center',
       
       },
       textDiengiaytotuythannguoiYeuCauKhaiSinh :{
        backgroundColor : '#f0f2f5',
        top  : -555, 
        width : '100%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
       }, 
       TextDiengiaytotuythannguoiYeuCauKhaiSinh: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
       alignItems : 'center',
       
       },
       textDienquanhenguoiYeuCauKhaiSinh :{
        backgroundColor : '#f0f2f5',
        top  : -555, 
        width : '100%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
       }, 
       TextDienquanhenguoiYeuCauKhaiSinh: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
       alignItems : 'center',
       
       },
      modalText2 : {
        fontWeight : 'bold',
        marginTop : -555,
        marginLeft : -180,
      },
      modalText3 : {
        fontWeight : 'bold',
        marginTop : -530,
        marginLeft : -185,
      },
         
      textDienbabyYeuCauKhaiSinh :{
        backgroundColor : '#f0f2f5',
        top  : -536, 
        width : '100%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        marginLeft : 240,
       }, 
       TextDienbabyYeuCauKhaiSinh: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
      // alignItems : 'center',
       marginLeft : 225,
       },
       textDienngaysinhbaby :{
        backgroundColor : '#f0f2f5',
        top  : -533, 
        width : '100%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
       }, 
       TextDienngaysinhbaby: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
       alignItems : 'center',
       
       },

       textDiengioitinhbaby :{
        backgroundColor : '#f0f2f5',
        top  : -529, 
        width : '80%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
        marginRight : 300,
       }, 
       TextDiengioitinhbaby: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
     
       },
    
       textDienquoctichbaby :{
        backgroundColor : '#f0f2f5',
        top  : -563, 
        width : '80%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
        marginLeft : 300,
       }, 
       TextDienquoctichbaby: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
      // alignItems : 'center',
       marginLeft : 260,
       },

       textDiennoisinhbaby :{
        backgroundColor : '#f0f2f5',
        top  : -555, 
        width : '100%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
        //marginRight : 300,
       }, 
       TextDiennoisinhbaby: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
       marginLeft: 368,
       },
       textDienquequanbaby :{
        backgroundColor : '#f0f2f5',
        top  : -550, 
        width : '100%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
        //marginRight : 300,
       }, 
       TextDienquequanbaby: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
       marginLeft: 368,
       },


       modalText4 : {
        fontWeight : 'bold',
        marginTop : -335,
        marginLeft : -185,
      },

      textDientenMe :{
        backgroundColor : '#f0f2f5',
        top  : -545, 
        width : '68%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        marginLeft : 240,
       }, 
       TextDientenMe: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
       marginLeft : 225,
       },
       

       textDiennamsinhMe :{
        backgroundColor : '#f0f2f5',
        top  : -541,
        width : '100%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
       
       }, 
       TextDiennamsinhMe: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
       marginLeft: 368,
       },
       textDienquoctichMe :{
        backgroundColor : '#f0f2f5',
        top  : -575, 
        width : '80%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
        marginLeft : 300,
       }, 
       TextDienquoctichMe: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
      
       marginLeft : 260,
       },

      
       textDiennoicutruMe :{
        backgroundColor : '#f0f2f5',
        top  : -570,
        width : '100%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
       // marginRight : 300,
       }, 
       TextDiennoicutruMe: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
       marginRight : 365,
       },
   
       modalText5 : {
        fontWeight : 'bold',
        marginTop : -224,
        marginLeft : -185,
      },

      textDientenCha :{
        backgroundColor : '#f0f2f5',
        top  : -565, 
        width : '68%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        marginLeft : 240,
       }, 
       TextDientenCha: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
       marginLeft : 225,
       },

       textDiennamsinhCha :{
        backgroundColor : '#f0f2f5',
        top  : -561,
        width : '80%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
        marginRight : 300,
       }, 
       TextDiennamsinhCha: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
     
       },
     
       textDienquoctichCha :{
        backgroundColor : '#f0f2f5',
        top  : -595, 
        width : '80%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
        alignItems : 'center',
        
        marginLeft : 300,
       }, 
       TextDienquoctichCha: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -17,
      // alignItems : 'center',
       marginLeft : 260,
       },
       textDiennoicutruCha:{
        backgroundColor : '#f0f2f5',
        top  : -588,
        width : '100%',
        height : '4%',
        padding : 10,
        textAlign : 'center',
   
        alignItems : 'center',
        
       // marginRight : 300,
       }, 
       TextDiennoicutruCha: {
       textAlign : 'center',
       opacity: 0.2,
       marginTop : -30,
       marginRight : 165,
       },
       buttonGuiDon: {
        height : '10%', 
        width : '40%',
        borderRadius: 20,
       
        fontSize : 14,
        backgroundColor : 'red',
        top  : 828,
        marginLeft : 170,
        padding: 20,
        borderRadius: 10,
        },
        textStyleDangNhap : {
       
        marginTop : -20,
          fontWeight: 'bold',
         
          //alignItems : 'center',
          color: 'white',
    fontSize: 20,
        },

        textDiennamsinhM :{
          backgroundColor : '#f0f2f5',
          top  : -531,
          width : '100%',
          height : '4%',
          padding : 10,
          textAlign : 'center',
          alignItems : 'center',
         
         }, 
         TextDiennamsinhM: {
         textAlign : 'center',
         opacity: 0.2,
         marginTop : -17,
         marginLeft: 368,
         },


});

