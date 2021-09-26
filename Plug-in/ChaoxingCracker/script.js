function Caution()
{
    var h1Replace = document.getElementsByTagName("h1");
    h1Replace[0].innerHTML = '作弊有风险，使用需谨慎';
    h1Replace[0].style.color = 'red';
    // alert("注意");
    // h1.removeEventListener
}
Caution();

function Prevent()
{
    document.body.onmouseout = function(event)
    {
        event.preventDefault();
        event.stopPropagation();
    }
}
Prevent();
