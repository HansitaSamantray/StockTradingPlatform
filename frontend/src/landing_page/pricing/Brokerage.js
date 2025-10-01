function Brokerage() {
  return (
     <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
            <div className="col-8 p-4">
              <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage calculator</h3>
                 <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}} className="text-muted">
                  <li>Call & Trade and RMS auto-squareoff:Additional charges: Additional charges of aunty of <i class="fa fa-inr" aria-hidden="true"></i>50 + GST per order.</li>
                  <li>Digital contract notes will be sent via e-mail.</li>
                  <li>Physical copies of contract notes,if required, shall be charged <i class="fa fa-inr" aria-hidden="true"></i>20 per contract note.Courier charges apply.</li>
                  <li>For NRI account (non-PIS), 0.5% or <i class="fa fa-inr" aria-hidden="true"></i>100 per executed order of equity(whichever is real)</li>
                  <li>For NRI account (PIS), 0.5% or <i class="fa fa-inr" aria-hidden="true"></i>200 per executed order of equity(whichever is real)</li>
                  <li>If the account is in debit balance, any order placed will be charged <i class="fa fa-inr" aria-hidden="true"></i>40 executed order instead of <i class="fa fa-inr" aria-hidden="true"></i>20 per executed order</li>
                 </ul>
              </a>
            </div>
            <div className="col-4 p-4">
              <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">List of charges</h3></a>
            </div>
      </div>
     </div>
  )
}
export default Brokerage;
