import { useRef } from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const Chart = ({ services }) => {
  let dataString = [
    '$110',
    '$140',
    '$150',
    '$200',
    '$90',
    '$120',
    '$140',
    '$150',
    '$200',
    '$90',
    '$120',
    '$200',
  ];

  let dataArray = dataString.map(value => parseFloat(value.replace('$', '')));
  const chartRef = useRef();

  const options = {
    chart: {
      type: 'line',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '45%',
        borderRadius: 10,
      },
    },
    colors: ['#31AE1A'], // set the color of the bars here

    series: [
      {
        name: 'Sales',
        data: dataArray,
      },
    ],
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    },
  };

  const downloadChart = () => {
    const chart = chartRef.current.chart;
    if (chart) {
      const url = chart.getDataURL({
        type: 'png',
        quality: 1,
        width: 800,
        height: 600,
      });
      return downloadURI(url, 'chart.png');
    }
  };

  return (
    <div className="basis-[60%] bg-white p-5">
      <div>
        <ul className="flex justify-between gap-4">
          {services.map((serveces, i) => (
            <li className="" key={i}>
              <span className="text-[0.8em]  block font-manrope font-normal">
                {serveces.name}
              </span>
              <span className="text-[0.8em] block font-manrope font-normal text-skin-green">
                {serveces.qualtity}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        height={450}
        ref={chartRef}
      />
      <div className="flex justify-center">
        <button
          className="mb-3 px-8 text-skin-green py-2 border-2 border-skin-green rounded-[10px]"
          onClick={downloadChart}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Chart;
