
import React from 'react';
import { Link } from 'react-router-dom'
class Menu extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      activeClass: ''
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleMouseEnterSecond =this.handleMouseEnterSecond.bind(this)
    this.handleMouseEnterSecond =this.handleMouseEnterSecond.bind(this)
    
  }
  handleMouseEnter(e){
    this.setState({
      activeClass:'active'
    })
  }
  handleMouseLeave(e){
    this.setState({
      activeClass:''
    })
  }
  handleMouseLeaveSecond(e){
    console.log(11111111)
    console.log(e)
  }
  handleMouseEnterSecond(e){
    console.log(e)
  }
  render() {
    let menu='';
    if(this.props.secondMenu){
      menu=
      <ul className={'first-menu'}>
        <li className={'icon '+this.props.menuCalss +' '+this.state.activeClass } onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <span>{this.props.firstMenu}</span>
          <ul className="second-menu">
            {
              this.props.secondMenu.map(item=>{
                return<li key={item}> <Link to={this.props.path}  >{item}</Link></li>
                // return <li onMouseEnter={this.handleMouseEnterSecond} onMouseLeave={this.handleMouseLeaveSecond} key={item}>{item}</li>
              })
            }
          </ul>  
        </li>
      </ul>;
    }else{
      menu=
      <ul className={'first-menu'}>
        <li className={'icon '+this.props.menuCalss +' '+this.state.activeClass } onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <span>{this.props.firstMenu}</span>
        </li>
      </ul>;
    }
    return (menu)
   
  }
}
export default Menu