import * as types from './../../constants/actionTypes';

const initialState = {
    courseList : [],
    courseCategoryList: [],
    courseDetail: [],
    courseByCategory: []
}

const courseReducer = (state = initialState , action) =>{
    switch(action.type){
        case types.GET_COURSE_CATEGORY:
            state.courseCategoryList = action.courseCategoryList;
            return {...state};
        case types.GET_COURSE_LIST:
            state.courseList = action.courseList;
            return {...state}
        case types.GET_COURSE_BY_CATEGORY:
            state.courseByCategory = action.courseByCategory;
            return {...state}
        default: return {...state}
    }
}

export default courseReducer;