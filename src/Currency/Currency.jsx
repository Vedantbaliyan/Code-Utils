import { useState } from 'react'
import InputBox from '/src/CurrencyComponent/InputBox.jsx'
import UseCurrencyInfo from '/src/CurrencyHook/UseCurrencyInfo.js'

function App() {
  const[amount,setamount]=useState(0);
  const[from,setfrom]=useState("usd")
  const[to,setto]=useState("inr")
  const[convertedamount,setconvertedamount]=useState(0);

  const currencyinfo=UseCurrencyInfo(from);

  const options=Object.keys(currencyinfo);

  const swap=()=>{
    setfrom(to);
    setto(from);
    setconvertedamount(amount)
    setamount(convertedamount)
  }

  const convert=()=>{
    setconvertedamount(amount * currencyinfo[to])
  }
 
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(https://dvh1deh6tagwk.cloudfront.net/finder-us/wp-uploads/2015/08/Australian-dollar-to-Canadian-dollar-content-feed.jpg)`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyoptions={options}
                            // oncurrencychange={()=>(setamount(amount))}
                            oncurrencychange={(currency)=>setfrom(currency)}
                            selectcurrency={from}
                            onamountchange={(amount)=>setamount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="to"
                            amount={convertedamount}
                            currencyoptions={options}
                            oncurrencychange={(currency)=>setto(currency)}
                            selectcurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} To {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
        <p style={{color:'white' , fontSize:30,backgroundColor:'black', borderRadius:10 ,padding:8}}>All Rights Reserved @VedantBaliyan</p>
    </div>
);
}

export default App
