export interface ISchedule {
  id: number;
  title: string;
  description: string;
  date: Date;
}

export interface IWeekly {
  [key: string]: ISchedule[];
}

export interface IMontly {
  [key: string]: IWeekly;
}

export interface ICalendar {
  [key: string]: IMontly;
}