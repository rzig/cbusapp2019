import panels from "../db/panels";

const initialState = {groups: [
    {
        name: "Columbus Nerds",
        oneliner: "Solar for Columbus.",
        about: "We are geeks in CBUS that want to advance solar. We buy once a year.",
        image: "https://blog.ring.com/wp-content/uploads/2016/05/shutterstock_161232668.jpg",
        panel: panels[0]
    },
    {
        name: "Columbus Nerds 1",
        oneliner: "Solar for Columbus1.",
        about: "We are geeks in CBUS that want to advance solar. We buy once a year.",
        image: "https://blog.ring.com/wp-content/uploads/2016/05/shutterstock_161232668.jpg",
        panel: panels[0]
    },
    {
        name: "Columbus Nerds 2",
        oneliner: "Solar for Columbus2.",
        about: "We are geeks in CBUS that want to advance solar. We buy once a year.",
        image: "https://blog.ring.com/wp-content/uploads/2016/05/shutterstock_161232668.jpg",
        panel: panels[0]
    },
    {
        name: "Columbus Nerds 3",
        oneliner: "Solar for Columbus3.",
        about: "We are geeks in CBUS that want to advance solar. We buy once a year.",
        image: "https://blog.ring.com/wp-content/uploads/2016/05/shutterstock_161232668.jpg",
        panel: panels[0]
    },
]};

function groupsReducer(state = initialState, action) {
    return state;
}

export default groupsReducer;
