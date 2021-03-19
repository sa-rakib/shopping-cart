

document.getElementById("case-increment").addEventListener('click', function(){
    handleProductChange(true);
})

document.getElementById("case-decrease").addEventListener('click', function(){
    handleProductChange(false);

})

function handleProductChange (isIncrease) {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);

    let caseNewCount = 0;
    if(isIncrease == true){
        caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseCount > 0 ){
        caseNewCount = caseCount -1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = '$ '+ caseTotal;
}

























// document.getElementById("case-increment").addEventListener('click', function(){
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount *59;
//     document.getElementById("case-total").innerText = '$ '+ caseTotal;
// })

// document.getElementById("case-decrease").addEventListener('click', function(){
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = '$ '+ caseTotal;

// })





























// const addPhoneAmount = document.getElementById("addPhoneAmount");
// addPhoneAmount.addEventListener('click', function(){
//     const addPhone = document.getElementById("addPhone").value++;
//     const addAmount = document.getElementById("addAmount").innerText;
//     const addNumberAmount = parseFloat(addAmount);
//     const totalAdd = addPhone + addNumberAmount;
//     const totalAmount = totalAdd * 2;
//     document.getElementById("addAmount").innerText = totalAmount;
    
// })

// const lessPhoneAmount = document.getElementById("lessPhoneAmount");
// lessPhoneAmount.addEventListener('click', function(){
//     const addPhone = document.getElementById("addPhone").value--;
//     const addAmount = document.getElementById("addAmount").innerText;
//     const addNumberAmount = parseFloat(addAmount);
//     const totalAdd = addPhone + addNumberAmount;
//     const totalAmount = totalAdd - 1240;
//     document.getElementById("addAmount").innerText = totalAmount;
// })

