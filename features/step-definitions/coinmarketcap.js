
const { Given, When, Then } = require("@cucumber/cucumber");
const { clickOnFilterBtn , clickOnAddFilterBtn , toggle , clickOnCryptoCurrency , coins , price , minPrice , maxPrice , applyFilter , showResults , filteringDetails , beforeFilteringDetails} = require('../pageObjects/coinmarketcap')
let afterFilteringDetails,beforeFiltering;

Given(/^I open the site$/, async() => {
    await browser.url("https://coinmarketcap.com/")
    console.log(await browser.getUrl()); 
    await browser.pause(5000)
    browser.maximizeWindow()
    let btn = $('.buttons > span:nth-of-type(2)')
    btn.click()
})

When(/^I capture the details before filtering$/, async() => {
    beforeFiltering= beforeFilteringDetails()
})

When(/^I click on filters$/, async() => {
     clickOnFilterBtn()
     await browser.pause(10000)
})

Then(/^I click on Add filters$/, async() => {
    clickOnAddFilterBtn()
    await browser.pause(5000)
})

Then(/^I toggle Mineable$/, async() => {
    toggle()
    await browser.pause(5000)
})

Then(/^I click All Crytocurrencies$/, async() => {
    clickOnCryptoCurrency()
    await browser.pause(5000)
})

Then(/^I select Coins in All Crytocurrencies$/, async() => {
    coins()
    await browser.pause(5000)
})


Then(/^I click on set price and set minvalue and maxvalue$/, async() => {
    price()
    await browser.pause(5000)
    minPrice()
    await browser.pause(5000)
    maxPrice()
    await browser.pause(5000)
})

Then(/^I click on Apply fliters$/, async() => {
    applyFilter()
    await browser.pause(5000)
})

Then(/^I click on show results$/, async() => {
    showResults()
    await browser.pause(5000)
})

When(/^I capture the details after filtering$/, async() => {
    afterFilteringDetails=filteringDetails()
})

Then(/^I compare the results before filtering and after filtering$/, async() => {
    expect(beforeFilteringDetails !== afterFilteringDetails).toBe(true)
})


    