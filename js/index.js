var borderstyle = '';

setInterval(() => {
    let px = document.querySelector('#borderradius').value;
    document.querySelector('#borderradiusview').innerHTML = px+'px';
    document.querySelector('#preview').style.borderRadius = document.querySelector('#borderradiusview').innerHTML;

    px = document.querySelector('#bordersize').value;
    document.querySelector('#preview').style.borderWidth = px + 'px';

    px = document.querySelector('#bordercolor').value;
    document.querySelector('#preview').style.borderColor = px;

    px = document.querySelector('#backgroundcolor').value;
    document.querySelector('#preview').style.backgroundColor = px;

    px = document.querySelector('#color').value;
    document.querySelector('#preview').style.color = px;

    px = document.querySelector('#size').value;
    if(parseInt(px) > 600)
    {
        document.querySelector('#size').value = 600;
    }
    document.querySelector('#preview').style.width = px+'px';
    document.querySelector('#preview').style.height = px+'px';
}, 10);

function select()
{
    let opt = document.querySelector('#bordertype').value;
    document.querySelector('#preview').style.border = opt;
    borderstyle = opt;
}

function check()
{
    let p1 = document.querySelector('#bordercheck1').checked;
    let p2 = document.querySelector('#bordercheck2').checked;
    let p3 = document.querySelector('#bordercheck3').checked;
    let p4 = document.querySelector('#bordercheck4').checked;
    
    if(p1)
    {
        document.querySelector('#preview').style.borderLeft = borderstyle;
    }else
    {
        document.querySelector('#preview').style.borderLeft = 'none';
    }
    if(p2)
    {
        document.querySelector('#preview').style.borderRight = borderstyle;
    }else
    {
        document.querySelector('#preview').style.borderRight = 'none';
    }
    if(p3)
    {
        document.querySelector('#preview').style.borderTop = borderstyle;
    }else
    {
        document.querySelector('#preview').style.borderTop = 'none';
    }
    if(p4)
    {
        document.querySelector('#preview').style.borderBottom = borderstyle;
    }else
    {
        document.querySelector('#preview').style.borderBottom = 'none';
    }
}