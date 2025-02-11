import React, { useState, useCallback, useEffect, useRef } from "react";

export default function MainComponent() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charr, setChar] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "1234567890";
    if (charr) str += "!@#$%^&*()";
    for (let i = 1; i < length; i++) {
      let ch = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ch);
    }
    setPassword(pass);
  }, [length, number, charr, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, charr, passwordGenerator]);

  const pasref=useRef(null)

  const copycontent=useCallback(()=>{
    pasref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(https://t3.ftcdn.net/jpg/06/04/74/88/360_F_604748806_gQSyPrazhAocHefqrUtieGBKK22PS5QZ.jpg)`,
      }}
    >
      <div className="bg-black text-white p-4 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Password Generator</h1>

        <div className="bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col gap-4">
          {/* Password Display */}
          <div className="flex gap-2 items-center md:flex-row flex-col">
            <input
              type="text"
              className="bg-white text-lg rounded-lg text-black p-2 flex-1"
              value={password}
              placeholder="Password"
              readOnly
              ref={pasref}
            />
            <button onClick={copycontent} className="bg-blue-500 text-white px-3 py-2 rounded-lg text-lg">
              Copy
            </button>
          </div>

          {/* Length & Options */}
          <div className="flex flex-col gap-3">
            {/* Password Length */}
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={6}
                max={30}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full"
              />
              <p className="text-lg">Length: {length}</p>
            </div>

            {/* Checkbox Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={number}
                  onChange={() => setNumber((prev) => !prev)}
                />
                <span className="text-lg">Numbers</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={charr}
                  onChange={() => setChar((prev) => !prev)}
                />
                <span className="text-lg">Characters</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
