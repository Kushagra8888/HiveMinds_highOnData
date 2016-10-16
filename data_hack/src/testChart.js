import '../node_modules/react-vis/main.css'
import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, 
    VerticalBarSeries, LineSeries, DiscreteColorLegend, 
    Crosshair, Hint} from 'react-vis';
import WordCloud from 'react-d3-cloud';
import moment from 'moment';


class TestChart extends Component {


  render() {
    const cloudData = {
        word1: 100,
        word2: 200,
    }
    var formatTimeMoment = (date) => {
        return moment(date).format('MMM YY')
    }
    console.log("Data: ", this.props.data);
    return (
        <div>
            <XYPlot
                margin={{bottom: 100}}
                width={1200}
                height={400}>
                <DiscreteColorLegend
                items={[
                    {title: 'likes', color: '#003366'},
                    {title: 'Tweet Count', color: 'orange'},
                    {title: 'Retweet Count', color: 'green'}
                ]} 
                />
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis 
                tickLabelAngle={90}
                tickPadding={60}
                tickFormat={formatTimeMoment}
                />
                <LineSeries
                xType='time'
                data={this.props.data.likes}
                color='#003366'
                />
                <LineSeries
                xType='time'
                data={this.props.data.count}
                color='orange'
                />
                <LineSeries
                xType='time'
                data={this.props.data.retweetCount}
                color='green'
                />
            </XYPlot>
        </div>
      
    )
  }
}

export default TestChart; // Don’t forget to use export default!