function check() {
    var day = document.getElementById('day').value 
    var month = document.getElementById('month').value
    if(day >31 && month >12){
        document.getElementById("text").innerHTML = '<div class="alert alert-danger">địt mẹ mày, dám lừa bố  à</div>'
        
    }else if(day <=31 && month <=12){
        document.getElementById("text").innerHTML = '<div class="alert alert-danger">có phải sinh nhat của mi là ngày' +day+'/'+ month+' không, mi có thấy tau giỏi không'+'</div>'
    }
   

}