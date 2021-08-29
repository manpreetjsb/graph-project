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

  const [data, setData] = useState([])

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
        data: data,
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

  const calSales2016 = (arry, colNAme) => {
    return arry
      .filter((item) => {
        return item.Quarter.includes('2016')
      })
      .map((item) => parseInt(item[colNAme]))
  }

  const fetchmySalesData = async (path) => {
    const response = await fetch(path)
    const reader = response.body.getReader()
    const result = await reader.read()
    const decoder = new TextDecoder('utf-8')
    const csv = decoder.decode(result.value)
    const results = Papa.parse(csv, { header: true })
    const option = results.data
    const nationalSales2016 = calSales2016(option, 'Total Sales (£)')
    nationalSales2016.sort()
    nationalSales2016.splice(2, 0, 2475)
    console.log(nationalSales2016)

    const regionalSales2016 = calSales2016(option, 'Greater London (£)')
    const getsum = regionalSales2016.reduce((a, b) => a + b, 0) / 4
    regionalSales2016.splice(2, 0, getsum)
    regionalSales2016.sort()
    console.log(regionalSales2016)

    const combined2 = [nationalSales2016, regionalSales2016]
    setData(combined2)
    console.log(data)
  }

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
      if (!michaelSales2016) {
        setMichaelSales2016(sumOfMichaelSales2016)
      }
    }
    fetchMyAPI()
    fetchmySalesData(salesOfRegional)
  }, [])
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default MySale
