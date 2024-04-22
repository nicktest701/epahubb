import dashboard_img from "../assets/svg/sidebar/dashboard.svg";
import leaderboard_img from "../assets/svg/sidebar/leaderboard.svg";
import competition_img from "../assets/svg/sidebar/competition.svg";
import certificate_img from "../assets/svg/sidebar/certificate.svg";
import billing_img from "../assets/svg/sidebar/billing.svg";
import download_img from "../assets/svg/sidebar/download.svg";
import portal_img from "../assets/svg/sidebar/portal.svg";
import market_img from "../assets/svg/sidebar/market.svg";
import analysis_img from "../assets/svg/sidebar/analysis.svg";
import settings_img from "../assets/svg/sidebar/settings.svg";
import statistics_img from "../assets/svg/sidebar/statistics.svg";

import hashtag from "../assets/svg/hashtag.svg";
import lots from "../assets/svg/lots.svg";
import winrate from "../assets/svg/winrate.svg";
import average from "../assets/svg/average.svg";
import expectancy from "../assets/svg/expectancy.svg";
import profit from "../assets/svg/profit.svg";

export const IMAGES = [
  dashboard_img,
  leaderboard_img,
  competition_img,
  certificate_img,
  billing_img,
  download_img,
  portal_img,
  market_img,
  analysis_img,
  settings_img,
  statistics_img,
];

export const SIDE_BAR_ITEMS = [
  {
    icon: dashboard_img,
    to: "/",
    title: "Dashboard",
  },
  {
    icon: statistics_img,
    to: "/statistics",
    title: "Statistics",
  },
  {
    icon: leaderboard_img,
    to: "/leaderboard",
    title: "Leaderboard",
  },
  {
    icon: competition_img,
    to: "/competition",
    title: "Competition",
  },
  {
    icon: certificate_img,
    to: "/certificates",
    title: "Certificates",
  },
  {
    icon: billing_img,
    to: "billing",
    title: "Billing",
  },
  {
    icon: download_img,
    to: "/downloads",
    title: "Downloads",
  },
  {
    icon: portal_img,
    to: "portal",
    title: "Affiliate Portal",
  },
  {
    icon: market_img,
    to: "market",
    title: "Forex Market Hours",
  },
  {
    icon: analysis_img,
    to: "/analysis",
    title: "Journal Analysis",
  },
  {
    icon: settings_img,
    to: "/settings",
    title: "Personal Settings",
  },
];

export function generateNumbers() {
  const numbers: number[] = [];
  for (let index = 1; index <= 120; index++) {
    numbers.push(index);
  }

  return numbers;
}

export const firstRow = [
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1,
  2, 3, 4,
];
export const selectedColumn = [5, 29, 53, 77, 101];

export const londonPostions = [26, 27, 28, 29, 30, 31, 32, 33, 34];
export const london = ["L", "O", "N", "D", "O", "N"];

export const newYorkPostions = [55, 56, 57, 58, 59, 60, 61, 62, 63];
export const newYork = ["N", "E", "W", "", "Y", "O", "R", "K"];

export const sidneyPostions = [88, 89, 90, 91, 92, 93, 94, 95];
export const sidney = ["S", "I", "D", "N", "E", "Y"];

export const tokyoPostions = [113, 114, 115, 116, 117, 118, 119];
export const tokyo = ["T", "O", "K", "Y", "O"];

export const ANALYSIS_MIDDLE = [
  {
    icon: hashtag,
    value: "74",
    title: "No. of Trades",
  },
  {
    icon: lots,
    value: "13",
    title: "Lots",
  },
  {
    icon: winrate,
    value: "21.74%",
    title: "win rate",
  },
  {
    icon: average,
    value: "0.65",
    title: "Average RRR",
  },
  {
    icon: expectancy,
    value: "-$17.62",
    title: "Expectancy",
  },
  {
    icon: profit,
    value: "0.18",
    title: "Profit factor",
  },
];
