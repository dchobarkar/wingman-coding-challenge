export interface ConsultationsChartDataPoint {
  day: string;
  incoming: number;
  answered: number;
  experts: number;
}

export interface VsPastPeriodDataPoint {
  period: string;
  consultations: number;
  ordersClosed: number;
}

export interface ForecastCard {
  percent: string;
  description: string;
  trend: "up" | "down";
}

export const consultationsChartData: ConsultationsChartDataPoint[] = [
  { day: "Mon", incoming: 32, answered: 28, experts: 10 },
  { day: "Tue", incoming: 40, answered: 35, experts: 12 },
  { day: "Wed", incoming: 50, answered: 45, experts: 18 },
  { day: "Thu", incoming: 38, answered: 30, experts: 20 },
  { day: "Fri", incoming: 44, answered: 40, experts: 15 },
  { day: "Sat", incoming: 48, answered: 42, experts: 16 },
  { day: "Sun", incoming: 52, answered: 50, experts: 14 },
];

export const vsPastPeriodData: VsPastPeriodDataPoint[] = [
  { period: "This week", consultations: 18, ordersClosed: 15 },
  { period: "Last week", consultations: 15, ordersClosed: 12 },
];

export const forecastCards: ForecastCard[] = [
  {
    percent: "+15%",
    description:
      "forecasted increase in your sales closed by the end of the current month",
    trend: "up",
  },
  {
    percent: "+20%",
    description:
      "forecasted increase in consultations by the end of the current month",
    trend: "up",
  },
];
