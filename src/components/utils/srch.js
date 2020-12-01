export function srch(p,s)
{
    let se=s.toLowerCase();
    let ret=[];
    p.forEach(item=>{
        let x=item.title;
        let a=x.toLowerCase();
        let tit="";
        for(let i=0;i<se.length;i++)
        {
            tit+=a[i];
        }
     
        if(tit==se)
        {
            ret.push(item);
        }
    });
    return ret;
}