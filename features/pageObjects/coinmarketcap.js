const clickOnFilterBtn =() => {

    $('.cNZUmt.hide_on_mobile_wrapper.sc-27ca74ec-4 > .gNHIvn.kHBmSh.sc-a4a6801b-0.sc-c97dd8af-0.table-control-filter').click();
}

const clickOnAddFilterBtn = () => {

    $('[class] li:nth-of-type(5) [data-sensors-click]').click();
}

const toggle = () => {
    $('label#mineable').click()
}

const clickOnCryptoCurrency = () => {
    $('div:nth-of-type(1) > .cGFzGl.cmc-filter-button.sc-a4a6801b-0 > .igdbUo.sc-aef7b723-0').click()
}

const coins = () => {
    $('div:nth-of-type(2) > .bcMxzk.cmc-option-button.sc-a4a6801b-0').click()
}

const price = () => {
    $('div:nth-of-type(3) > .cGFzGl.cmc-filter-button.sc-a4a6801b-0 > .igdbUo.sc-aef7b723-0').click()
}

const minPrice = () => {
    $('.cmc-input-row > input:nth-of-type(1)').setValue('10')
}

const maxPrice = () => {
    $('.cmc-input-row > input:nth-of-type(2)').setValue('100')
}


const applyFilter = () => {
    $('.cmc-filter-button.glxMF.sc-a4a6801b-0').click()
}

const showResults = () => {
    $('.cXksaI.cmc-filter-button.sc-a4a6801b-0').click()
}

const filteringDetails = () => {
    $$('div:nth-child(1) > div.sc-f7a61dda-2.efhsPu > table > tbody > tr').length
}

const beforeFilteringDetails = () => {
    $$('div:nth-child(1) > div.sc-f7a61dda-2.efhsPu > table > tbody > tr').length
}


module.exports = {
    clickOnFilterBtn,
    clickOnAddFilterBtn,
    toggle,
    clickOnCryptoCurrency,
    coins,
    price,
    minPrice,
    maxPrice,
    applyFilter,
    showResults,
    filteringDetails,
    beforeFilteringDetails
}