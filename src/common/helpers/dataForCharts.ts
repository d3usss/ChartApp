import { CampaignsReturnedType } from '../types/ChartDataTypes';

export const dataForChart = (
  isAll: boolean,
  dataForCampaing: CampaignsReturnedType | null,
  allClicks: string[],
  allDate: string[],
  allImpression: string[]
) =>
  isAll
    ? {
        labels: allDate,
        datasets: [
          {
            label: 'Clicks',
            data: allClicks.map((values: string) => values),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y'
          },
          {
            label: 'Impressions',
            data: allImpression.map((values: string) => values),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1'
          }
        ]
      }
    : {
        labels: dataForCampaing ? dataForCampaing.date : [],
        datasets: [
          {
            label: 'Clicks',
            data: dataForCampaing ? dataForCampaing.clicks.map((values: string) => values) : [],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y'
          },
          {
            label: 'Impressions',
            data: dataForCampaing
              ? dataForCampaing.impressions.map((values: string) => values)
              : [],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1'
          }
        ]
      };

export const optionsForChart = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false
  },
  stacked: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom'
    }
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false
      }
    }
  }
};
