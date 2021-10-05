
async function listallEpisode()
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
    var epi_url='https://www.breakingbadapi.com/api/'
   var result=await fetch(epi_url+'episodes')
   var jsondata=await result.json();
   console.log(jsondata)

   var outerdiv=document.createElement('div')
   outerdiv.setAttribute('class','bodydiv')
   var container=document.createElement('div')
   container.classList.add('container')
  
   var row=document.createElement('div')
   row.classList.add('row')
   
   for(var i=0;i<jsondata.length;i++)
   {
       var col1=document.createElement('div')
       col1.classList.add('col-4')
       col1.classList.add('colstyle')
      var coldiv=document.createElement('div')
      var card=document.createElement('div')
      card.classList.add('card')
      card.classList.add('cardstyle')
      var cardbody=document.createElement('div')
      cardbody.classList.add('card-body')
      cardbody.classList.add('cardbodystyle')
      var h5=document.createElement('h5')
      h5.classList.add('card-title')
      h5.innerHTML=`Episode: ${jsondata[i].episode_id}`
      var hoverdiv=document.createElement('div')
      hoverdiv.classList.add('hoverdiv')
      var para=document.createElement('p')
      para.innerHTML=`Title: ${jsondata[i].title}`
      var a1=document.createElement('a')
      var a="sucecess"
   
   a1.setAttribute('href',`episodedetail.html?id=${jsondata[i]?.episode_id}`)   
   a1.setAttribute('data-value',jsondata[i].title)
   a1.classList.add('knowmore')
   a1.classList.add('btn')
   a1.classList.add('btn-primary')
   a1.innerHTML="Know More"
       hoverdiv.append(para,a1)
      cardbody.append(h5,hoverdiv)
      card.append(cardbody)
      coldiv.append(card)
      
      col1.append(coldiv)
      row.append(col1)
   }

   container.append(row)
   outerdiv.append(container)
   document.body.append(div,outerdiv)
}
catch(error)
{
    alert('something went wrong')
    window.location.href = `index.html`;

}

}
listallEpisode();

