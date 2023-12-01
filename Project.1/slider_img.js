let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

// start grand global brands
  let grand_global_brands = document.querySelector('.grand_global_brands .sub_grand_global');
let items_imagess = document.querySelectorAll('.grand_global_brands .sub_grand_global .items_images');
let nexts = document.getElementById('nexts');
let prevs = document.getElementById('prevs');
let doots = document.querySelectorAll('.grand_global_brands .doots li');

let lengthitems_imagess = items_imagess.length - 1;
let actives = 0;
nexts.onclick = function(){
    actives = actives + 1 <= lengthitems_imagess ? actives + 1 : 0;
    reloadgrand_global_brands();
}
prevs.onclick = function(){
    actives = actives - 1 >= 0 ? actives - 1 : lengthitems_imagess;
    reloadgrand_global_brands();
}
let mahipal = setInterval(()=> {nexts.click()}, 3000);
function reloadgrand_global_brands(){
    grand_global_brands.style.left = -items_imagess[actives].offsetLeft + 'px';
    // 
    let last_actives_dot = document.querySelector('.grand_global_brands .doots li.actives');
    last_actives_dot.classList.remove('actives');
    doots[actives].classList.add('actives');

    clearInterval(mahipal);
    mahipal = setInterval(()=> {nexts.click()}, 3000);

    
}

doots.forEach((lii, key) => {
    lii.addEventListener('click', ()=>{
         actives = key;
         reloadgrand_global_brands();
    })
})
window.onresize = function(event) {
    reloadgrand_global_brands();
};

// end gtand global brands

// clicking img
let img1=document.querySelector('#item1')
img1.addEventListener('click',function(){
    window.location.href="shirt.html"
})
let img2=document.querySelector('#item2')
img2.addEventListener('click',function(){
window.location.href="top_and_tees.html"
})
let img3=document.querySelector('#item3')
img3.addEventListener('click',function(){
    window.location.href="ovs_lc_waikiki.html"
})
let img4=document.querySelector('#item4')
img4.addEventListener('click',function(){
    window.location.href="women_accessories.html"
})
let img5=document.querySelector('#item5')
img5.addEventListener('click',function(){
    window.location.href="Mens_apparel.html"
})
let img6=document.querySelector('#item6')
img6.addEventListener('click',function(){
    window.location.href="Men_Sports_Apparel.html"
})
// let img7=document.querySelector('#item7')
// img7.addEventListener('click',function(){
//     window.location.href="shirt.html"
// })

let items_images1=document.querySelector('#items_images1')
items_images1.addEventListener('click',function(){
    
    window.location.href="footwear_women.html"
})
let items_images2=document.querySelector('#items_images2')
items_images2.addEventListener('click',function(){
    
    window.location.href="stunning_footwear_women.html"
})
let items_images3=document.querySelector('#items_images3')
items_images3.addEventListener('click',function(){
    
    window.location.href="sneakers_footwear_women.html"
})
let items_images4=document.querySelector('#items_images4')
items_images4.addEventListener('click',function(){
    
    window.location.href="calvin_klein_men.html"
})
let items_images5=document.querySelector('#items_images5')
items_images5.addEventListener('click',function(){
    
    window.location.href="gant_men.html"
})
let items_images6=document.querySelector('#items_images6')
items_images6.addEventListener('click',function(){
    
    window.location.href="antony_morato_men.html"
})
let items_images7=document.querySelector('#items_images7')
items_images7.addEventListener('click',function(){
    
    window.location.href="stylish_fits_men.html"
})
let items_images8=document.querySelector('#items_images8')
items_images8.addEventListener('click',function(){
    
    window.location.href="nautica_cloths_men.html"
})
let items_images9=document.querySelector('#items_images9')
items_images9.addEventListener('click',function(){
    window.location.href="fuck_cloths_men.html"
})

let items_images10=document.querySelector('#items_images10')
items_images10.addEventListener('click',function(){
    
    window.location.href="easy_going_styles_men.html"
})
let items_images11=document.querySelector('#items_images11')
items_images11.addEventListener('click',function(){
    
    window.location.href="easy_going_styles_men.html"
})
let items_images12=document.querySelector('#items_images12')
items_images12.addEventListener('click',function(){
    
    window.location.href="easy_going_styles_men.html"
})

// ---------------------------------

let cate_images1=document.querySelector('#cate_images1')
cate_images1.addEventListener('click',function(){
    window.location.href="ethnic_wear.html"
})

let cate_images2=document.querySelector('#cate_images2')
cate_images2.addEventListener('click',function(){
    window.location.href="fuck_cloths_men.html"
})

let cate_images3=document.querySelector('#cate_images3')
cate_images3.addEventListener('click',function(){
    window.location.href="activewear_women.html"
})

let cate_images4=document.querySelector('#cate_images4')
cate_images4.addEventListener('click',function(){
    window.location.href="Mens_apparel.html"
})

let cate_images5=document.querySelector('#cate_images5')
cate_images5.addEventListener('click',function(){
    window.location.href="western_wear_women.html"
})

let cate_images6=document.querySelector('#cate_images6')
cate_images6.addEventListener('click',function(){
    window.location.href="activewear_women.html"
})

let cate_images7=document.querySelector('#cate_images7')
cate_images7.addEventListener('click',function(){
    window.location.href="loung_wear_women.html"
})

let cate_images8=document.querySelector('#cate_images8')
cate_images8.addEventListener('click',function(){
    window.location.href="innerwear_men.html"
})

let cate_images9=document.querySelector('#cate_images9')
cate_images9.addEventListener('click',function(){
    window.location.href="lingerie_women.html"
})

let cate_images10=document.querySelector('#cate_images10')
cate_images10.addEventListener('click',function(){
    window.location.href="watches.html"
})

let cate_images11=document.querySelector('#cate_images11')
cate_images11.addEventListener('click',function(){
    window.location.href="gromming.html"
})

let cate_images12=document.querySelector('#cate_images12')
cate_images12.addEventListener('click',function(){
    window.location.href="beauty_makeup.html"
})

let cate_images13=document.querySelector('#cate_images13')
cate_images13.addEventListener('click',function(){
    window.location.href="kids_wear.html"
})

let cate_images14=document.querySelector('#cate_images14')
cate_images14.addEventListener('click',function(){
    window.location.href="sneakers_footwear_women.html"
})

let cate_images15=document.querySelector('#cate_images15')
cate_images15.addEventListener('click',function(){
    window.location.href="stunning_footwear_women.html"
})

let cate_images16=document.querySelector('#cate_images16')
cate_images16.addEventListener('click',function(){
    window.location.href="bags_belts_wallets.html"
})

let cate_images17=document.querySelector('#cate_images17')
cate_images17.addEventListener('click',function(){
    window.location.href="office_wear.html"
})

let cate_images18=document.querySelector('#cate_images18')
cate_images18.addEventListener('click',function(){
    window.location.href="ethnic_wear_men.html"
})

let cate_images19=document.querySelector('#cate_images19')
cate_images19.addEventListener('click',function(){
    window.location.href="home_decor.html"
})

let cate_images20=document.querySelector('#cate_images20')
cate_images20.addEventListener('click',function(){
    window.location.href="handbags.html"
})

let cate_images21=document.querySelector('#cate_images21')
cate_images21.addEventListener('click',function(){
    window.location.href="headphones&speakers.html"
})

let cate_images22=document.querySelector('#cate_images22')
cate_images22.addEventListener('click',function(){
    window.location.href="jewellery.html"
})

let cate_images23=document.querySelector('#cate_images23')
cate_images23.addEventListener('click',function(){
    window.location.href="plus_size_style_women.html"
})

let cate_images24=document.querySelector('#cate_images24')
cate_images24.addEventListener('click',function(){
    window.location.href="easy_going_styles_men.html"
})

let cate_images25=document.querySelector('#cate_images25')
cate_images25.addEventListener('click',function(){
    window.location.href="watches.html"
})

let cate_images26=document.querySelector('#cate_images26')
cate_images26.addEventListener('click',function(){
    window.location.href="sleepwear.html"
})

let cate_images27=document.querySelector('#cate_images27')
cate_images27.addEventListener('click',function(){
    window.location.href="office_wear.html"
})

let cate_images28=document.querySelector('#cate_images28')
cate_images28.addEventListener('click',function(){
    window.location.href="eye_wear.html"
})

let cate_images29=document.querySelector('#cate_images29')
cate_images29.addEventListener('click',function(){
    window.location.href="shirt.html"
})

let cate_images30=document.querySelector('#cate_images30')
cate_images30.addEventListener('click',function(){
    window.location.href="western_wear_women.html"
})

let cate_images31=document.querySelector('#cate_images31')
cate_images31.addEventListener('click',function(){
    window.location.href="bags.html"
})

let cate_images32=document.querySelector('#cate_images32')
cate_images32.addEventListener('click',function(){
    window.location.href="bags.html"
})

let cate_images33=document.querySelector('#cate_images33')
cate_images33.addEventListener('click',function(){
    window.location.href="flip_flops.html"
})




// login and signup

let button=document.querySelector('#button')
let Authen = localStorage.getItem('auth')
button.addEventListener('click',function(){

    if(Authen=="authorized"){
        alert("you already login")
    }
    else{
        window.location.href="login_signup.html"
    }
})