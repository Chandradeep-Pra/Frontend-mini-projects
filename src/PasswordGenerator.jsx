import { useState, useCallback,useEffect, useRef } from 'react'

function PasswordGenerator() {
    const [length, setLength] = useState(6)
    const [numPres, setNumPres] = useState(false)
    const [charPres, setCharPres] = useState(false)
    const [password, setPassword] = useState("")

//ref hook
    const passRef = useRef(null);

    const passGenerator = useCallback(() => {
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (numPres) { str+="012346789" }
        if (charPres) { str+="!@#$%^&*()_+}{|?><[]" }
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass+=str.charAt(char)
        }
        setPassword(pass)
    }, [length, numPres, charPres, setPassword])

    const copyPassToBoard = useCallback(() =>{
        passRef.current?.select();
        //passRef.current?.setSelectionRange(0,5)
        window.navigator.clipboard.writeText(password);
    },[password])
    useEffect(()=>{
        passGenerator()
    },[length,numPres,charPres,passGenerator])
    return (
        <>
            <h1 className='text-3xl text-black'>Passowrd Generator</h1>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg  my-4   text-red-900 text-xl bg-white'>
                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                    <input
                        type='text'
                        value={password}
                        className='outline-none w-full py-1 px-3 text-2xl'
                        placeholder='Password'
                        ref={passRef}
                        readOnly
                    />
                    <button className='outline-none bg-red-900 text-white px-5 py-0.5 shrink-0' onClick={copyPassToBoard}>copy</button>
                </div>
                <div className='flex text-sm gap-x-2 px-2 py-2'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="range"
                            min={6}
                            max={40}
                            value={length}
                            className='cursor-pointer color-red-800'
                            onChange={(e) => setLength(e.target.value)}
                        />
                        <label className='ml-2 '>Length : {length} |</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={numPres}
                            id='numPres'
                            onChange={() => setNumPres(!numPres)}
                        />
                        <label className='ml-2'>Numbers |</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={charPres}
                            id='charPres'
                            onChange={() => setCharPres(!charPres)}
                        />
                        <label className='ml-2'>Charaters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGenerator