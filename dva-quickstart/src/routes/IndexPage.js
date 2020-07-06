import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
const arr = [1,2,3,4,5,6];

class IndexPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      yph:'yanpeihao'
    }
  }
  goTo(){
    console.log(this.state.yph);
    this.props.history.push('/Products');
  }
  renderArr(){
    arr.forEach((element,index) => {
      let a = index;
      console.log(a);
    });
  }
  componentDidMount(){
    this.renderArr()
  }
  render(){
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li onClick={this.goTo.bind(this)}>Getting Started</li>
          {/* <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li> */}
        </ul>
      </div>
    );
  }
}
export default connect()(IndexPage);
