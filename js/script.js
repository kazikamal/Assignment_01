let secretKey = ' ';
    const leftKeyDisplay = document.getElementById('key-generated');
    const inputKeyDisplay = document.getElementById('key-input');
    const displayMessage = document.getElementById('message');

    document.getElementById('key-generate').addEventListener('click', ()=>{
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
        inputKeyDisplay.value = inputKeyDisplay.value.slice(0, -1);
    }
    function clearInput(){
        inputKeyDisplay.value = '';
        MessageChannel.textContent = '';
    }
    function checkKey(){
        
        if(inputKeyDisplay.value === secretKey){
            message.innerHTML = '<i id="green-check" class="fa-sharp fa-solid fa-check fa-xl" style="color: #00e004;"></i><span>Secret key is matched!</span>'
        }
        else{
            message.innerHTML = '<div><i id="red-x" class=" fa-sharp fa-solid fa-xmark fa-xl" style="color: #ff0000;"></i><span>Secret key not matched!</span></div>'
        }
        
    }