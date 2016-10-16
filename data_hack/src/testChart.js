import '../node_modules/react-vis/main.css'
import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, 
    VerticalBarSeries, LineSeries, DiscreteColorLegend, 
    Crosshair, Hint} from 'react-vis';
import WordCloud from 'react-d3-cloud';


class TestChart extends Component {


  render() {
    const cloudData = {
        word1: 100,
        word2: 200,
    }
    console.log("Data: ", this.props.data);
    return (
        <div>
            <XYPlot
                xType='ordinal'
                margin={{bottom: 100}}
                width={1200}
                height={400}>
                <DiscreteColorLegend
                items={[
                    {title: 'likes', color: '#003366'},
                    {title: 'Tweet Count', color: 'orange'}
                ]} 
                />
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis 
                tickLabelAngle={90}
                tickPadding={60}
                />
                <VerticalBarSeries
                data={this.props.data.likes}
                color='#003366'
                />
                <LineSeries
                data={this.props.data.count}
                color='orange'
                />
            </XYPlot>
            <div className="wordcloud">
                <WordCloud data={this.props.data.wordCloud} />
            </div>
        </div>
      
    )
  }
}

export default TestChart; // Don’t forget to use export default!