function inc()
{
    var num = Number(document.getElementById("number").innerHTML)
    document.getElementById("number").innerHTML = num+1
}
function dec()
{
    var num = Number(document.getElementById("number").innerHTML)
    document.getElementById("number").innerHTML = num-1
}
function neu()
{
    document.getElementById("number").innerHTML = 0
}