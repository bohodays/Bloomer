// ======================================
// Common
// ======================================

// 숫자를 "01" 형식으로 바꾸기
export const convertNumFormat = (num: number) => {
  let sNum = String(num);
  if (sNum.length < 2) {
    sNum = "0" + sNum;
  }
  return sNum;
};

// 음악 제목 형식 바꾸기
export const convertMusicFormat = (title: string) => {
  let idx = 0;
  for (let i = 0; i < title.length; i++) {
    if (title[i] === "-") {
      idx = i;
    }
  }
  let newTitle = title;
  if (idx > 0) {
    newTitle = title.slice(0, idx);
  }
  newTitle = newTitle.replace(/-/g, " ");
  newTitle = newTitle.replace(/_/g, " ");
  return newTitle;
};

// ======================================
// DiaryDate
// ======================================
// 월 주차 계산 함수
export const convertWeekIdx = (date: Date) => {
  const currentDate = date.getDate();
  const firstDay = new Date(date.setDate(1)).getDay();
  return Math.ceil((currentDate + firstDay) / 7);
};

// ======================================
// DiaryListItem
// ======================================

// 시간 형식으로 바꾸기
export const convertTimeFormat = (date: string | Date) => {
  const target = new Date(date);
  const hour = target.getHours();
  const minute = target.getMinutes();
  return (
    hour.toString().padStart(2, "0") + ":" + minute.toString().padStart(2, "0")
  );
};

// 내용 미리보기 형식
export const convertContentToMaxLength = (content: string) => {
  if (content.length > 10) {
    return content.slice(0, 50) + "...";
  } else {
    return content;
  }
};

// "기쁨", "안정", "당황", "분노", "불안", "상처", "슬픔"
export const convertEmotionFormat = (emotion: string) => {
  switch (emotion) {
    case "기쁨":
      return "기뻤던";
    case "안정":
      return "안정되었던";
    case "당황":
      return "당황했던";
    case "분노":
      return "분노했던";
    case "불안":
      return "불안했던";
    case "상처":
      return "상처 받았던";
    case "슬픔":
      return "슬펐던";
  }
};

// ======================================
// DiaryWeather
// ======================================

// 요일 매핑 함수
export const convertDayIdx = (idx: number) => {
  const dayLst = ["일", "월", "화", "수", "목", "금", "토"];
  return dayLst[idx];
};

export const convertWeatherDescription = (description: string) => {
  switch (description) {
    case "snow":
      return "Snow";
    case "Haze":
    case "Mist":
    case "Smoke":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return "Atmosphere";
    default:
      return description;
  }
};
