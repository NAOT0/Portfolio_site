export interface HistoryData {
  period: string;
  event: string;
  description?: string;
}

export const historyData: HistoryData[] = [
  {
    period: "2020年4月",
    event: "舞鶴工業高等専門学校 電気情報工学科 入学",
  },
  {
    period: "2025年3月",
    event: "舞鶴工業高等専門学校 卒業",
  },
  {
    period: "2025年4月",
    event: "福井大学 工学部 電気電子情報工学科 編入学",
    description: "3年次編入",
  },
];
