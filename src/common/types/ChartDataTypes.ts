export enum CHART_DATA {
  DATE,
  DATASOURCE,
  CAMPAIGNS,
  CLICKS,
  IMPRESSIONS
}

export type DataSourcesType = ['Facebook Ads', 'Google Adwords', 'Google Analytics', 'Mailchimp'];
export type CampaignsReturnedType = { date: string[]; clicks: string[]; impressions: string[] };
