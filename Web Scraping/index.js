const puppeteer = require('puppeteer');

(async () => {
  /* Initiate the Puppeteer browser */
  let scrapeurl='https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020#content';
  let browser = await puppeteer.launch({headless: false}); // default is true
  let page = await browser.newPage();
  /* Go to the IMDB Movie page and wait for it to load */
  await page.goto(scrapeurl, { waitUntil: 'networkidle2' });
  /* Run javascript inside of the page */
  let data = await page.evaluate(() => {
   /* Code for Selectors */
   let  Publication_Date_Number=document.querySelector("#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(1)").innerText
    
   let Bidding_Date = document.querySelector("#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(19)").innerText;
   let objectt= document.querySelector("#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > p:nth-child(6)").innerText;
   let all_links = document.querySelector("#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-field-historico-da-licitacao > div > table > tbody > tr > td:nth-child(2) > div > div > div > a");
   
   return {
      Publication_Date_Number,
      Bidding_Date,
      objectt,
      all_links,
    
    }
  });

  console.log(data);
  debugger;
  await browser.close();
})();