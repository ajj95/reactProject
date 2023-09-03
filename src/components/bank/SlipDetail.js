import { useState } from "react";
import { useSelector } from "react-redux";
import SlipDetailTable from "./SlipDetailTable";
import ModalAccount from "../common/ModalAccount";

// redux(bankSlice)로부터 banks 가져오기
const SlipDetail = () => {

  // 전표 입력 클릭 시 -> 은행 내역 보여주기
  // 분개내역 조회 클릭 시 -> 분개 내역 보여주기

  // useSelector로 Redux의 상태를 가져올 때, 초기 상태가 아닌 경우 확인 필요
  // - setSlips 액션 실행시 비동기처리를 통해 값을 업데이트하므로
  //   slips배열이 업데이트 되기 전에 SlipDetail 컴포넌트가 렌더링 되는 경우
  //   초기 상태인 undefined 로 접근하게 되는 문제 발생
  //-> 1. banks, slips 배열이 초기 상태인 경우 처리 추가
  //   2. setSlips 액션이 완료되기 전 slips 배열 사용하지 않도록 함

  const banks = useSelector((state)=> state.bank.banks);
  const slips = useSelector((state)=> state.bank.slips);
  const requestWhat = useSelector((state)=> state.bank.requestWhat);

  //------------------ 모달 관련 ----------------------------
  // 모달창에서 클릭한 계정 객체
  const [selectedAccount, setSelectedAccount] = useState(null);

  // 모달 표시 여부
	const [showModal, setShowModal] = useState(false);

  // 모달 열기
	const openModal = () => {
		setShowModal(true);
	}

	// 모달 닫기
	const closeModal = (account) => {
		setShowModal(false);
    // 모달이 닫힐 때 선택된 계정 정보 전달
    setSelectedAccount(account);
	}

  //---------------------------------------------------------

  if(banks === undefined || slips === undefined){
    return <div>Loading...</div>;
  }

  return(
    <div>
      <SlipDetailTable>
        { requestWhat==="banks" ? 
          (banks.map((bank)=>{
            return(
              <>
                <tr>
                  <td>
                      <select className="form-select" name="sortno" aria-label="Default select example">
                        <option value="1">입금</option>
                        <option value="2">출금</option>
                        <option value="3" selected>차변</option>
                        <option value="4">대변</option>
                      </select>
                  </td>
                  <td className="button-and-input">
                    <button
                      type="button"
                      className="btn searchaccount btn-outline-dark"
                      data-bs-toggle="modal"
                      data-bs-atrget="#accountCode"
                      onClick={()=>openModal()}
                    >
                      <i class="ri-article-fill"></i>
                    </button>
                    <input 
                      type="text" 
                      className="intable" 
                      value={selectedAccount ? selectedAccount.accountno : ''} 
                    />
                  </td>
                  <td>
                    <input 
                      type="text" 
                      className="intable" 
                      value={selectedAccount ? selectedAccount.accountname : ''}/>
                  </td>
                  <td>
                    <input 
                      type="text" 
                      value={bank.plusamount!=="" ? bank.plusamount : bank.minusamount} 
                      className="intable"
                      />
                  </td>
                  <td className="cantwrite"><input type="text" className="intable cantwrite" readOnly/></td>
                  <td><input type="text" value={bank.source} className="intable" /></td>
                  <td><input type="text" className="intable" /></td>
                </tr>
                <tr>
                  <td>
                      <select className="form-select" name="sortno" aria-label="Default select example">
                      <option value="1">입금</option>
                      <option value="2">출금</option>
                      <option value="3">차변</option>
                      <option value="4" selected>대변</option>
                      </select>
                  </td>
                  <td className="button-and-input">
                    <button
                      type="button"
                      className="btn searchaccount btn-outline-dark"
                      data-bs-toggle="modal"
                      data-bs-atrget="#accountCode"
                      onClick={()=>openModal()}
                    >
                      <i class="ri-article-fill"></i>
                    </button>
                    <input type="text" className="intable" 
                      value={selectedAccount ? selectedAccount.accountno : ''} />
                  </td>
                  <td>
                    <input type="text" name="accountname" className="intable" 
                    value={selectedAccount ? selectedAccount.accountname : ''}/>
                  </td>
                  <td className="cantwrite"><input type="text" name="amount" className="intable cantwrite" readOnly/></td>
                  <td>
                    <input 
                      type="text" 
                      value={bank.plusamount!=="" ? bank.plusamount : bank.minusamount} 
                      className="intable"
                      />
                  </td>
                  <td><input type="text" value={bank.source} className="intable" /></td>
                  <td><input type="text" name="summary" className="intable" /></td>
                </tr>
              </>
            );
          })) : 
          (slips.map((slip)=>{
            return(
              <tr key={slip.slipcode}>
                <td>
                    <select className="form-select" name="sortno" aria-label="Default select example" defaultValue="3">
                      <option value="1" selected={slip.sortno==="1"}>입금</option>
                      <option value="2" selected={slip.sortno==="2"}>출금</option>
                      <option value="3" selected={slip.sortno==="3"}>차변</option>
                      <option value="4" selected={slip.sortno==="4"}>대변</option>
                    </select>
                </td>
                <td className="button-and-input">
                  <button
                    type="button"
                    className="btn searchaccount btn-outline-dark"
                    data-bs-toggle="modal"
                    data-bs-atrget="#accountCode"
                  >
                    <i class="ri-article-fill"></i>
                  </button>
                  <input type="text" className="intable" value={slip.accoutno}/>
                </td>
                <td>
                  <input type="text" className="intable" value={slip.accountname}/>
                </td>
                <td className={slip.sortno==="3" ? "" : "cantwrite"}>
                  <input 
                    type="text" 
                    value={slip.sortno==="3" ? slip.amount : ""} 
                    className={slip.sortno==="3" ? "intable" : "intable cantwrite"}
                    readOnly={slip.sortno!=="3"}
                  />
                </td>
                <td className={slip.sortno==="4" ? "" : "cantwrite"}>
                  <input 
                    type="text" 
                    value={slip.sortno==="4" ? slip.amount : ""} 
                    className={slip.sortno==="4" ? "intable" : "intable cantwrite"}
                    readOnly={slip.sortno!=="4"}
                  />
                </td>
                <td><input type="text" value={slip.source} className="intable" /></td>
                <td><input type="text" value={slip.memo} className="intable" /></td>
              </tr>
            );
          }))
        }
      </SlipDetailTable>

      { // 모달 상태에 따라 모달 렌더링
				showModal &&
				<ModalAccount
					openModal={openModal} 
					closeModal={closeModal}
          setSelectedAccount={setSelectedAccount}
				/>
			}
    </div>
  );
}

export default SlipDetail;