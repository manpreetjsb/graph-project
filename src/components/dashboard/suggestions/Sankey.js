import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Papa from 'papaparse'
import data from '../../../data/outstanding-suggestions-michael.csv'
import HighchartsSankey from 'highcharts/modules/sankey'

HighchartsSankey(Highcharts)

const Sankey = () => {
  const [suggestions, setSuggestions] = useState([])

  const options = {
    title: {
      text: 'Sankey',
    },
    accessibility: {
      point: {
        valueDescriptionFormat:
          '{index}. {point.from} to {point.to}, {point.weight}.',
      },
    },
    series: [
      {
        keys: ['from', 'to', 'weight'],
        data: suggestions,
        type: 'sankey',
        name: 'Sankey demo series',
      },
    ],
  }

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(data)
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value) // the csv text
      const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
      const option = results.data
      const highComplete = option.map((item) => [
        'high',
        'complete',
        parseInt(item['Complete high priority suggestions']),
      ])
      const highInComplete = option.map((item) => [
        'high',
        'Incomplete',
        parseInt(item['Outstanding high priority suggestions']),
      ])
      const highDismissed = option.map((item) => [
        'high',
        'Dismissed',
        parseInt(item['Dismissed high priority suggestions']),
      ])
      const midComplete = option.map((item) => [
        'mid',
        'complete',
        parseInt(item['Complete mid priority suggestions']),
      ])
      const midInComplete = option.map((item) => [
        'mid',
        'Incomplete',
        parseInt(item['Outstanding mid priority suggestions']),
      ])
      const midDismissed = option.map((item) => [
        'mid',
        'Dismissed',
        parseInt(item['Dismissed mid priority suggestions']),
      ])
      const lowComplete = option.map((item) => [
        'low',
        'complete',
        parseInt(item['Complete low priority suggestions']),
      ])
      const lowInComplete = option.map((item) => [
        'low',
        'Incomplete',
        parseInt(item['Outstanding low priority suggestions']),
      ])
      const lowDismissed = option.map((item) => [
        'low',
        'Dismissed',
        parseInt(item['Dimissed low priority suggestions']),
      ])
      const high = highComplete.concat(highInComplete, highDismissed)
      const mid = midComplete.concat(midInComplete, midDismissed)
      const low = lowComplete.concat(lowInComplete, lowDismissed)
      const completeData = high.concat(mid, low)
      setSuggestions(completeData)
    }
    fetchMyAPI()
  }, [])

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Sankey
