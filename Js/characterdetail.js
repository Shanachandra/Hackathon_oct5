

async function chardata()
{
    try{
    var div=document.createElement('div')
    div.classList.add('outerdiv')
    var headerdiv=document.createElement('div')
    headerdiv.classList.add('header-div')
    var h2=document.createElement('h2')
    h2.innerHTML='BREAKING BAD'
    var qqte=document.createElement('span')
    qqte.classList.add('quote') 
    var charqt_url='https://www.breakingbadapi.com/api/'
    var qoute=await fetch(charqt_url+'quote/random')
    var quotedata=await qoute.json();
    console.log(quotedata)
    for(var q=0;q<quotedata.length;q++)
    {
        qqte.innerHTML=quotedata[q].quote+"  "+'-'+quotedata[q].author      
    }
    
    headerdiv.append(h2,qqte)
    div.append(headerdiv)
    var res=window.location.search.split('=')
    var id=res[1] 
    var char_url='https://www.breakingbadapi.com/api/characters/'
    var result=await fetch(char_url+id)
   var jsondata=await result.json();
   var iddiv=document.createElement('div')
   iddiv.classList.add('iddiv')
   var container=document.createElement('div')
   container.classList.add('container')
   var row=document.createElement('div')
   row.classList.add('row')
   row.classList.add('justify-content-center')
  
   for(var i=0;i<jsondata.length;i++)
   {
    var col1=document.createElement('div')
    
    col1.classList.add('col-lg-4')
    col1.classList.add('col-md-6')
    col1.classList.add('col-sm-4')
    col1.classList.add('col-4')
    var imgid=document.createElement('img')
    imgid.classList.add('imgid')
    imgid.setAttribute('src',jsondata[i].img)
    col1.append(imgid)
    var col2=document.createElement('div')
    col2.classList.add('col-lg-6')
    col2.classList.add('col-md-6')
    col2.classList.add('col-sm-4')
    var contentid=document.createElement('div')
    var h3=document.createElement('h3')
    h3.innerHTML=`Name: ${jsondata[i]?.name}`
    var Nickname=document.createElement('p')
    Nickname.classList.add('Nickname')
    Nickname.innerHTML=`<b>Nickname</b>:  ${jsondata[i]?.nickname}`
    var Category=document.createElement('p')
    Category.classList.add('Category')
    Category.innerHTML=`<b>Category</b>: ${jsondata[i]?.category}`
    var Portrayed=document.createElement('p')
    Portrayed.classList.add('Portrayed')
    Portrayed.innerHTML=`<b>Portrayed</b>: ${jsondata[i]?.portrayed}`
    var apperance=document.createElement('p')
    apperance.innerHTML=`<b>Appearance</b>: ${jsondata[i].appearance}`
 
    var occupation=document.createElement('div')
    occupation.innerHTML="<b>Occupation</b>:"
    var ul=document.createElement('ul')
    ul.classList.add('ulstyle')


    for(var j=0;j<jsondata[i]?.occupation?.length;j++)
    {
        
        var li=document.createElement('li')
        li.innerHTML=jsondata[i].occupation[j]
        ul.append(li)

    }
    occupation.append(ul)
    contentid.append(h3,Nickname,Category,Portrayed,apperance,occupation)
   }
  
   col2.append(contentid)
   row.append(col1,col2)
   container.append(row)
   iddiv.append(container)
   document.body.append(headerdiv, iddiv)
   console.log(jsondata)
}
catch(error)
{
    alert('something went wrong')
    window.location.href = `index.html`;

}
}

