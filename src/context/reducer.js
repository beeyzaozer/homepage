export default function reducer(state, e) {
    switch (e.action) {
        case "SET_DATA":
            return e.payload;
        default:
            return state;
    }
}