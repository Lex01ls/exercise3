import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity,ImageBackground } from 'react-native';
import { AntDesign,Ionicons,Foundation, SimpleLineIcons,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
//import { ImageBackground } from 'react-native-web';

export default function App() {
  return (
  <>
  <StatusBar/>
    <View style={styles.container}>

      <View style={styles.topBarContainer}>
        
          <TouchableOpacity>
           <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.fontStyling1}>Home</Text>
          <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="white" />
          </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator ={false}>
        <View style={styles.App_logo}>
        <ImageBackground source={require('./assets/Schoolbackground.jpg')} resizeMode="cover"  style={styles.imageStyle }>

            <View style={styles.headerView}>
                <Text style={styles.fontStyle1}>Welcome to Lakes Online Class Environment</Text>
            </View>

        </ImageBackground>
        </View>

        <View style={styles.Courses}>
            <Text style={styles.fontStyling1}>Courses</Text>
        </View>

          <View style={styles.software}>

            <ImageBackground source={require('./assets/The-World-Needs-More-Software-Developers1.jpg')} style={styles.imageStyle} resizeMode="cover">
                <Text style={styles.fontStyle}>BSc in Software Engineering with multimedia
                 </Text>

                 <Text style={styles.fontStyling}>Careers:{"\n"}
                      Application developer{"\n"}
                      Cyber Security Analyst{"\n"}
                      Game Developer{"\n"}
                      Information Technology Consultant{"\n"}
                      Multimedia Programmer{"\n"}
                      Web Developer{"\n"}
                      Web Designer{"\n"}
                      Software Engineer
                  </Text>
            </ImageBackground>

            
          </View>

          <View style={styles.civil}>
            <ImageBackground source={require('./assets/civil-engineering-company.jpg')} style={styles.imageStyle} resizeMode="cover"> 
            <Text style={styles.fontStyle1}>BSc in Civil Engineering </Text>

            <Text style={styles.fontStyling2}>
                Careers:{"\n"}
                Building Control surveyor{"\n"}
                CAD technician{"\n"}
                Consulting Civil Engineer{"\n"}
                Contracting Civil Engineer{"\n"}
                Design Engineer{"\n"}
                Estimator{"\n"}
                Nuclear Engineer{"\n"}
                Site Engineer{"\n"}
                Structural Engineer{"\n"}
                Water Engineer
            </Text>

            </ImageBackground>
            
          </View>

          <View style={styles.business}>
            <ImageBackground source={require('./assets/ManagementLeadership.jpg')} style={styles.imageStyle} resizeMode="cover" >
            <Text style={styles.fontStyle2}>BSc in Business Management</Text>

              <Text style={styles.fontStyling}>Careers:{"\n"}
                  Marketing manager{"\n"}
                  Sales manager{"\n"}
                  Business analyst{"\n"}
                  Financial analyst{"\n"}
                  Account manager
              </Text>

            </ImageBackground>
          </View>
          
        <View style={styles.TodaysLecture}>
          <Text style={styles.fontStyling1}>Today's Lectures</Text>
        </View>

          
        <ScrollView horizontal>
          <View style={styles.Cpp}>
          
          <ImageBackground source={require('./assets/84-841480_software-developer-wallpaper-data-src-developer-wallpaper-background.jpg')} style={styles.imageStyle2} resizeMode="cover">
          
              <View style={styles.onGoingLecturesHeader}>
                  <TouchableOpacity>
                  <MaterialIcons name="online-prediction" size={24} color="red" />
                  <Text style={styles.textStyle2}>Live</Text>
                  </TouchableOpacity> 
                    <Text style={styles.textStyle2}>C++ Programming II</Text>
                  <TouchableOpacity>
                  <MaterialCommunityIcons name="dots-vertical" size={24} color="red" />
                  </TouchableOpacity>    
              </View>
             
          </ImageBackground>

            <View>
                  <Text style={styles.textStyle2}>Remaining time: 45 min</Text>
            </View>

          </View>

          <View style={styles.Mobile}>
          
              <ImageBackground source={require('./assets/mobile.png')} style={styles.imageStyle2}>
                <View style={styles.onGoingLecturesHeader}>
                    <TouchableOpacity>
                    <MaterialIcons name="online-prediction" size={24} color="white" />
                    <Text style={styles.textStyle2}>Live</Text>
                    </TouchableOpacity> 
                        <Text style={styles.textStyle2}>Mobile Device Programming</Text>
                    <TouchableOpacity>
                     <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
                    </TouchableOpacity>    
                </View>
              
              </ImageBackground>

              <View>
                  <Text style={styles.textStyle2}>Remaining time: 2 hours</Text>
              </View>
          </View>

          <View style={styles.Statistics}>

              <ImageBackground source={require('./assets/probability.png')} style={styles.imageStyle2}>

               <View style={styles.onGoingLecturesHeader}>
                  <TouchableOpacity>
                  <MaterialIcons name="online-prediction" size={24} color="black" />
                  <Text style={styles.textStyle1}>Live</Text> 
                  </TouchableOpacity> 
                      <Text style={styles.textStyle1}>Probability and Statistics</Text>
                  <TouchableOpacity>
                  <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
                  </TouchableOpacity>    
              </View>
              
              </ImageBackground>

              <View>
                  <Text style={styles.textStyle1}>Remaining time: 2 hours</Text>
              </View>
          </View>

          </ScrollView>
        </ScrollView>

        <View style={styles.navigationContainer}>
             <TouchableOpacity style={styles.navigationSelect}>
             <AntDesign name="home" size={24} color="black" />
             </TouchableOpacity>
             <TouchableOpacity>
             <AntDesign name="calendar" size={24} color="black" />
             </TouchableOpacity>
             <TouchableOpacity>
             <SimpleLineIcons name="notebook" size={24} color="black" />
             </TouchableOpacity>
             <TouchableOpacity>
             <Ionicons name="school" size={24} color="black" />
             </TouchableOpacity>
             <TouchableOpacity>
             <Foundation name="play-video" size={24} color="black" />
             </TouchableOpacity>

        </View>
      </View> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100c08',
  },

  topBarContainer:{
    backgroundColor: '#8c92ac',
    justifyContent:"space-between",
    flexDirection:"row",
    borderRadius:10,
    margin:5,
    padding:5
  },

  headerView:{
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderRadius:5,
    justifyContent: 'space-between',
    margin: 5,
    padding: 5,
  },

  Courses:{
  justifyContent: 'center',
  margin:5,
  alignItems: 'center',
  },

  App_logo:{
    height: 'auto',
    width: 'auto',
    opacity: 5,
    margin: 5,
  },
 
  imageStyle: {
    overflow: "hidden",
    backgroundColor: 'transparent',
    margin:5,
    borderRadius:5,
    flex:1,
    opacity: 5
  },

  imageStyle2:{
    flex: 1,
    margin:5,
    borderRadius:5,
    height:300,
    width: 250
  },

  fontStyling:{
    color: 'white',
    fontSize: 16,
    margin:10,
    textShadowColor: 'black',
    textShadowOffset:{width: -1, height:0},
    textShadowRadius: 2
  },

  fontStyling1:{
    alignItems: 'center',
    fontSize:24,
    justifyContent:"center",
    color: 'white',
    margin: 5,
  },

  fontStyling2:{
   color: 'black',
    fontSize: 16,
    margin:10,
    textShadowColor: 'black',
    textShadowOffset:{width: -1, height:0},
    textShadowRadius: 1.5
  },

  fontStyle:{
  fontSize:24,
  color: 'white',
  textShadowColor: 'black',
  textShadowOffset:{width: -1, height:0},
  textShadowRadius: 1
  },

  fontStyle1:{
  fontSize:24,
  textShadowColor: 'black',
  textShadowOffset:{width: -1, height:0},
  textShadowRadius: 1
  },

  fontStyle2:{
    fontSize:24,
    color:'white',
    textShadowColor: 'black',
    textShadowOffset:{width: -1, height:0},
    textShadowRadius: 1
  },

  textStyle:{
  fontSize:30
  },

  textStyle1:{
  color:'black',
  },

  textStyle2:{
  color: 'white',
  },
  
  software:{
    backgroundColor: '#0f0f0f',
    borderRadius:10,
    justifyContent: "flex-start",
    padding:5,
    margin:5,
    
  },

  civil:{
    backgroundColor: '#fffafa',
    borderRadius:10,
    justifyContent: "flex-start",
    padding:5,
    margin:5,
    
  },

  business:{
    backgroundColor: '#367588',
    borderRadius:10,
    justifyContent: "flex-start",
    padding:5,
    margin:5,
  },

  TodaysLecture:{
    justifyContent: 'center',
    margin:5,
    alignItems: 'center',
  },

  Cpp:{
    backgroundColor: '#5d8aa8',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: "space-evenly",
    padding:15,
    margin:5,
  //  height:'auto',
  //  width:'auto',
  },

  Mobile:{
    backgroundColor: '#0077b3',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: "space-evenly",
    padding:15,
    margin:5,
  },
  Statistics:{
    backgroundColor: 'white',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: "space-evenly",
    padding:15,
    margin:5,
  },

  onGoingLecturesHeader:{
    flexDirection: 'row',
    justifyContent: "space-between",
    margin:5,
  },

  navigationContainer: {
    margin:10,
    backgroundColor: '#f5f5f5',
    borderRadius:10,
    justifyContent: "space-between",
    padding:10,
    flexDirection:"row"
  },
  navigationSelect:{
    backgroundColor: '#ccccff',
    borderRadius:1
  },
  
});
