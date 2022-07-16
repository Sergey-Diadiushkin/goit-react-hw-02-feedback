import React, {Component} from 'react'
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component{

state = {
  good:0,
  neutral:0,
  bad: 0,
  }
  
  countTotalFeedback = () => {
  const totalFeedback = Object.values(this.state).reduce((acc, number) => acc + number, 0);
        return totalFeedback
    };
    countPositiveFeedbackPercentage = () => {
      const persent = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100);
        return persent;
  };
  
 incrementFeedback = number => {
    this.setState(prevState => {
      return {
        [number]: prevState[number] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Section>

        {this.countTotalFeedback() > 0 ?
        <Section>
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()} 
          positivePercentage={this.countPositiveFeedbackPercentage()} />
          </Section>
              :<Section title="Statistics">
            <Notification message="There is no feedback" />
          </Section> }
        
         
        
       
        
      </> 
    )
  }
}





