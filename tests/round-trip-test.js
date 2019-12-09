module.exports = {
    "@tags": ["round-trip-test"],
    // "@disabled": true,

    before: function (browser) {
        browser.windowMaximize();
        let page = browser.page.flightsSearchPage();
        page.navigate();
    }, 
    "Round trip ticket booking test": function(browser){
        let page = browser.page.flightsSearchPage();
        page
            .selectRoundTripOption()
            .enterOriginAndDestination()
            .selectDepartAndReturnDate()
            .clickSearchFlightBtn()
            .applyFilters()
            .bookRoundTrip()     
            .enterEmailAddress()
            .enterPassengerInfoAndContinue()
            .assert.elementPresent('@totalFares', 'Total Fare amount is displayed on page')   
    },
}