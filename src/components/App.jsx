import Feedback from "./Feedback/Feedback";
import Description from "./Descripnion/Description";
import { useEffect, useState } from "react";
import Options from "./Options/Options";
import Notification from "./Notification/Notification"
import './App.css'
const App = () => {
  
  const [vote, setVote] = useState(() => {
    const savedVotes = window.localStorage.getItem('saved-votes');
    return savedVotes ? JSON.parse(savedVotes) : { good: 0, neutral: 0, bad: 0 };
  });
  
  const updateFeedback = feedbackType => {
    setVote(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }))
    
  }
  const resetVote = () => {
    setVote({
      good: 0,
      neutral: 0,
      bad: 0
    });
    localStorage.removeItem("saved-votes");
  }
  const totalFeedback = vote.good + vote.neutral + vote.bad;
  const positiveFeedback = Math.round((vote.good / totalFeedback) * 100);

  useEffect(() => {
  window.localStorage.setItem("saved-votes", JSON.stringify(vote));
}, [vote]);
  return (
    <div>
      <Description>
       <p> Please leave your feedback about our service by selecting one of the options below.</p>
      </Description>
      <Options updateFeedback={updateFeedback} resetVote={resetVote} totalFeedback={totalFeedback}/>
      {totalFeedback > 0 ? (<Feedback good={vote.good} neutral={vote.neutral} bad={vote.bad} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />) : (<Notification />)}
           
  </div>
)
}

export default App;