import puppeteer from 'puppeteer'
import { browserLaunch } from '../browser'

export const extractor = async ({ config, queries }) => {
  const {
    __URL__,
    __FORCE_SCROLL_TO__,
    __WAIT_FOR_SELECTION__,
    __HEADERS__,
    __QUERIES__: { ...queriesList },
  } = queries
  const browser = await puppeteer.launch({
    headless: false,
  })

  const page = await browser.newPage()

  await page.goto(__URL__)

  const evalArray = async array => {
    const [SELECTOR, property] = array
    return await page.evaluate(
      ({ SELECTOR: selector, property }) => {
        return [].slice
          .call(document.querySelectorAll(selector))
          .map(el => el[property])
      },
      { SELECTOR, property },
    )
  }

  const evalBasic = async value => {
    return await page.$eval(value, element => element.innerHTML)
  }

  const evaluations = Object.keys(queriesList).map(async key => {
    const value = queriesList[key]
    if (Array.isArray(value)) {
      return {
        [key]: await evalArray(value),
      }
    } else {
      return {
        [key]: await evalBasic(value),
      }
    }
  })

  const values = await Promise.all(evaluations)

  browser.close()
  return values
}

//FIRST GOAL --> content: ['.Accordion-row-title', dt => dt.innerHTML]
