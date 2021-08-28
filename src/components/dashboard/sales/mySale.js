import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Papa from 'papaparse'
import HighchartsMore from 'highcharts/highcharts-more'
import salesOfMichael from '../../../data/sales-michael.csv'
import salesOfRegional from '../../../data/regional-sales.csv'

HighchartsMore(Highcharts)

const MySale = () => {
  const [michaelSales2016, setMichaelSales2016] = useState()

  const options = {
    chart: {
      type: 'boxplot',
    },

    title: {
      text: 'My sales vs region and nation',
    },

    legend: {
      enabled: false,
    },

    xAxis: {
      categories: ['National 2016', 'Regional 2016'],
      title: {
        text: 'Year 2016',
      },
    },

    yAxis: {
      title: {
        text: 'Sales',
      },
    },

    series: [
      {
        name: 'Sales',
        data: [
          [760, 801, 848, 895, 965],
          [733, 853, 939, 980, 1080],
        ],
        tooltip: {
          headerFormat: '<em>Experiment No {point.key}</em><br/>',
        },
      },
      {
        name: 'Outliers',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',

        marker: {
          fillColor: 'white',
          lineWidth: 1,
          lineColor: Highcharts.getOptions().colors[0],
        },
        tooltip: {
          pointFormat: 'Observation: {point.y}',
        },
      },
    ],
  }

  const fetchmySalesData = async (path) => {
    const response = await fetch(path)
    const reader = response.body.getReader()
    const result = await reader.read()
    const decoder = new TextDecoder('utf-8')
    const csv = decoder.decode(result.value)
    const results = Papa.parse(csv, { header: true })
    const option = results.data
    console.log(option)
    return option
  }
  /* 
  const calSumOfSales = (year, yearArry) => {
    yearArry
      .filter((item) => {
        return item.Quarter.includes(year)
      })
      .map((item) => parseInt(item['Michael Sales (£)']))
      .reduce((a, b) => a + b, 0)
  } */

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(salesOfMichael)
      const reader = response.body.getReader()
      const result = await reader.read()
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value)
      const results = Papa.parse(csv, { header: true })
      const option = results.data

      const sumOfMichaelSales2016 = option
        .filter((item) => {
          return item.Quarter.includes('2016')
        })
        .map((item) => parseInt(item['Michael Sales (£)']))
        .reduce((a, b) => a + b, 0)
      console.log(sumOfMichaelSales2016)
      setMichaelSales2016(sumOfMichaelSales2016)
      console.log(michaelSales2016)
    }
    fetchMyAPI()
    fetchmySalesData(salesOfRegional)
  }, [])
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default MySale
