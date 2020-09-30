export default function location(state = "Seattle , WA", action) {
  if (action.type === "CHANGE_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
} // if I get state use it or use default state
