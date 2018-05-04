export const browserLaunch = puppeteer => async ({ config }) => {
  return await puppeteer.launch(config)
}
