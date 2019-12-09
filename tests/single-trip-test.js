module.exports = {
    "@tags": ["single-trip-test"],
    "@disabled": true,

    before: function (browser) {
        browser.windowMaximize();
        let page = browser.page.flightsSearchPage();
        page.navigate();
    },
    "Single trip ticket booking test": function (browser) {
        let page = browser.page.flightsSearchPage();
        page
            .enterOriginAndDestination()
            .selectDepartDateForSingleTrip()
            .clickSearchFlightBtn()
            .applyFilters()
            .bookSingleTrip()
            .enterEmailAddress()
            .enterPassengerInfoAndContinue()
            .assert.elementPresent('@totalFares', 'Total Fare amount is displayed on page')


    },
}