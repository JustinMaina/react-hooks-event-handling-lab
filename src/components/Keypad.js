function Keypad (){
    function handleChange () {
        console.log("Entering password...")
}
    return (
        <div>
            <input type = "password" onchange = {handleChange} />
        </div>
    )
}

export default Keypad;