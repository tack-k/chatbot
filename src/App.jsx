import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css'
import {AnswerList} from './components/index'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[currentId];
    const initAnswers = initDataset.answers;

    this.setState({
      answers: this.initAnswers
    })
  }

  componentDidMount() {
    this.initAnswers();
  }

render() {
  return (
    <section className="c-section">
      <div className="c-box">
        <AnswerList answers={this.state.answers}/>
      </div>
    </section>
  );
}

  
}
