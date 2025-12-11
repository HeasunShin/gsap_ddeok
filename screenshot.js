// screenshot.js
const puppeteer = require("puppeteer");

async function run() {
  const TARGET_URL =
    process.env.TARGET_URL || "https://heasunshin.github.io/shs_port/";
  const OUT_PATH = process.env.OUT_PATH || "screenshot.png";

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    // 데스크탑 뷰포트 (원하면 다른 사이즈 추가)
    await page.setViewport({ width: 1440, height: 900 });

    // 페이지 로드 대기
    await page.goto(TARGET_URL, { waitUntil: "networkidle2", timeout: 60000 });

    // 전체 페이지 스크린샷. 특정 영역만 필요하면 수정 가능.
    await page.screenshot({ path: OUT_PATH, fullPage: true });

    console.log("Screenshot saved to", OUT_PATH);
  } catch (err) {
    console.error("Screenshot error:", err);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

run();
