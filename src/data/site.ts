export const site = {
  name: '三奇美徑',
  alternateName: '宜蘭冬山伯朗大道',
  domain: 'SanqiMeijing.com',
  url: 'https://SanqiMeijing.com',
  description:
    '三奇美徑完整旅行指南：查看宜蘭冬山伯朗大道的稻田季節、交通停車、拍照位置、散步與單車路線。',
  address: '宜蘭縣冬山鄉三奇村，奉尊宮至協松路之間',
  navigationAddress: '宜蘭縣冬山鄉三奉路77號（三奇奉尊宮附近）',
  phone: '03-9590799',
  coordinates: {
    latitude: 24.645495,
    longitude: 121.8144542,
  },
  mapUrl:
    'https://www.google.com/maps/dir/?api=1&destination=24.645495,121.8144542&destination_place_id=ChIJNd4uXproZzQRxz7YvvxXFDE',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.3669370801877!2d121.8144542!3d24.645495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e89a5e2ede35%3A0x311457fcbed83ec7!2z5a6c5YWw5Yas5bGx5Lyv5pyX5aSn6YGT!5e0!3m2!1szh-CN!2stw!4v1785315664342!5m2!1szh-CN!2stw',
  ga4: 'G-HXM22WWPKP',
} as const;

export const fieldStatus = {
  label: '本季田況',
  tone: 'harvested',
  title: '主要稻浪季已告一段落',
  description:
    '依往年農期與本季活動時程，7月下旬多已進入收割後階段。田間道路仍可散步與騎行，實際田貌以當日農務為準。',
  updatedAt: '2026-07-29',
  nextBestWindow: '下一個主要賞景期：約翌年3月至6月',
} as const;

export const facts = [
  { value: '約 2 公里', label: '稻間美徑' },
  { value: '9 道', label: '特色 S 彎' },
  { value: '免費', label: '全天候開放' },
  { value: '45–120 分', label: '建議停留' },
] as const;

export const seasons = [
  {
    months: '3–4 月',
    title: '水田與新綠',
    description: '春耕後秧苗漸長，天晴時可看見水面倒影與清新的淺綠色田野。',
    level: '推薦',
  },
  {
    months: '5–6 月',
    title: '綠金稻浪',
    description: '稻穗由翠綠轉為金黃，通常也是彩繪稻田最清楚、拍照層次最豐富的時段。',
    level: '最佳',
  },
  {
    months: '6 月底–7 月',
    title: '成熟與收割',
    description: '同一片田區可能同時出現金黃、收割中與裸田景觀，出發前要先確認田況。',
    level: '看田況',
  },
  {
    months: '8–2 月',
    title: '農村日常',
    description: '以休耕、整地或其他農作景觀為主，適合慢騎與感受安靜的冬山田園。',
    level: '悠閒',
  },
] as const;

export const faqs = [
  {
    question: '三奇美徑需要門票嗎？',
    answer: '不需要。三奇美徑是穿越農田的田間道路，原則上可免費參觀；活動、租車或體驗項目可能另行收費。',
  },
  {
    question: '什麼時候最漂亮？',
    answer: '通常以5月初至6月底最值得期待，稻田會由翠綠轉為金黃。實際成熟與收割日期仍會受品種、天候及農務安排影響。',
  },
  {
    question: '自駕要導航到哪裡？',
    answer: '建議導航「三奇奉尊宮」或宜蘭縣冬山鄉三奉路77號附近，停妥後再步行進入田間道路。不要把車開進核心農路停拍。',
  },
  {
    question: '從冬山火車站怎麼去？',
    answer: '可搭乘冬山鄉免費巴士冬山線至奉尊宮站，或在冬山站周邊租自行車前往。巴士班次可能調整，出發前請再確認當期時刻。',
  },
  {
    question: '適合帶小孩或長輩嗎？',
    answer: '主路平坦，適合散步與一般嬰兒車；但田區遮蔭少，夏季應避開正午並準備飲水、防曬與防蚊用品。觀景設施若需爬樓梯，則不屬完整無障礙動線。',
  },
  {
    question: '收割後還值得去嗎？',
    answer: '可以作為冬山半日遊或單車路線的一站，但不宜期待網路照片中的完整稻浪。若只為金黃稻田專程前往，建議等待下一個稻作季。',
  },
] as const;
