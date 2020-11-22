import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css'
import {AnswerList, Chats} from './components/index'

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
    this.selectAnswer = this.selectedAnswer.bind(this)
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  selectedAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId);
        break;
      default:
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        })

        this.setState({
          chats: chats
        })

        this.displayNextQuestion(nextQuestionId);

        break;
    }
  }


  componentDidMount() {
    const initAnswer = "";
    this.selectedAnswer(initAnswer, this.state.currentId);
  }

  componentDidUpdate() {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }

render() {
  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={this.state.chats} />
        <AnswerList answers={this.state.answers} select={this.selectAnswer} />
      </div>
    </section>
  );
}

  
}
