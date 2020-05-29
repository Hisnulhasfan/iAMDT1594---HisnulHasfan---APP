import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, TouchableOpacity, Button,TouchableHighlight,Alert,Div,Switch} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class App extends React.Component {
  state = {
    text:'',
    todo:[],
    isExpanded: false
};

  


  addToDo = () => {
    var newToDo = this.state.text;
    var arrayyy = this.state.todo;
    arrayyy.push(newToDo);
    this.setState({todo:arrayyy, text:""});
  }

  deleteToDo = (t) => {
    var arrayyy = this.state.todo;
    var pos = arrayyy.indexOf(t);
    arrayyy.splice(pos,1);
    this.setState({todo: arrayyy});
    
  }


  clearAll(){
    this.setState({
      todo: []
    })
  }





  renderToDo = () => {
    return this.state.todo.map(t=> {
      return (
        <View style={{flexDirection:'row', padding:5}}>
        <TouchableOpacity key={t} 
        onPress={() => {this.deleteToDo(t)}}
        style={{
         width:6,
        height:6,
        borderRadius:6, 
        borderWidth:6,
        borderColor:'#2C5364',
        margin: 4,
        marginTop:8,

          }}>
        </TouchableOpacity>
        <Text
        style={styles.todotext}
        onPress={() => {this.deleteToDo(t)}}
        > {t} </Text>
        </View>

      )
    })
  }

  render() {

    return ( 
        <LinearGradient colors={['#0F2027', '#203A43' , '#2C5364']} style={{flex:1}}>
        <StatusBar barStyle="light-content" />
        <View>
          <TextInput 
          style={styles.input}
          onSubmitEditing={this.addToDo}
          placeholder= "ADD TODO"
          onChangeText={(text)=> this.setState({text})}
          value={this.state.text}
          placeholderTextColor={'#ffffff'}
          multiline={true}
          autoCapitalize="sentences"
          underlineColorAndroid="transparent"
          spellCheck={true}
          selectionColor={"blue"}
          maxLength={70}
          returnKeyType="done"
          autoCorrect={true}
          blurOnSubmit={true}
        />
        </View>
        <View styles={styles.tasks}>
        {this.renderToDo()}
        </View>
        <View style={styles.button}>
        <Button 
          title= "Remove ToDos"
          color="#c31432"
          onPress={(e) => this.clearAll()}
          />
          </View>

        </LinearGradient>
    );
  }
}

const styles = {
  input:
  {
    marginTop:30,
    paddingTop:50,
    paddingRight:15,
    paddingLeft:110,
    fontSize:20,
    color:"#ffffff",
    fontWeight: '500',
    paddingBottom: 10,
   
  },
  button: {
    position:'absolute',
    bottom:32,
    right:25,
    justifyContent:'center',
    paddingRight:70,
  
  },

  todotext: {
    color:'#ffffff',
    alignItems: "center",
    fontSize:16,
    fontWeight:500
  }



}