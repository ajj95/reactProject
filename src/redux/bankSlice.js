import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  banks: [],
  slips: [],
  requestWhat: ""   //banks or slips
}

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    // 전표입력 -> 파라미터로 받은 bank 가져오기
    setBanks : (state, action)=>{
      // state.banks.push(action.payload) -> 출력 안됨
      state.requestWhat = "banks";
      state.banks = [...action.payload];
    },
    // 분개내역조회 -> banks 내의 bankcode 배열 받아서 axios요청
    // async를 추가하지 않으면 map으로 slip을 출력한 뒤 slips배열에 데이터가 추가되므로
    // 비동기 처리를 위해 async를 붙여야 함!!
    //-> axios.get 요청을 Promise로 만들고 모아서 Promise.all을 사용해
    // 모든 요청이 완료될 때 한번에  state.slips 배열 업데이트
    setSlips : async (state)=>{
      state.requestWhat = "slips";
      state.slips = [];

      const slipPromises = state.banks.map(async (bank)=>{
        const bankcode = bank.bankcode;
    
        const response = await axios.get('http://localhost:3001/slipdetail');
        
        if(response.data.bankcode === bankcode){
          return response.data;
        }
        return null;
      }); //end slipPromises

      // slipPromises 배열 내의 Promise들을 비동기적으로 처리한 후 state 업데이트
      const slipData = await Promise.all(slipPromises);
      state.slips = slipData.filter((slip)=> slip!==null);

      // state를 반환해야 함
      return {...state};
    }
  }
});

export const { setBanks, setSlips } = bankSlice.actions;

export default bankSlice.reducer;