import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Papa from 'papaparse'
import data from '../../../data/outstanding-suggestions-michael.csv'

const AdherenceVolumeOfCallEmil = () => {
  const [categories, setCategories] = useState([])
  const [calls, setCalls] = useState([])
  const [Meetings, setMeetings] = useState([])
  const [Emails, setEmails] = useState([])

  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Volume of Calls, Meetings and Emails on Target',
    },

    xAxis: {
      categories: categories,
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        name: 'Calls',
        data: calls,
      },
      {
        name: 'Meetings',
        data: Meetings,
      },
      {
        name: 'Emails',
        data: Emails,
      },
    ],
  }

  useEffect(() => {
    async function fetchMyData() {
      const response = await fetch(data)
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value) // the csv text
      const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
      const option = results.data
      const categories = option.map(({ Quarter }) => Quarter)
      setCategories(categories)
      const calls = option.map((item) => parseInt(item['% Calls on Target']))
      const Meetings = option.map((item) =>
        parseInt(item['% Visits on Target'])
      )
      const Emails = option.map((item) => parseInt(item['% Emails on Target']))
      setCalls(calls)
      setMeetings(Meetings)
      setEmails(Emails)
    }
    fetchMyData()
  }, [])
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
export default AdherenceVolumeOfCallEmil
