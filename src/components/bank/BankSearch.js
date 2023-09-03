
const BankSearch = () => {
    return(
        <div>
            <div className="listcondition">
                <div className="line">
                    <label for="inputDate" className="col-form-label labeltitle">일자</label>
                    <div className="line">
                        <input type="date" id="startdate" name="startdate" className="form-control"/>
                        ~&nbsp;<input type="date" id="enddate" name="enddate" className="form-control"/>
                    </div>
                </div>
                <div className="line">
                    <label className="labeltitle">은행&nbsp;&nbsp;</label>
                    <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        전체거래처
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="javascript:void(0);">국민은행</a></li>
                        <li><a className="dropdown-item" href="javascript:void(0);">우리은행</a></li>
                        <li><a className="dropdown-item" href="javascript:void(0);">농협은행</a></li>
                        <li><a className="dropdown-item" href="javascript:void(0);">SC제일은행</a></li>
                        <li><a className="dropdown-item" href="javascript:void(0);">KEB하나은행</a></li>
                    </ul>
                </div>
                <div className="line">
                    <label className="labeltitle">조회내용&nbsp;&nbsp;</label>
                    <div className="line">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                            <label className="form-check-label" for="gridRadios1">
                                전체
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                            <label className="form-check-label" for="gridRadios2">
                                입금
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="option"/>
                            <label className="form-check-label" for="gridRadios3">
                                출금
                            </label>
                        </div>
                    </div>
                </div>
                <div className="listconditionbtn">
                    <button type="button" id="searchHistorySlip" className="btn btn-secondary">조회</button>
                </div>
            </div>
            <input type="hidden" name="bizno" id="bizno" value="10001"/>
            <input type="hidden" name="bankname" id="bankname" value="신한은행"/>
        </div>
    );
}

export default BankSearch;