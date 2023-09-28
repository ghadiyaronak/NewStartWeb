// import { GET_ALL_FAQS, GET_ALL_SECTION, SELECTED_FAQ, SELECTED_SECTION } from "../../actionTypes"
import { SELECTED_SECTION, SELECTED_FAQ, GET_ALL_SECTION_SUCCESS } from "../../actionTypes";

export const setSectionList = (_payload) => {
    return { type: GET_ALL_SECTION_SUCCESS, payload: _payload };
};

export const setSelectedSection = (_payload) => {
    return { type: SELECTED_SECTION, payload: _payload };
};