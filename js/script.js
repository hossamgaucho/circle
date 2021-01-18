

$("#btn-calc").click(function(){

    let r = $("#radius").val();
    const pi = 3.14159;
    var answer = pi*r*r;
    if (r.includes("-")) {
        $("#text-result").text("في نص قطر بالسالب؟");
    } else {
        $("#text-result").text(answer);

    }
})
