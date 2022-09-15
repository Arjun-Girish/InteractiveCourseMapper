const express = require('express')
const {Builder, By} = require('selenium-webdriver')

//Create express server that listens to incoming requests
const app = express()
const port = 8000
app.get('/', (request, response)=> {
    //Add web-scrapping code here:

})
app.listen(port,()=> {
    console.log('App listening at http://localhost${port}')
})