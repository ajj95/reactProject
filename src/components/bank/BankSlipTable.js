// 파라미터로 bankslip 데이터와 사용자가 클릭한 탭(=상태명) 정보를 받아서
// 출력할 때 상태가 탭 정보와 일치하는 bankslip만 출력한다.
const BankSlipTable = ({slips, activeTab}) => {

    let filteredSlips = null;

    if(activeTab==='canslip'){
        filteredSlips = slips.filter((slip)=>slip.state==='확정가능');
    }else if(activeTab==='confirmslip'){
        filteredSlips = slips.filter((slip)=>slip.state==='확정');
    }else if(activeTab==='exceptslip'){
        filteredSlips = slips.filter((slip)=>slip.state==='제외');
    }else if(activeTab==='removeslip'){
        filteredSlips = slips.filter((slip)=>slip.state==='삭제');
    }else{
        filteredSlips = slips;
    }


    return(
        <div>
            <table id="banksliptableAll" className="banksliptable table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col" className="tabletop">
                        <input className="form-check-input" type="checkbox" />
                        </th>
                        <th scope="col" className="tabletop">
                        거래처명
                        </th>
                        <th scope="col" className="tabletop">
                        전표적요
                        </th>
                        <th scope="col" className="tabletop">
                        상대계정
                        </th>
                        <th scope="col" className="tabletop">
                        상태
                        </th>
                        <th scope="col" className="tabletop">
                        예상잔액
                        </th>
                    </tr>
                    </thead>
                <tbody>
                    {
                        filteredSlips.map((slip)=>{
                                return(
                                    <tr key={slip.slipcode}>
                                        <td>
                                            <input className="form-check-input" type="checkbox"/>
                                        </td>
                                        <td>{slip.source}</td>
                                        <td>{slip.memo}</td>
                                        <td>{slip.account}</td>
                                        <td style={{ color: slip.state === '확정가능' ? '#198754' 
                                        : slip.state === '확정' ? '#4169E1' 
                                        : slip.state === '제외' ? '#ffab00' 
                                        : 'inherit' }}>
                                            {slip.state}
                                        </td>
                                        <td>{slip.total}</td>
                                    </tr>
                                )
                            })
                    }
                    <tr>
                        <td class="total"></td>
                        <td class="total"><strong>합계</strong></td>
                        <td class="total" colspan="4">
                            잔액: 234,234&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{color: "red"}}>차액: 100,000</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            { activeTab==='allslip' && 
                <button type="button" id="detailslipshow" className="btn btn-light btnmarginright">
                    분개내역조회
                </button> }
            { activeTab==='canslip' &&
                <div>
                    <button type="button" id="certainslip" class="btn btn-light btnmarginright">확정</button>
                    <button type="button" id="detailslipshow" class="btn btn-light btnmarginright">분개내역조회</button>
                    <button type="button" id="exceptslip" class="btn btn-light btnmarginright">제외</button>
                    <button type="button" id="removeslip" class="btn btn-light btnmarginright">삭제</button>
                </div> }
            { activeTab==='confirmslip' &&
                <div>
                    <button type="button" id="cancelcertainslip" class="btn btn-light btnmarginright">확정취소</button>
                    <button type="button" id="detailslipshow" class="btn btn-light btnmarginright">분개내역조회</button>
                </div> }
            { activeTab==='exceptslip' &&
                <div>
                    <button type="button" id="cancelexceptslip" class="btn btn-light btnmarginright">제외취소</button>
                    <button type="button" id="detailslipshow" class="btn btn-light btnmarginright">분개내역조회</button>
                </div> }
            { activeTab==='removeslip' &&
            <div>
                <button type="button" id="cancelremoveslip" class="btn btn-light btnmarginright">삭제취소</button>
                <button type="button" id="detailslipshow" class="btn btn-light btnmarginright">분개내역조회</button>
            </div> }
        </div>
    );
}

export default BankSlipTable;