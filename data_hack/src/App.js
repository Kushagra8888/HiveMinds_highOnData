import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SocialActivityChart from './SocialActivityChart.js'
import TestChart from './testChart.js'
import removeStopWords from './stopWord.js';

class App extends Component {
  constructor(){
    super();
    this.prepareLikesData = (data) => {
      var maxLikes = Math.max(...data.map((x) => x.likes))
      return data.map(function(x) {return {x: x.date, y: x.likes / maxLikes}})
    }

    this.prepareCountData = (data) => {
      var maxCount = Math.max(...data.map((x) => x.status_count))
      return data.map(function(x) {return {x: x.date, y: x.status_count / maxCount}})
    }

    this.getFrequencyMap = (text) => {
      var words = text.replace(/[.]/g, '').split(/\s/);
      var freqMap = {};
      words.forEach(function(w) {
          if (!freqMap[w]) {
              freqMap[w] = 0;
          }
          freqMap[w] += 1;
      });

      return freqMap;
    }

    this.removeNumbers = (text) => {
      return text.replace(/[0-9]/g, '')
        .replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ")
         .replace(/^https\s$/g, " ");
    }

    this.prepareWordCloudData = (data) => {
      var tweets = data.map((x) => x.tweet_list)
        .reduce((list1, list2) => list1.concat(list2))
        .map((list_item) => list_item.tweet)
        .reduce((tweet_text1, tweet_text2) => tweet_text1 + " " + tweet_text2)
      var numbersReomved = this.removeNumbers(tweets.toLowerCase())
      return this.getFrequencyMap(removeStopWords(numbersReomved))
    }
  }

  render() {
    var chartData = this.props.data;
    var likesData = this.prepareLikesData(chartData);
    var countData = this.prepareCountData(chartData);
    var wordCloudData = this.prepareWordCloudData(chartData);
    return (
      <div className="App">
        <TestChart data={{likes: likesData, count: countData, wordCloud: wordCloudData}} />
      </div>
    );
  }
}

export default App;
