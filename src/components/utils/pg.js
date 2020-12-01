
export function paginate(posts,currPage,itemsPerPage,totalItems)
{
   const arr=[...posts];
   let i= (currPage-1)*itemsPerPage;
   let res=[];
   for(let j=0;j<itemsPerPage && i+j<=totalItems-1 ;j++)
   {
       res[j]=arr[i+j];
   }
   return res;
}