import '../css/style.scss';
import '../css/reset.scss';

window.menuToggle = function()
{
    
    let dist = document.querySelector('.menu-area');

    if(dist.style.width == '100px')
    {
        dist.style.width = '0px';
    }
    else
    {
        dist.style.width = '100px';
    }
}

