import React, { useState, useEffect, useCallback } from 'react';
import './assets/styles/style.css'
import { AnswerList, Chats } from './components/index'
import FormDialog from './components/Forms/FormDialog';
import { db } from './firebase/index'

const App = () => {

  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState([]);
  const [open, setOpen] = useState(false);

  const displayNextQuestion = (nextQuestionId, nextDataset) => {

    addChats({
      text: nextDataset.question,
      type: 'question'
    })


    setAnswers(nextDataset.answers)
    setCurrentId(nextQuestionId)

  }

  const selectedAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case (/^https*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank'
        a.click();
        break;

      case (nextQuestionId === 'contact'):
        handleClickOpen();
        break;

      default:
        addChats({
          text: selectedAnswer,
          type: 'answer'
        })

        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 500);


        break;
    }
  }

  const addChats = (chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
      //前回のchatsに今回のchatsを追加するという意味
    })
  }

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])



  useEffect(() => {
    (async () => {
      const initDataset = {};
      await db.collection('questions').get().then(snapshots => {
        snapshots.forEach(doc => {
          const id = doc.id
          const data = doc.data()
          initDataset[id] = data
        })
      })
      
      
      setDataset(initDataset)
      displayNextQuestion(currentId, initDataset[currentId])
      //currentIdがinitのとき
    })()

  }, [])

  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  })

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats} />
        <AnswerList answers={answers} select={selectedAnswer} />
        <FormDialog open={open} handleClose={handleClose} />
      </div>
    </section>
  );
}


export default App
