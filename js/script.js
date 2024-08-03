let secretKey = '';
    const leftKeyDisplay = document.getElementById('key-generate');
    const inputKeyDisplay = document.getElementById('display');
    const displayMessage = document.getElementById('message');

    document.getElementById('left-key-display').addEventListener('click', ()=>{
        secretKey = generateSecrateKey();
        leftKeyDisplay.textContent = secretKey;
    });

    function generateSecrateKey(){
        return Math.floor(100000 + Math.random()*900000).toString();
    }
    function appendDigit(digit){
        if(inputKeyDisplay.value.length < 6){
            inputKeyDisplay.value += digit;
        }
    }
    function deleteLastDigit(){
        inputKeyDisplay.value = inputKeyDisplay.value(0, -1);
    }
    function clearInput(){
        inputKeyDisplay.value = '';
        MessageChannel.textContent = '';
    }
    function checkKey(){
        if(inputKeyDisplay.value === secretKey){
            message.innerHTML = '<i class="bx bxs-checkbox-checked"></i><span>Secret key is matched!</span>'
        }
    }