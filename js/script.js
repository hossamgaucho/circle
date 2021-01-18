$("#btn-calc").click(function(){
    let r = $("#radius").val();
    let rr = r*r;
    const pi = 3.1415926535898;
    let answer = pi*rr;
    $("#text-result").text(answer);
})