

async function test()
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
    var epi_detail_url='https://www.breakingbadapi.com/api/episodes/'
    var result=await fetch(epi_detail_url+id)
   var jsondata=await result.json();
   var iddiv=document.createElement('div')
   iddiv.classList.add('iddiv')
   var container=document.createElement('div')
   container.classList.add('container')
   var row=document.createElement('div')
   row.classList.add('row')
   row.classList.add('justify-content-center')
   var col1=document.createElement('div')
   col1.classList.add('col-lg-3')
   col1.classList.add('col-md-3')
   col1.classList.add('col-sm-4')
   var imgid=document.createElement('img')
   imgid.classList.add('imgid')
   imgid.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1024px-Breaking_Bad_logo.svg.png')
   col1.append(imgid)
   var col2=document.createElement('div')
   col2.classList.add('col-lg-4')
   col2.classList.add('col-md-6')
   col2.classList.add('col-sm-4')
  if(jsondata.length==0)
  {
      throw('wrong')
  }
   for(var i=0;i<jsondata.length;i++)
   {
    var contentid=document.createElement('div')
    var h3=document.createElement('h3')
    h3.innerHTML=`Title: ${jsondata[i]?.title}`
    var Season=document.createElement('p')
    Season.classList.add('season')
    Season.innerHTML=`<b>Season</b>:  ${jsondata[i]?.season}`
    var Episode=document.createElement('p')
    Episode.classList.add('Episode')
    Episode.innerHTML=`<b>Episode</b>: ${jsondata[i]?.episode_id}`
    var AirDate=document.createElement('p')
    AirDate.classList.add('AirDate')
    AirDate.innerHTML=`<b>Air Date</b>: ${jsondata[i]?.air_date}`
    var Characters=document.createElement('div')
    Characters.innerHTML="<b>Characters</b>:"
    var ul=document.createElement('ul')
    ul.classList.add('ulstyle')


    for(var j=0;j<jsondata[i]?.characters?.length;j++)
    {
        
        var li=document.createElement('li')
        li.innerHTML=jsondata[i].characters[j]
        ul.append(li)

    }
    Characters.append(ul)
    contentid.append(h3,Season,Episode,AirDate,Characters)
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
    alert('Sorry!!! wrong episode number entered')
    window.location.href = `index.html`;
}
}

