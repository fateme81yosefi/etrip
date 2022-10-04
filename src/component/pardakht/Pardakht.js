import "./pardakht.css";
export default function Pardakht() {
  return (
    <div className="container" style={{display:"flex",alignItem:"center",justifyContent:"center",flexDirection:"column"}}>
      <div className="row">
        <div className="col-sm-12 col-md-6 bx-container">
            <div className="bx">
              <span>پرداخت:</span>
              <span>مبلغ نهایی:</span>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 bx-container">
            <div className="bx">
              <span>مالی:</span>
              <span>مبلغ کل:</span>
              <span>تخفیف:</span>
            </div>
        </div>
      </div>
      <div className="row">
          <span>اطلاعات فردی</span>

          <div className="row">
            <div className="col-sm-12 col-md-4">
              <input className="inp-pardakht" placeholder="شماره همراه" />
            </div>
            <div className="col-sm-12 col-md-4">
              <input className="inp-pardakht" placeholder="نام" />
            </div>
            <div className="col-sm-12 col-md-4">
              <input className="inp-pardakht" placeholder="نام خانوادگی" />
            </div>
        </div>
      </div>
    </div>
  );
}
