import { launch } from 'puppeteer';

const getTitles = (req, res) => {
  let scrape = async () => {
    const browser = await launch();
    const page = await browser.newPage();

    await page.goto('https://www.switchup.org/research/best-coding-bootcamps');

    const result = await page.evaluate(() => {
      let data = []; // Create an empty array that will store our data
      let elements = document.querySelectorAll('.blog-post > div > h3 > a'); // Select all Products

      for (var element of elements) {
        // Loop through each proudct
        let title = element.innerText; // Select the title

        data.push({ title }); // Push an object with the data onto our array
      }

      return data; // Return our data array
    });

    browser.close();
    return result; // Return the data
  };

  scrape().then(value => {
    res.send({ value }); // Success!
  });
};

export default getTitles;
