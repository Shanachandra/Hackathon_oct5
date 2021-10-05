var base_url='https://www.breakingbadapi.com/api/'
async function HomePage()
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
    
    
    var qoute=await fetch(base_url+'quote/random')
    var quotedata=await qoute.json();
    console.log(quotedata)
    for(var q=0;q<quotedata.length;q++)
    {
        qqte.innerHTML=quotedata[q].quote+"  "+'-'+quotedata[q].author
        
        
    }
    var br=document.createElement('br')
    var br1=document.createElement('br')

    var searchdiv=document.createElement('div')   
    var search=document.createElement('input')
    search.setAttribute('id','forsearch')
    search.setAttribute('type','search')    
    search.setAttribute('style','width:30%')    
    search.setAttribute('class','search')
    search.setAttribute('placeholder','Enter a episode number to see the detail')

    
    var icon=document.createElement('a')
    icon.setAttribute('href','#')
    icon.setAttribute('onclick','chcek()')

    icon.classList.add('btn')
    icon.classList.add('btn-primary')
    var i=document.createElement('i')
    i.classList.add('fa')
    i.classList.add('fa-search')
    icon.append(i)

    searchdiv.append(search,icon)


    
    // var dropdowndiv=document.createElement('div')
    // var dropbut=document.createElement('button')
    // dropbut.classList.add('btn')
    // dropbut.classList.add('btn-secondary')
    // dropbut.classList.add('dropdown-toggle')
    // dropbut.setAttribute('type','button')
    // dropbut.setAttribute('id','dropdownMenu2')
    // dropbut.setAttribute('data-toggle','dropdown')
    // dropbut.setAttribute('aria-haspopup','true')
    // dropbut.setAttribute('aria-expanded','false')
    // dropbut.innerHTML="Characters"
    // dropdowndiv.append(dropbut)
    // var dropmenu=document.createElement('div')
    // dropmenu.classList.add('dropdown-menu')
    // dropmenu.setAttribute('aria-labelledby','dropdownMenuButton')
    // var a1=document.createElement('a')
    // a1.classList.add('dropdown-item')
    // a1.setAttribute('href','#')
    // a1.innerHTML="Episodes"
    // // var a2=document.createElement('a')
    // // a2.classList.add('dropdown-item')
    // // a2.setAttribute('href','#')
    // // var a3=document.createElement('a')
    // // a3.classList.add('dropdown-item')
    // // a3.setAttribute('href','#')
    // dropmenu.append(a1)
    // dropdowndiv.append(dropmenu)
    // var search=document.createElement('input')
    // search.setAttribute('id','searchtext')
    // search.setAttribute('type','input')
    // search.setAttribute('placeholder','Enter a character name')
    
    // headerdiv.append(h2,dropdowndiv,search)
    headerdiv.append(h2,qqte,br,br1,searchdiv)
    outerdiv.append(headerdiv)
    //cards:
    var cardouterdiv=document.createElement('div')
    cardouterdiv.setAttribute('id','bodydiv')
    cardouterdiv.classList.add('cardouterdiv')
    var container=document.createElement('div')
    container.classList.add('container')
    var row=document.createElement('row')
    row.classList.add('row')
    row.classList.add('justify-content-center')
    var col1=document.createElement('div')
    col1.classList.add('col-lg-3')
    col1.classList.add('col-md-4')
    col1.classList.add('col-sm-6')
    col1.classList.add('col-xs-3')
    var card1=document.createElement('div')
    card1.classList.add('card')
    card1.classList.add('gen-card')
    var img1=document.createElement('img')
    img1.classList.add('imgstyle')
    img1.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1024px-Breaking_Bad_logo.svg.png')
    card1.append(img1)
    var cardbody1=document.createElement('div')
    cardbody1.classList.add('card-body')
    cardbody1.classList.add('gen-cardbody')
    var title=document.createElement('h5')
    title.classList.add('card-title')
    title.innerHTML="Episodes"
    var para=document.createElement('p')
    para.classList.add('card-title')
    para.innerHTML="Click the below link to see all the episodes details"
    var a=document.createElement('a')
    
    a.setAttribute('href','episode.html')
    a.classList.add('btn')
    a.classList.add('btn-primary')
    a.classList.add('knowmore')
    a.innerHTML="Know More"

    cardbody1.append(title,para,a)
card1.append(cardbody1)
    col1.append(card1)
    
    
    var col2=document.createElement('div')
    col2.classList.add('col-lg-3')
    col2.classList.add('col-md-4')
    col2.classList.add('col-sm-6')
    col2.classList.add('col-xs-3')
    var card2=document.createElement('div')
    card2.classList.add('card')
    card2.classList.add('gen-card')
    var img2=document.createElement('img')
    img2.classList.add('imgstyle')
    img2.setAttribute('src','https://i.pinimg.com/originals/18/e6/38/18e638dd70452823570ff0aedbfb1a74.jpg')
    card2.append(img2)
    var cardbody2=document.createElement('div')
    cardbody2.classList.add('card-body')
    cardbody2.classList.add('gen-cardbody')
    var title1=document.createElement('h5')
    title1.classList.add('card-title')
    title1.innerHTML="Characters"
    var para1=document.createElement('p')
    para1.classList.add('card-title')
    para1.innerHTML="Click the below link to see all the characters details"
    var a1=document.createElement('a')
    
    a1.setAttribute('href','character.html')
    a1.classList.add('knowmore')
    a1.classList.add('btn')
    a1.classList.add('btn-primary')
    a1.innerHTML="Know More"
    cardbody2.append(title1,para1,a1)
card2.append(cardbody2)
    col2.append(card2)
    row.append(col1,col2)
    container.append(row)
    cardouterdiv.append(container)

    document.body.append(outerdiv,cardouterdiv)
}
catch(error)
{
    alert('something went wrong')
    window.location.href = `index.html`;

}
    
}
function chcek()
{
    try
    {
    var res=document.getElementById('forsearch').value
    
     var final=isNaN(res)    
     if(final==false)
     {
        window.location.href = `episodedetail.html?id=${res}`;
     }
    
    }
    catch(error)
    {
alert("sorry!! wrong episode number entered")

    }
    
}