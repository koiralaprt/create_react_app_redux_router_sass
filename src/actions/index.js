import { SOME_CONSTANT } from "../constants";  // constants haru import

//  if data api bata tanne orne chha vaney api folder ma paila functions banaune,(code ali clean huncha) then import here and do it like below example
// import {getData} from '../api/index'

export function populateData(){
  return dispatch=>{
    dispatch({type:SOME_CONSTANT,payload: [{value:'aaaa'},{value:'bbbb'}]})
  }
}