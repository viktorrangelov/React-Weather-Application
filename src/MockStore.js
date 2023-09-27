// redux-mock-store.js

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk"; // If you're using Redux Thunk middleware

const middlewares = [thunk]; // Add any middleware you're using
const mockStore = configureMockStore(middlewares);

export default mockStore;
