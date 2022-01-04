import { combineReducers } from "@reduxjs/toolkit";

import savedList from "./savedList";

const pages = combineReducers({ savedList: savedList });

export default pages;
