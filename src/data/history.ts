export interface HistoryData {
  date: string; // 日付
  title: string; // 学校名やイベント名
  description: string; // 学部や詳細
  note?: string; // 任意のメモや補足情報
}

export const historyData: HistoryData[] = [
  {
    date: "2025年4月",
    title: "舞鶴工業高等専門学校", // 学校名
    description: "電気情報工学科 入学", // 学部・詳細
    note: "",
  },
  {
    date: "2025年3月",
    title: "舞鶴工業高等専門学校", // 学校名
    description: "電気情報工学科 卒業", // 学部・詳細
    note: "",
  },
  {
    date: "2025年4月",
    title: "福井大学", // 学校名
    description: "工学部 電気電子情報工学科 編入学", // 学部・詳細
    note: "3年次編入", // 任意のメモや補足情報
  },
  // ...他のデータ
];
