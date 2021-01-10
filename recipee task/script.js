async function getdata() {
   try {
    let item = name;
    let resultname = name;   
    let recipeurl = await fetch('https://api.edamam.com/search?q=' + item + '&app_id=fdaabe22&app_key=2fc808a6b3fc97b30799371f873ef3ab')
    let recipedata = await recipeurl.json()
    builddata(recipedata);
    // console.log(recipedata);
    let result = document.getElementById('result');
    result.innerHTML = "Results For : " + resultname
          
    
   } catch(error) {
       console.log(error)
   }
    
}

getdata();

async function getdata2() {
    try {
     let item = document.getElementById("inputRecipe2").value  
     let recipeurl = await fetch('https://api.edamam.com/search?q=' + item + '&app_id=fdaabe22&app_key=2fc808a6b3fc97b30799371f873ef3ab')
     let recipedata = await recipeurl.json()
     builddata2(recipedata);
    //  console.log(recipedata);
     let result = document.getElementById('result');
     result.innerHTML = "Results For : " + item
            
       
     
    } catch(error) {
        console.log(error)
    }
     
 }
 

function searchclick() {
    if(document.getElementById("inputRecipe1").value.length > 0 ) {
       var name = document.getElementById('inputRecipe1').value;
       window.localStorage.setItem('name', name); 
       window.location = 'index2.html';
              
    } else {
        alert('Enter Recipe Name')
    }
    
    
}



function searchclick2() {
    if(document.getElementById("inputRecipe2").value.length > 0) {
      getdata2(); 
      
    } else {
        alert('Enter Recipe Name')
    }
}

function revisedRandId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

function builddata2(data) {
  let therow = document.getElementById("row");
  therow.innerHTML = "";
  data.hits.forEach((v,i) => {
    therow.append(createcard(
        v.recipe.image,
        v.recipe.label,
        v.recipe.url,
        v.recipe.calories.toFixed(),
        v.recipe.healthLabels,
        v.recipe.totalDaily.VITA_RAE.quantity.toFixed(),
        v.recipe.totalDaily.VITC.quantity.toFixed(),
        v.recipe.totalDaily.VITD.quantity.toFixed(),
        v.recipe.totalDaily.TOCPHA.quantity.toFixed(),
        v.recipe.totalDaily.VITK1.quantity.toFixed(),
        revisedRandId(),
        v.recipe.ingredientLines
        
        ))  
    
  })

}


function builddata(data) {
  let mainrow = document.getElementById("row")  
  data.hits.forEach((v,i) => {
    mainrow.append(createcard(
        v.recipe.image,
        v.recipe.label,
        v.recipe.url,
        v.recipe.calories.toFixed(),
        v.recipe.healthLabels,
        v.recipe.totalDaily.VITA_RAE.quantity.toFixed(),
        v.recipe.totalDaily.VITC.quantity.toFixed(),
        v.recipe.totalDaily.VITD.quantity.toFixed(),
        v.recipe.totalDaily.TOCPHA.quantity.toFixed(),
        v.recipe.totalDaily.VITK1.quantity.toFixed(),
        revisedRandId(),
        v.recipe.ingredientLines
        
        ))  
    
  })
  

}

function createspan(text) {
    let span = document.createElement('span');
    span.setAttribute('class','badge badge-info');
    span.innerText = text;
    return span;
}


 function createlabel(labels) {
     let h5 = document.createElement('h5');
     labels.forEach(v => {
         h5.append(createspan(v))
     }) 
     return h5;
 }

 function createli(text) {
     let li = document.createElement('li');
     li.classList.add('list-group-item');
     li.innerText = text;
     return li;
 } 

 function createul(list) {
    let ul = document.createElement('ul')
    ul.setAttribute('class','list-group list-group-flush')
    list.forEach(v => {
        ul.append(createli(v))
    })
    return ul;
 }


function createcard(src,cardtitle,url,calories,healthlabel,vitaminA,vitaminC,vitaminD,vitaminE,vitaminK,collapseexample,listarray) {
    let col = document.createElement("div");
    col.setAttribute("class","col-lg-4 col-md-4");

    let card = document.createElement("div");
    card.setAttribute('class','card mainthing')

    let img = document.createElement("img");
    img.src = src;
    img.classList.add('card-img-top');

    let cardbody = document.createElement('div');
    cardbody.setAttribute('class','card-body')

    let h5 = document.createElement('h5');
    h5.classList.add('card-title');
    // h5.innerText = cardtitle;
    
    let titlea = document.createElement('a');
    titlea.innerHTML = cardtitle;
    titlea.href = url;
    titlea.setAttribute('class','text-decoration-none text-dark')

    h5.appendChild(titlea);

    let caloriesp = document.createElement('p');
    caloriesp.classList.add('calories');

    let icon1 = document.createElement('i');
    icon1.setAttribute('class','cal-icon fas fa-fire-alt');

    let span1 = document.createElement('span')
    span1.innerText = "Calories : " + calories;
    
    caloriesp.append(icon1,span1);
    


    let healthlabels = createlabel(healthlabel);

    

    let flex1 = document.createElement('div');
    flex1.classList.add('flex1');

    let one = document.createElement('one');
    let two = document.createElement('two');
    let three = document.createElement('three');

    let vitaminp1 = document.createElement('p');
    vitaminp1.classList.add('vitamin');
    vitaminp1.innerText = "Vitamin A - " + vitaminA

    let vitaminp2 = document.createElement('p');
    vitaminp2.classList.add('vitamin');
    vitaminp2.innerText = "Vitamin C - " + vitaminC

    let vitaminp3 = document.createElement('p');
    vitaminp3.classList.add('vitamin');
    vitaminp3.innerText = "Vitamin D - " + vitaminD

    let vitaminp4 = document.createElement('p');
    vitaminp4.classList.add('vitamin');
    vitaminp4.innerText = "Vitamin E - " + vitaminE

    let vitaminp5 = document.createElement('p');
    vitaminp5.classList.add('vitamin');
    vitaminp5.innerText = "Vitamin K - " + vitaminK

    one.appendChild(vitaminp1)
    two.appendChild(vitaminp2)
    three.appendChild(vitaminp3)

    flex1.append(one,two,three)

    let flex2 = document.createElement('div');
    flex2.classList.add('flex2');

    let four = document.createElement('div');
    four.classList.add('four')

    let five = document.createElement('five')
    five.classList.add('five')

    four.appendChild(vitaminp4);
    five.appendChild(vitaminp5);

    flex2.append(four,five);

    let ingredientlist = document.createElement('div');
    ingredientlist.classList.add('ingredient-list')
    let a = document.createElement('a');
    a.id = "ingredient-list"
    a.setAttribute('class','text-decoration-none text-secondary text-center')
    a.setAttribute('data-toggle','collapse')
    a.href = '#' + collapseexample
    a.setAttribute('role','button')
    a.setAttribute('aria-expanded','false')
    a.setAttribute('aria-controls',collapseexample)

    let span2 = document.createElement('span');
    span2.innerText = 'INGREDIENT LIST'

    let icon2 = document.createElement('i');
    icon2.setAttribute('class','fas fa-utensils')
    a.append(icon2,span2)
    

    ingredientlist.append(a)

    let collapse = document.createElement('div');
    collapse.classList.add('collapse')
    collapse.id = collapseexample

    let collapsecard = document.createElement('div')
    collapsecard.setAttribute('class','collapse-card card card-body border-none');

     
    let listul = createul(listarray)
    

    collapsecard.appendChild(listul)
    collapse.appendChild(collapsecard)

    cardbody.append(h5,caloriesp,healthlabels,flex1,flex2,ingredientlist,collapse)

    card.append(img,cardbody)

    col.append(card);

    return col;


}