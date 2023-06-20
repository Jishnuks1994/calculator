function displayData(data){
    result.value+=data
}
function allClear(){
    result.value=""
}
function outputOper(){
    result.value= eval(result.value)
}
function backSpace(){
    result.value=result.value.slice(0,-1)
}
function openBracket(){
    result.value+="("
}
function closeBracket(){
    result.value+=")"
}