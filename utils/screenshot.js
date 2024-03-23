// utils/screenshot.js
const puppeteer = require("puppeteer");

async function takeScreenshot(url, path) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: path });
  await browser.close();
}

module.exports = takeScreenshot;
