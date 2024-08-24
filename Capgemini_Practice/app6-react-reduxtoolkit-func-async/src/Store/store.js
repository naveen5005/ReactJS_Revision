import {configureStore} from '@reduxjs/toolkit';
import userLoginSlicer from './userLoginSlicer';

export const store = configureStore({
    reducer : userLoginSlicer
})