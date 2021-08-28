import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Papa from 'papaparse'
import data from '../../../data/sales-michael.csv'

const Sales = () => {
  const [categories, setCategories] = useState([])
  const [values, setValues] = useState([])

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'My chart',
    },
    xAxis: {
      categories: categories,
    },

    yAxis: {
      lineColor: '#FF0000',
      lineWidth: 1,
      title: {
        text: 'Sales',
      },
    },

    series: [
      {
        data: values,
      },
    ],
  }
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(data)
      const reader = response.body.getReader()
      const result = await reader.read()
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value)
      const results = Papa.parse(csv, { header: true })
      const option = results.data
      const categories = option.map(({ Quarter }) => Quarter)
      setCategories(categories)
      const series = option.map((item) =>
        parseInt(item['Average Rep Sales (£)'])
      )
      setValues(series)
    }
    fetchMyAPI()
  }, [])

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Sales
