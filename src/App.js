import "./App.css";

export default function App() {
  const data = [
    { name: "FREE", currency: "$", payment: "0", duaration: "/month", features:[{dot: "Single User", accept: true,},{dot: "5GB Storage", accept: true,},{dot: "Unlimited Public Projects", accept: true,},{dot: "Community Access", accept: true,},{dot: "Unlimited Private Projects", accept: false,},{dot: "Dedicated Phone Support", accept: false,},{dot: "Free Subdomain", accept: false,},{dot: "Monthly Status Reports", accept: false,}]},
    { name: "PLUS", currency: "$", payment: "9", duaration: "/month", features:[{dot: "5 Users", accept: true,},{dot: "50GB Storage", accept: true,},{dot: "Unlimited Public Projects", accept: true,},{dot: "Community Access", accept: true,},{dot: "Unlimited Private Projects", accept: true,},{dot: "Dedicated Phone Support", accept: true,},{dot: "Free Subdomain", accept: true,},{dot: "Monthly Status Reports", accept: false,}]}, 
    { name: "PRO", currency: "$", payment: "49", duaration: "/month",features:[{dot: "Unlimited User", accept: true,},{dot: "150GB Storage", accept: true,},{dot: "Unlimited Public Projects", accept: true,},{dot: "Community Access", accept: true,},{dot: "Unlimited Private Projects", accept: true,},{dot: "Dedicated Phone Support", accept: true,},{dot: "Unlimited Free Subdomain", accept: true,},{dot: "Monthly Status Reports", accept: true,}]},
  ];
  return (
    <div className="container-fluid">
       <div className="row justify-content-center mt-5">
      {data.map((table) => (
        <PriceTableTemplate {...table} />
      ))}
      </div>
    </div>
  );
}

function PriceTableTemplate({ name, currency, payment, duaration,features}) {
  return (
    <div className="col-lg-3 col-sm-5 main mx-3 mt-5 p-4">
            <div className="text-center">
            <h5 className="opacity-50 fw-bold">{name}</h5>
            <h1>{currency}{payment}<span className="fs-6">{duaration}</span></h1>
            </div>
            <hr />
            <ul>
          {features.map(({dot, accept})=> {
            return  accept ? 
            (<li><i class="fa fa-check" aria-hidden="true"></i> {dot}</li>) : (<li className="text-muted"><i class="fa fa-times" aria-hidden="true"></i> {dot}</li>)
          })}
            </ul>
            <div className="text-center">
            <button className="btn btn-primary w-100 rounded-pill fw-bold">BUTTON</button>
            </div>
    </div>
  );
}
