const page = {

    url: 'https://www.cleartrip.ae/',

    elements: {

        //Flight Information selectors
        oneWayOption: "#OneWay",
        roundTripOption: "#RoundTrip",
        origin: "#FromTag",
        destination: "#ToTag",
        departDateField: "#DepartDate",
        departDate: "#ui-datepicker-div > div > table > tbody > tr:last-child > td:last-child",
        returnDateField: "#ReturnDate",
        returnDate: "#ui-datepicker-div > div:nth-child(2) > table > tbody > tr:last-child > td:nth-child(2)",
        searchFlightsBtn: "#SearchBtn",

        //Zero stop filter
        zeroStopOption: ".stops > ul > li:first-child",
        bookRoundTrip: ".listView.flights > li:first-child > table > tbody:nth-child(2) > tr:nth-child(1) > td > button",
        bookSingleTrip: ".listView.flights > li:nth-child(2) > table > tbody:nth-child(2) > tr:nth-child(1) > td > button",
        continueBookingBtn: "#itineraryBtn",

        //Traveller's details 
        emailAddress: "#username",
        travellerTitle: "#AdultTitle1 > option:nth-child(2)",
        firstName: "#AdultFname1",
        lastName: "#AdultLname1",
        DOBDay: "#AdultDobDay1 > option:nth-child(2)",
        DOBMonth: "#AdultDobMonth1 > option:nth-child(2)",
        DOBYear: "#AdultDobYear1 > option:nth-child(16)",
        passportNumber: "#AdultPassport1",
        mobileNumber: "#mobileNumber",
        continueBtn: "#travellerBtn",

        //Total Fares - Result 
        totalFares: "#totalFare > span:nth-child(2)"

    },

    commands: {
        selectRoundTripOption: function () {
            return this
                .click('@roundTripOption')
        },
        enterOriginAndDestination: function () {
            return this
                .setValue('@origin', 'Dubai, AE - Dubai Internation Airport (DXB)')
                .setValue('@destination', 'London, GB - All airports (LON)')
        },
        selectDepartAndReturnDate: function () {
            return this
                .click('@departDateField')
                .waitForElementVisible('@departDate', 8000, 'waiting for calendar to be visible')
                .click('@departDate')
                .pause(2000)
                .click('@returnDate')
        },
        clickSearchFlightBtn: function () {
            return this
                .click('@searchFlightsBtn')
                .perform(() => {
                    console.log('loading search results of available flights');

                })
                .pause(20000)
        },
        applyFilters: function () {
            return this
                .waitForElementVisible('@zeroStopOption', 8000, 'waiting for filters to be visible on left navigation')
                .click('@zeroStopOption')
                .pause(3000)
        },
        bookRoundTrip: function () {
            return this
                .click('@bookRoundTrip')
                .click('#insurance_confirm')
                .click('@continueBookingBtn')
                .pause(2000)
                .click('.primary.nearByAirportWarningBtn')
        },
        enterEmailAddress: function () {
            let data = this.api.globals;
            return this
                .pause(10000)
                .waitForElementVisible('@emailAddress', 3000, 'waiting for email field to be visible on the page')
                .setValue('@emailAddress', data.passenger.emailAddress)
                .click('#LoginContinueBtn_1')
                .pause(2000)
        },
        enterPassengerInfoAndContinue: function () {
            let data = this.api.globals;
            return this
                .waitForElementVisible('@firstName', 5000, 'waiting for name fields to be visible on the page')
                .click('@travellerTitle')
                .setValue('@firstName', data.passenger.firstName)
                .setValue('@lastName', data.passenger.lastName)
                .click('@DOBDay')
                .click('@DOBMonth')
                .click('@DOBYear')
                .setValue('@passportNumber', data.passenger.passportNumber)
                .setValue('@mobileNumber', data.passenger.mobileNumber)
                .click('@continueBtn')
                .pause(8000)
        },

        //Single Trip commands
        selectDepartDateForSingleTrip: function () {
            return this
                .click('@departDateField')
                .pause(8000)
                .waitForElementVisible('@departDate', 3000, 'waiting for calendar to be visible')
                .click('@departDate')
                .pause(2000)
        },
        bookSingleTrip: function () {
            return this
                .click('@bookSingleTrip')
                .click('#insurance_confirm')
                .click('@continueBookingBtn')
                .pause(2000)
                .click('.primary.nearByAirportWarningBtn')
        },
    }
}

module.exports = {
    url: page.url,
    elements: page.elements,
    commands: [page.commands]
}