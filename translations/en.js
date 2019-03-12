/**
 * Here we define all of the ENGLISH text in the app.
 * There should be a pair for each screen, and in there
 * should at minimum be a `header` property, which
 * is what is displayed at the top of the screen.
 * 
 * And, by defining the header text in here, we are able
 * to customize it for the SwitchNavigator, something
 * that is not otherwise possible.
 */
const englishStrings = {
    Welcome: {
        header: "Welcome",
        body: "Welcome to Universal Solar! We'll walk you through the whole process. Press Next when you're ready to start."
    },
    Groups: {
        header: "Groups",
        body: "A group is who you'll buy solar with. If you've received a group code in the mail, you can enter it below. If you haven't, join a group below.",
        loading: "Loading...",
        error: "Error loading data. Please try again later.",
        placeholder: "Group Name"
    },
    Plan: {
        header: "Plan",
        body: "Take between twenty and forty pictures of your home, from multiple angles. Once you're done, press next.",
        permissionTitle: "Allow camera access?",
        permissionMessage: "We use this to build a 3D model.",
        buttonName: "Take picture",
        buttonDescription: "Takes a picture"
    },
    Buy: {
        header: "Buy",
        warning: "Please join a group first.",
        upfront: "upfront cost",
        saved: "saved per year",
        each: " each",
        numberOf: "Number of solar panels",
        energyUse: "Your energy usage",
        solarToSell: "Solar energy to sell up front",
        perMonth: "per month"
    },
    Checkout: {
        header: "Checkout",
        card: "Card #",
        expirationYear: "Expiration Year (YYYY)",
        expirationMonth: "Expiration Month (MM)",
        addressOne: "Address Line One",
        addressTwo: "Address Line Two",
        city: "City",
        state: "State",
        zipcode: "Zipcode"
    },
    Navigator: {
        next: "Next",
        nextDescription: "Moves to the next step.",
        back: "Back",
        backDescription: "Moves to the previous step."
    }
}

export default  englishStrings;