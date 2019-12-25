import palette from 'theme/palette';

export const data1 = {
  labels: ['tutor1', 'tutor1', 'tutor1', 'tutor1', 'tutor1'],
  datasets: [
    {
      label: 'This year',
      backgroundColor: palette.primary.main,
      data: [1, 110, 115, 120, 125]
    },
  ]
};

export const data = {
  labels: ['tutor', 'tutor', 'tutor', 'tutor', 'tutor'],
  datasets: [
    {
      label: 'This year1',
      backgroundColor: palette.primary.main,
      data: [1, 3110, 1115, 7120, 1125,]
    },
  ]
};


export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.divider,
    backgroundColor: palette.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider
        }
      }
    ]
  }
};
