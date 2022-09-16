const express = require('express')
const {Builder, By, Browser} = require('selenium-webdriver')

//Create express server that listens to incoming requests
const app = express()
const PORT = 8000

  let driver =  new Builder().forBrowser(Browser.CHROME).build();
  driver.get('https://handbook.monash.edu/2022/units/ENG2005');
//   try {
//      driver.get('https://handbook.monash.edu/2022/units/ENG2005');
//      //driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//      //driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// //   } finally {
// //      driver.quit();
// //   }

// app.get('/', (request, response)=> {
//     //Add web-scrapping code here:
//     driver =  new Builder().forBrowser('chrome').build();
//     driver.get('https://handbook.monash.edu/2022/units/ENG2005');
//     driver.refresh()
//     //Find button
//     const button = driver.findElements(By.className('css-iuska6-Button-IconButton'))
//     driver.execute_script("arguments[0].click();", button)   //Click the button using js executor
// })
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))


// async function WebScrapingLocal() {
//     try {
//       driver =  new Builder().forBrowser('chrome').build();
//       driver.get('https://handbook.monash.edu/2022/units/ENG2005');
//       driver.refresh()
//       //Find button
//       const button = driver.findElements(By.className('css-iuska6-Button-IconButton'))
//       driver.execute_script("arguments[0].click();", button)   //Click the button using js executor
      
//     } catch (error) {
//       throw new Error(error);
//     } finally {
//       await driver.quit();
//     }
//    }
//    const button = driver.findElements(By.className('css-iuska6-Button-IconButton')).then(function(elements){
//     elements.forEach(function (element){
//         element.getText().then(function(text){
//             console.log(text)
//         })
//   })

// try {
//     const data = await WebScrapingLocal();
//     response.status(200).json(data);
//   } catch (error) {
//     response.status(500).json({
//       message: 'Server error occurred',
//     });