import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Papa from 'papaparse'
import data from '../../../data/recommendations-michael.csv'

const Suggestions = () => {
  const [high, setHigh] = useState([])
  const [mid, setMid] = useState([])
  const [low, setLow] = useState([])

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Volume of outstanding',
    },
    subtitle: {
      text: 'suggestions by pirority',
    },
    xAxis: {
      categories: ['call', 'email', 'visit'],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} Revenue</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'high',
        data: high,
      },
      {
        name: 'mid',
        data: mid,
      },
      {
        name: 'low',
        data: low,
      },
    ],
  }

  const graphData = (priority, messaging, arry) =>
    arry
      .map((item) => {
        if (item.Priority === priority && item.Messaging === messaging)
          return parseInt(item['Potential revenue'])
      })
      .filter(Boolean)
      .reduce((a, b) => a + b, 0)

  useEffect(() => {
    async function fetchMyData() {
      const response = await fetch(data)
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value) // the csv text
      const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
      const option = results.data

      const high = [
        graphData('High', 'Call', option),
        graphData('High', 'Email', option),
        graphData('High', 'Meeting', option),
      ]
      const mid = [
        graphData('Mid', 'Call', option),
        graphData('Mid', 'Email', option),
        graphData('Mid', 'Meeting', option),
      ]
      const low = [
        graphData('Low', 'Call', option),
        graphData('Low', 'Email', option),
        graphData('Low', 'Meeting', option),
      ]

      setHigh(high)
      setMid(mid)
      setLow(low)
    }
    fetchMyData()
  }, [])

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Suggestions
