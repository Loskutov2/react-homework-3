import { Component } from "react"
import { Greeting } from "./Greeting"
import { Message } from "./Message"
import { Button } from "./Button"
export class App extends Component{
  func(){
    console.log("Повідомлення")
  }
  render(){
    return(
      <>
        <Greeting name={'Asas'}/>
        <Message text={'Hello!'}/>
        <Button onClick={this.func}/>
      </>
    )
  }
};
