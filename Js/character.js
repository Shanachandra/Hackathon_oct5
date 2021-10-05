var base_url='https://www.breakingbadapi.com/api/'
async function getcharacter()
{
    try{
    var outerdiv=document.createElement('div')
    outerdiv.classList.add('outerdiv')
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
    
    outerdiv.append(headerdiv)
    document.body.append(outerdiv)
    var result=await fetch(base_url+'characters')
    var jsondata=await result.json();

    var bodydiv=document.createElement('div')
    bodydiv.classList.add('bodydiv')
    var container=document.createElement('div')
    container.classList.add('container')
    var row=document.createElement('div')
    row.classList.add('row')
    row.classList.add('justify-content-center')
    for(var i=0;i<jsondata.length;i++)
    {
        var col1=document.createElement('div')
        col1.classList.add('colstyle')
        col1.classList.add('col-lg-3')
    col1.classList.add('col-md-4')
    col1.classList.add('col-sm-6')
    col1.classList.add('col-8')
    var card1=document.createElement('div')
    card1.classList.add('card')
    card1.classList.add('char-card')
    var img1=document.createElement('img')
    img1.classList.add('imgstyle')
    img1.setAttribute('src',jsondata[i]?.img)
    card1.append(img1)
    var cardbody1=document.createElement('div')
    cardbody1.classList.add('card-body')
    cardbody1.classList.add('char-cardbody')
    var title=document.createElement('h5')
    title.classList.add('card-title')
    title.innerHTML=jsondata[i]?.name

    var para=document.createElement('p')
    para.classList.add('card-title')
    para.innerHTML="Click the below link to see the Character details"
    var a=document.createElement('a')
    
    a.setAttribute('href',`characterdetail.html?id=${jsondata[i]?.char_id}`)
    a.classList.add('btn')
    a.classList.add('btn-primary')
    a.classList.add('knowmore')
    a.innerHTML="Know More"

    cardbody1.append(title,para,a)
card1.append(cardbody1)
col1.append(card1)
row.append(col1)
    
    }
    container.append(row)
    bodydiv.append(container)
    document.body.append(bodydiv)
}
catch(error)
{
    alert('something went wrong')
    window.location.href = `index.html`;

}
}
getcharacter()