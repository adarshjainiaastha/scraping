const puppeteer = require('puppeteer');
async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com/s?k=headphone&ref=nb_sb_noss_2');
  await page.waitForSelector('.s-result-list');
  


const productNames = await page.evaluate(() => {
  const elements = document.querySelectorAll('.s-result-item .a-text-normal');
  const names = [];
  for (let element of elements) {
    names.push(element.textContent.trim());
    }
    return names;
  });
  
  const productPrices = await page.evaluate(() => {
    const elements = document.querySelectorAll('.s-result-item .a-price-whole');
    let prices = [];
    for (let element of elements) {
      prices.push(element.textContent.trim());
    }
    return prices;
    console.log('Product prices:', productprices[i]);
  });
  

  const productrating = await page.evaluate(() => {
    const elements = document.querySelectorAll(' span > a > i.a-icon.a-icon-star-small.a-star-small-4-5.aok-align-bottom');
    let rating = [];
    for (let element of elements) {
      rating.push(element.textContent.trim());
    }
    return rating;
    

  });
  //console.log('Product rating:', productrating);
  

  for (let i = 0; i < productNames.length; i++) {
    console.log('Product Name:', productNames[i]);
    console.log('Product Price:', productPrices[i]);
    console.log('Product rating:', productrating[i]);

    console.log('---');
  }
    
  await browser.close();
}

run();