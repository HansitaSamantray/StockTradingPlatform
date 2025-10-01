import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p className='mt-3 text-muted'>Modern platforms and apps, <i class="fa fa-inr" aria-hidden="true"></i>0 investemnts, and flat <i class="fa fa-inr" aria-hidden="true"></i>20 intraday and F&O trades</p>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={{width:"20%", margin:"0 auto"}}>Sign up Now</button>
            </div>
        </div>
     );
}

export default OpenAccount;