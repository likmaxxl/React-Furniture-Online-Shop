import React from 'react'
import PropTypes from 'prop-types'
import {allProducts} from './allProducts'
import {newFurniture} from './allProducts'
import {blogContentAll} from './BlogContent'

export const UserContext=React.createContext('')

class UserProvider extends React.Component {

  state={
    blogContentAll:blogContentAll,
    allProductsData:allProducts,
    allProductsDataCopy:allProducts,
    singleProduct:'',
    furnitureNavigationLink:'bed',
    furnitureGalleryNavbarHomeText:'featured',
    linkSingleProduct:'/single-product',
    //hamburger BUTTON ANIMATION AND NAVIGATION
    hamburgerButtonAnim:'',
    mobileNavPosition:'mobileNavbar',
  mobileNavbarClass:"",
  topHeadPadding:"topHead",//scroll padding on header
theposition:window.pageYOffset,//scroll position
navbarClassOnscroll:'',//navbar and header class on scrol UP/DOWN
    singleProductCarouselImages:[],
    linkToClickedProduct:'',
    navLinkBackground:'/',
    nvigationOfSingleProduct:'',
    selectFilterByPrice:allProducts,
    itemInCart:[],
    ifClickedAddToCartBtnNotification: 0,
       banerVisible:false,
       banerNotification:(
         <div className='notification'>
           <div className="closeRel">
             <div className="closeAbs">
               <i class="fas fa-times"></i>
             </div>
           </div>
           <h6>Success</h6>
           <p>The selected item has been added to the shopping cart .</p>
         </div>
       ),
    furnitureShowItemsPerPage:12,
    selectedVal:'',
    filterByCategoriesCurrentEl:'all',
    currentPage: 1,
    todosPerPage: 12,
    currentQuantitySingleProduct:1,
    value: { min: 0, max: 1800 },
   shippingVal:105.56,
totalSum:'',
columns:true,
searchProduct:'',
searchCurrentShowedItem:'',
searchAutoSuggest:'',
searchInputOnClick:'',
linkToClickedProductSearch:'/searchPage',
likedProduct:false,
//comparePAge
compare1:'',
compare2:'',
compare3:'',
comparedProduct1:'',
comparedProduct2:'',
comparedProduct3:'',
linkToComparePage:'/comparePage',
suggestions1:'',
suggestions2:'',
suggestions3:'',
suggestions4Search:'', //search
nameOfinputValueCompare:'',
linkToContact:'/contact',
readMorePageLink:'/blogReadMore',//readMore page link on click
readMoreContentPage:'',
//contact Page Form Input Filed
firstName:'',
lastName:'',
email:'',
message:'',
details:'',
nameFormControl:'form-control',
lastNameFormControl:'form-control',
emailFormControl:'form-control',
messageFormControl:'form-control',
  };



/***NAVAR ON CHANGE CLASS SCROLL AND POSSITION ON SCROLL**/

  listenToScroll=(e) => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height

    this.setState({
      theposition: scrolled,
    })
    let thepositionFixedBr=this.state.theposition.toFixed(1)


    const window = e.currentTarget;

   if (this.prev > window.scrollY) {
       // console.log("scrolling up");
       this.setState({
         navbarClassOnscroll:"headerFromTopToBottom",
         topHeadPadding:"topHead topHeadPadding"
       })

if(this.state.theposition<0.1){
this.setState({
     topHeadPadding:"topHead"
})
}


   } else if (this.prev < window.scrollY) {
       // console.log("scrolling down");


if(this.state.theposition>=0.03){
       this.setState({
         navbarClassOnscroll:"headerFromBottomToTop"
       })
}
   }
   this.prev = window.scrollY;

  }

//TOTAL SUM IN PAGE CART (ORDER SUMMARY)
componentDidMount(){

  window.addEventListener('scroll',this.listenToScroll)


let localSt_AllProducts= localStorage.getItem('allProducts');//all products
localSt_AllProducts=JSON.parse(localSt_AllProducts)

  let localSt_products= localStorage.getItem('products');//product in cart
  localSt_products=JSON.parse(localSt_products)

  let localSt_singleProducts= localStorage.getItem('singleProduct');//single product page
  localSt_singleProducts=JSON.parse(localSt_singleProducts)

  let localSt_singleProductsImages= localStorage.getItem('singleProductImages');//single product Images
  localSt_singleProductsImages=JSON.parse(localSt_singleProductsImages)


/**COMPARE PRODUCTS**/

let localSt_comparedProduct1= localStorage.getItem('comparedProduct1');//compare product1
localSt_comparedProduct1=JSON.parse(localSt_comparedProduct1)

let localSt_comparedProduct2= localStorage.getItem('comparedProduct2');//compare product2
localSt_comparedProduct2=JSON.parse(localSt_comparedProduct2)
let localSt_comparedProduct3= localStorage.getItem('comparedProduct3');//compare product3
localSt_comparedProduct3=JSON.parse(localSt_comparedProduct3)


//readMoreContentPage
let localSt_readMoreContentPage= localStorage.getItem('readMoreContentPageStorage');//read more page from blog page
localSt_readMoreContentPage=JSON.parse(localSt_readMoreContentPage)

/**main navigation background on link* navLinkBackground*/
let localSt_navLinkBackground= localStorage.getItem('navLinkBackground');//read more page from blog page
localSt_navLinkBackground=JSON.parse(localSt_navLinkBackground)



  this.setState({
    comparedProduct1:localSt_comparedProduct1?localSt_comparedProduct1:this.state.comparedProduct1,
    comparedProduct2:localSt_comparedProduct2?localSt_comparedProduct2:this.state.comparedProduct2,
    comparedProduct3:localSt_comparedProduct3?localSt_comparedProduct3:this.state.comparedProduct3,
    singleProductCarouselImages:localSt_singleProductsImages?localSt_singleProductsImages:this.state.singleProductCarouselImages,
    allProductsData:localSt_AllProducts?localSt_AllProducts:this.state.allProductsData,
    singleProduct:localSt_singleProducts?localSt_singleProducts:this.state.singleProduct,
    totalSum:'',
    navLinkBackground:localSt_navLinkBackground?localSt_navLinkBackground:this.state.navLinkBackground,

    shippingVal:this.state.shippingVal,
    readMoreContentPage:localSt_readMoreContentPage?localSt_readMoreContentPage:this.state.readMoreContentPage, //content in read more page from blog page
    itemInCart :localSt_products?localSt_products:this.state.itemInCart,
    // currentQuantitySingleProduct:currentQuantitySingleProduct?currentQuantitySingleProduct:this.state.currentQuantitySingleProduct,
  },()=>{
})

}



//TOTAL SUM IN PAGE CART (ORDER SUMMARY)
componentDidUpdate(prevProps, prevState){

  if (prevState.itemInCart !== this.state.itemInCart || prevState.currentQuantitySingleProduct!==this.state.currentQuantitySingleProduct) {
  let xx=this.state.itemInCart.reduce( function(cnt,o){
    let total=cnt + o.price*o.quantity
     return total
   }, 0)
   this.setState({
     totalSum:xx,
     currentQuantitySingleProduct:this.state.currentQuantitySingleProduct,
shippingVal:this.state.shippingVal,


   })

 }

}
componentWillUnmount() {
  window.removeEventListener('scroll', this.listenToScroll)

}
  render () {

   const { selectFilterByPrice, currentPage, todosPerPage } = this.state;

   const indexOfLastTodo = currentPage * todosPerPage;
       const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
       const currentTodos = selectFilterByPrice.slice(indexOfFirstTodo, indexOfLastTodo);

       // Logic for displaying page numbers
          const pageNumbers = [];
          for (let i = 1; i <= Math.ceil(selectFilterByPrice.length / todosPerPage); i++) {
            pageNumbers.push(i);

          }


  return(
    <>
    <UserContext.Provider value={{
state:this.state,

pgNumbers:pageNumbers ,
currentTodos:currentTodos,

handleClick:(event)=>{

  this.setState({
    currentPage: Number(event.target.id)
  },()=>{});

},



//HOME PAGE SECTION WITH ALL FURNITURE AND NAVBAR
furnitureNavigationHendlerClick:(e)=>{

  e.preventDefault()
  let currentElementText=e.currentTarget.textContent;
  let currentElementDataIndex=e.currentTarget.getAttribute('data-index')
   this.setState({
     newFurnitureDataIndex:currentElementDataIndex,
          furnitureNavigationLink:currentElementText.toLowerCase(),
   },()=>{})

},
//TEXT IN HOMEPAGE SECTION WITH NAVBAR (FEATURED,TOP SELLER,SALE OFF,TOP RATED)
furnitureGalleryNavbarHome:(e)=>{
  e.preventDefault();
  let currentElementText=e.currentTarget.textContent.toLowerCase();
  let navIndex=e.currentTarget
this.setState({
  furnitureGalleryNavbarHomeText:currentElementText
},()=>{})

},
//SINGLE PRODUCT PAGE VIEW PRODUCT
hotDealsViewProduct:(e)=>{


let indexOfEllementHotDeals=e.target.getAttribute('data-index')-1;

let productImages=[];
let linkToClickedProducts=[];
let currentElClickedNavigation=this.state.allProductsData[indexOfEllementHotDeals].furniture

let link=currentElClickedNavigation==='bed'&&'/bedroom'||
currentElClickedNavigation==='chair'&&'/chair'||
currentElClickedNavigation==='sofa'&&'/sofa'||
currentElClickedNavigation==='table'&&'/table'||
currentElClickedNavigation==='officechair'&&'/chair'


let xx=this.state.allProductsData[indexOfEllementHotDeals]
localStorage.setItem('singleProduct', JSON.stringify(xx))
localStorage.setItem('comparedProduct1', JSON.stringify(xx))
localStorage.setItem('comparedProduct2', JSON.stringify(""))
localStorage.setItem('comparedProduct3', JSON.stringify(""))
this.setState({
singleProduct:this.state.allProductsData[indexOfEllementHotDeals]?this.state.allProductsData[indexOfEllementHotDeals]:xx,
singleProductCarouselImages:productImages,
linkToClickedProduct:link,
nvigationOfSingleProduct:this.state.allProductsData[indexOfEllementHotDeals].furniture,
searchInputValue:'',
comparedProduct1:this.state.singleProduct,
comparedProduct2:'',
comparedProduct3:'',
theposition:window.scrollTo(0, 0),

},()=>{


  let image=this.state.singleProduct.img;
  for (let i = 0; i < image.length; i++) {
      productImages.push({
        original: `${image[i]}`,
        thumbnail:`${image[i]}`
      });
      localStorage.setItem('singleProductImages', JSON.stringify(productImages))
    }


})

},

//FURNITURE PAGE SORT BY PRICE
sortPrice:(e)=>{
let selectValue=e.target.value

let allPr=[...this.state.selectFilterByPrice]
this.setState({
  selectFilterByPrice:allPr,
  selectedVal:selectValue
})

if(selectValue==='toTop'){
  allPr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
this.setState({
  selectFilterByPrice:allPr,
  selectedVal:selectValue
})
}else if(selectValue==='toLow'){
  allPr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  this.setState({
    selectFilterByPrice:allPr,
    selectedVal:selectValue
  })
}

},

//FURNITURE PAGE HOW MUCH ITEMS WILL SHOW ON PAGE
showItemsOnPage:(e)=>{
  let selectValue=e.target.value
  let selvalToNumber=parseInt(selectValue)
this.setState({
  furnitureShowItemsPerPage:selvalToNumber,
  todosPerPage:selvalToNumber
},()=>{})
},

//FURNITURE FILTER BY CATEGORIES
filterByCategories:(e)=>{
let filteredEllement
  let currentEllement=e.target.getAttribute('data-name');

if(currentEllement==='all'){
  filteredEllement=this.state.allProductsData.filter((all)=>all.price>=this.state.value.min && all.price<=this.state.value.max).map((all)=>{
       return all
     })
}else{
  filteredEllement=this.state.allProductsData.filter((all)=>all.furniture===currentEllement

  && all.price>=this.state.value.min
  && all.price<=this.state.value.max
|| all.furniture===this.state.nvigationOfSingleProduct
&& all.price>=this.state.value.min
&& all.price<=this.state.value.max
).map((all)=>{
       return all
     })
}

if(this.state.selectedVal==='toTop'){
  filteredEllement.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
this.setState({
  selectFilterByPrice:filteredEllement,

})
}else if(this.state.selectedVal==='toLow'){
  filteredEllement.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  this.setState({
    selectFilterByPrice:filteredEllement,

  })
}else{
  this.setState({
    selectFilterByPrice:this.state.allProductsData,

  },()=>{})
}

this.setState({
  selectFilterByPrice:filteredEllement,
  filterByCategoriesCurrentEl:currentEllement,

},()=>{

})


},

//HAMBURGER BUTTON ANIMATION AND MOBILE NAVBAR
hamburgerBtn:()=>{
  this.setState({
    mobileNavPosition:this.state.mobileNavPosition==="mobileNavbar"&&"mobileNavbar navToBottom"||this.state.mobileNavPosition==="mobileNavbar navToBottom"&&"mobileNavbar navToTop"|| this.state.mobileNavPosition==="mobileNavbar navToTop"&&"mobileNavbar navToBottom",
    // mobileNavPosition:this.state.mobileNavPosition==="mobileNavbar"?"mobileNavbar navToBottom":"mobileNavbar navToTop"||this.state.mobileNavPosition==="mobileNavbar navToTop"?"mobileNavbar navToBottom":"mobileNavbar navToTop"||this.state.mobileNavPosition==="mobileNavbar navToBottom"?"mobileNavbar navToTop":"mobileNavbar navToBottom",
    hamburgerButtonAnim:this.state.hamburgerButtonAnim?'':'diam',
    // mobileNavPosition:this.state.mobileNavPosition==="navToBottom"?"navToTop":"navToBottom",
  })
},

//NAVIGATION ROUTE FURNITURE CLICKED
furnitureCLick:(e)=>{
  var indexOfLink = e.target.getAttribute('data-index');
this.setState({
    hamburgerButtonAnim:'',
  mobileNavPosition:'mobileNavbar navToTop',//navToTop
  navLinkBackground:indexOfLink,
  nvigationOfSingleProduct:'',
  searchInputValue:'',
  compare1:'',
  compare2:'',
  compare3:'',
  comparedProduct1:'',
  comparedProduct2:'',
comparedProduct3:'',
searchProduct:'',
suggestions1:[],
suggestions2:[],
suggestions3:[],
suggestions4Search:[],
nameFormControl:'form-control',
lastNameFormControl:'form-control',
emailFormControl:'form-control',
messageFormControl:'form-control',
theposition:window.scrollTo(0, 0),
},()=>{
localStorage.setItem('navLinkBackground', JSON.stringify(this.state.navLinkBackground))
console.log(this.state.navLinkBackground);
})


},
//Filter Range
rangeFilter:(value)=>{

let filterRangeMinMax
if(this.state.filterByCategoriesCurrentEl==='all'){
  filterRangeMinMax=this.state.allProductsData.filter((all)=>all.price>=this.state.value.min && all.price<=this.state.value.max).map((all)=>{
    return all
  })
}else{
  let cc=[...this.state.allProductsData]
  filterRangeMinMax=cc.filter((name)=>name.furniture===this.state.filterByCategoriesCurrentEl || name.furniture===this.state.nvigationOfSingleProduct).filter((allName)=>allName.price>=this.state.value.min && allName.price<=this.state.value.max).map((all)=>{
    return all
  })
}


if(this.state.selectedVal==='toTop'){
  filterRangeMinMax.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
this.setState({
     value,
  selectFilterByPrice:filterRangeMinMax,

})
}
else if(this.state.selectedVal==='toLow'){
  filterRangeMinMax.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
this.setState({
     value,
  selectFilterByPrice:filterRangeMinMax,

})
}else{
  this.setState({
     value,
  selectFilterByPrice:filterRangeMinMax
    })

}


},

//ADD TO CART BUTTON AND ITEMS IN CART
addToCartButton:(e)=>{
  e.preventDefault()
  let currentEl=e.target.getAttribute('data-index')-1
  let thisProduct=this.state.allProductsData[currentEl]
  this.state.allProductsData[currentEl].inCart=true;
  // this.state.itemInCart[currentEl].inCart=true
  let sumAll;

localStorage.setItem('allProducts', JSON.stringify(this.state.allProductsData))
  let productsString = localStorage.getItem('products')
      let products = []
      if(productsString){
          products = JSON.parse(productsString)
      }
      products.push(thisProduct)
      localStorage.setItem('products', JSON.stringify(products))

this.setState((prev)=>{
return {

  ifClickedAddToCartBtnNotification:prev.ifClickedAddToCartBtnNotification+1,
  itemInCart:[...prev.itemInCart,thisProduct],
  banerVisible:this.state.banerVisible===false&&true,
  banerNotification:(
    <div  className='notification'>
      <div className="closeRel">
        <div className="closeAbs">
          <i onClick={closeNotificationBaner} class="fas fa-times"></i>
        </div>
      </div>
      <h6>Success</h6>
      <p>The selected item has been added to the shopping cart .</p>
    </div>
  ),

}

},()=>{

})



  let closeNotificationBaner=()=>{
    this.setState({
      banerVisible:false,
      banerNotification:''
    })
  }

setTimeout(() => {
  this.setState({
    banerVisible:false,
    banerNotification:''
  })


}, 2800);
},


//REMOVE BUTTON
removeButton:(e)=>{

let currentElement=e.target.getAttribute('data-index')
let copyItemInCart=[...this.state.itemInCart]
let currentElInAllProducts=this.state.itemInCart[currentElement].id-1





copyItemInCart.splice(currentElement,1)

this.state.allProductsData[currentElInAllProducts].inCart=false;
this.state.allProductsData[currentElInAllProducts].quantity=1;
this.state.itemInCart[currentElement].inCart=false
this.state.itemInCart[currentElement].quantity=1
let stringToNmbr=parseInt(this.state.singleProduct.quantity)
stringToNmbr=1

localStorage.setItem('products', JSON.stringify(copyItemInCart));
localStorage.setItem('allProducts', JSON.stringify(this.state.allProductsData))


this.setState({
  itemInCart:copyItemInCart,
},()=>{})

},
//DECREMENT SINGLE ITEM
decrement:(e)=>{
  e.preventDefault()
  this.setState((previus)=>{
    return {currentQuantitySingleProduct:previus.currentQuantitySingleProduct-1}
  },()=>{
    localStorage.setItem('products', JSON.stringify(this.state.itemInCart))
    localStorage.setItem('allProducts', JSON.stringify(this.state.allProductsData))
    localStorage.setItem('singleProduct', JSON.stringify(this.state.singleProduct))
  })
this.state.singleProduct.quantity--

},

//INCREMENT SINGLE ITEM
increment:(e)=>{
  e.preventDefault()
  this.setState((previus)=>{
    return {currentQuantitySingleProduct:previus.currentQuantitySingleProduct+1}
  },()=>{})
this.state.singleProduct.quantity++
localStorage.setItem('products', JSON.stringify(this.state.itemInCart))
localStorage.setItem('allProducts', JSON.stringify(this.state.allProductsData))
localStorage.setItem('singleProduct', JSON.stringify(this.state.singleProduct))

},

//SELECT QUANTITY OF ITEM IN CART
itemsInCartQuantitySelect:(e)=>{
  e.preventDefault()
  let currentElValue=e.target.value
  let currentElIndex=e.target.getAttribute('data-index')

  let strigToNumber=parseInt(currentElValue)
  let singleProd=this.state.itemInCart[currentElIndex].quantity=strigToNumber
    let currentAllElIndex=this.state.itemInCart[currentElIndex].id


  let allProdQuant=this.state.allProductsData[currentAllElIndex-1].quantity=strigToNumber





localStorage.setItem('products', JSON.stringify(this.state.itemInCart))
localStorage.setItem('allProducts', JSON.stringify(this.state.allProductsData))

this.setState({
  currentQuantitySingleProduct:strigToNumber
},()=>{})

},
//LEFT ARROW IN SINGLE ITEM PAGE
singleItemClickLeft:(e)=>{
  e.preventDefault()
  let currentElIndex=this.state.singleProduct.id-1

  if(currentElIndex<=0){
    currentElIndex=this.state.allProductsData.length
  }else if(currentElIndex===this.state.allProductsData.length){
    currentElIndex=0
  }


  currentElIndex--


  let productImages=[];



this.setState({
  singleProduct:this.state.allProductsData[currentElIndex],
  singleProductCarouselImages:productImages,
},()=>{
  let image=this.state.singleProduct.img;
  for (let i = 0; i < image.length; i++) {
      productImages.push({
        original: `${image[i]}`,
        thumbnail:`${image[i]}`
      });
    }

      localStorage.setItem('singleProduct', JSON.stringify(this.state.singleProduct))
      localStorage.setItem('singleProductImages', JSON.stringify(productImages))
})

},
//RIGHT ARROW IN SINGLE ITEM PAGE
singleItemClickRight:(e)=>{
  e.preventDefault()
  let currentElIndex=this.state.singleProduct.id-1

  if(currentElIndex<0){
    currentElIndex=this.state.allProductsData.length
  }else if(currentElIndex>=this.state.allProductsData.length-1){
    currentElIndex=0
  }
  currentElIndex++

  let productImages=[];

this.setState({
  singleProduct:this.state.allProductsData[currentElIndex],
  singleProductCarouselImages:productImages,
},()=>{
  let image=this.state.singleProduct.img;
  for (let i = 0; i < image.length; i++) {
      productImages.push({
        original: `${image[i]}`,
        thumbnail:`${image[i]}`
      });
    }
    localStorage.setItem('singleProduct', JSON.stringify(this.state.singleProduct))
    localStorage.setItem('singleProductImages', JSON.stringify(productImages))
})

},
//ITEM IN CART ON CLICK GO TO SINGLE ITEM PAGE
singleItemInCartOnClick:(e)=>{

let currentElIndex=e.target.getAttribute('data-index')-1
let currentElLink=this.state.allProductsData[currentElIndex].furniture

let link=currentElLink==='bed'&&'/bedroom'||
currentElLink==='chair'&&'/chair'||
currentElLink==='sofa'&&'/sofa'||
currentElLink==='table'&&'/table'||
currentElLink==='officechair'&&'/chair'
  let productImages=[];

this.setState({
  linkToClickedProduct:link,
  singleProduct:this.state.allProductsData[currentElIndex],
  nvigationOfSingleProduct:this.state.allProductsData[currentElIndex].furniture,
  singleProductCarouselImages:productImages,

},()=>{

  let image=this.state.singleProduct.img;
  for (let i = 0; i < image.length; i++) {
      productImages.push({
        original: `${image[i]}`,
        thumbnail:`${image[i]}`
      });
    }

  })



},
//ITEMS IN CART ORDER SUMMARY
shippingValueChange:(e)=>{
  let currentEl=e.target.value;

  this.setState({
    shippingVal:currentEl
  },()=>{})

},
//FURNITURE PAGE ON CLICK MAKE A COLUMNS
columnsProducts:(e)=>{
  e.preventDefault()

this.setState({
  columns:true,

})
},
//FURNITURE PAGE ON CLICK MAKE A GRID
gridProducts:(e)=>{
  e.preventDefault()

this.setState({
  columns:false,

})
},


//SEARCH BUTTON ON CLICK
searchIconClick:()=>{

const copyAllData=[...this.state.allProductsData]
let currentProduct=copyAllData.filter(allNames=>allNames.name===this.state.searchProduct).map((all)=>{
  return all
})
let currentElClickedNavigation
currentElClickedNavigation=currentProduct&&currentProduct.filter(allFurniture=>allFurniture.furniture===allFurniture.furniture).map((all)=>{
return all.furniture
})

this.setState(
  {
    searchCurrentShowedItem:currentProduct,
searchInputOnClick:this.state.searchProduct,
  },()=>{

    });

  },
  /********CLICKED ON HEART IN NEW PRODUCT*************/
  likeProductHeart:(e)=>{
    e.preventDefault()
    const currentIndex=e.target.getAttribute('data-index')
    this.setState({
      likedProduct:!this.state.likedProduct
    })

    this.state.allProductsData[currentIndex-1].liked=!this.state.allProductsData[currentIndex-1].liked

  },

/*******COMPARE*******/
compareSearch: (e) => {
  e.preventDefault();
  let nameInput = e.target.getAttribute('data-index');
let filtered1,filtered2,filtered3=''

  switch (nameInput) {
    case "1":


      filtered1=this.state.allProductsData.filter(allNames=>allNames.name===e.target.elements.compare1.value).map((all)=>{
        return all
      });
      this.setState({
        compare1: e.target.elements.compare1.value,
        comparedProduct1:filtered1,

},()=>{

    localStorage.setItem('comparedProduct1', JSON.stringify(this.state.comparedProduct1))
});
      break;

    case "2":
    filtered2=this.state.allProductsData.filter(allNames=>allNames.name===e.target.elements.compare2.value).map((all)=>{
      return all
    });
      this.setState({
        compare2: e.target.elements.compare2.value,
        comparedProduct2:filtered2,
        suggestions2:[]
      },()=>{
        localStorage.setItem('comparedProduct2', JSON.stringify(this.state.comparedProduct2))

      });

      break;

    case "3":
    filtered3=this.state.allProductsData.filter(allNames=>allNames.name===e.target.elements.compare3.value).map((all)=>{
      return all
    });
      this.setState({
        compare3: e.target.elements.compare3.value,
        comparedProduct3:filtered3
      },()=>{     localStorage.setItem('comparedProduct3', JSON.stringify(this.state.comparedProduct3))
});

      break;

    default:
      this.setState({
        compare1: "",
        compare2: "",
        compare3: "",
      });
  }

},

compareInput:(e)=>{
    const value = e.target.value;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let listOfProducts=''
    let listOfProductsName=''


this.setState({
  [e.target.name]:value,
  nameOfinputValueCompare:e.target.name

},()=>{


//AUTOSUGGEST
if(value.length === 0){
  this.setState({
    suggestions1:[],
    suggestions2:[],
    suggestions3:[],
    suggestions4Search:[],
    searchInputValue:[]
  },()=>{

  })
} else{
listOfProducts=this.state.allProductsData.filter(allProd =>
  allProd.name.toLowerCase().slice(0, inputLength) === inputValue);
  listOfProductsName=listOfProducts.map((all)=>{
    return all
  })

  switch (this.state.nameOfinputValueCompare) {
    case 'compare1':
    this.setState({
      suggestions1:listOfProductsName
    },()=>{

    })
      break;
      case 'compare2':
      this.setState({
        suggestions2:listOfProductsName
      },()=>{

      })
      break;
      case 'compare3':
      this.setState({
        suggestions3:listOfProductsName
      },()=>{

      })
      break;
      case 'searchProduct':
      this.setState({
        suggestions4Search:listOfProductsName
      },()=>{

      })
      break;
    default:
    this.setState({
      compare1:'',
      compare2:'',
    compare3:'',
        suggestions1:[],
        suggestions2:[],
        suggestions3:[],
        suggestions4Search:[],
    })
  }

}
})



},
selectEl:(e)=>{
  e.preventDefault()

  switch (this.state.nameOfinputValueCompare) {
    case 'compare1':
    this.setState({
    compare1:e.target.textContent,
        suggestions1:[]
    })
      break;
      case 'compare2':
      this.setState({
      compare2:e.target.textContent,
          suggestions2:[]
      })
      break;
      case 'compare3':
      this.setState({
      compare3:e.target.textContent,
          suggestions3:[]
      })
      break;
      case 'searchProduct':
      this.setState({
      searchProduct:e.target.textContent,
          suggestions4Search:[]
      })
      break;
    default:
    this.setState({
      compare1:'',
      compare2:'',
    compare3:'',
    searchProduct:'',
        suggestions1:[],
        suggestions2:[],
        suggestions3:[],
        suggestions4Search:[],

    })
  }

},

//CONTACT PAGE FORM
onChangeInputFieldForm:(e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
},
//CONTACT PAGE SUBMIT BUTTON
sendMessage:(e)=>{
  e.preventDefault()


  //FIRST NAME
    let classFormControlFirstName=''
  if(this.state.firstName=='' || !this.state.firstName.match(/^[a-zA-Z]+$/)){
classFormControlFirstName='form-control is-invalid'
}else{
  classFormControlFirstName='form-control'
}

//LAST NAME
let classFormControlLastName=''
if(this.state.lastName=='' || !this.state.lastName.match(/^[a-zA-Z]+$/)){
classFormControlLastName='form-control is-invalid'
}else{
classFormControlLastName='form-control'
}

//EMAIL
let classFormControlEmail=''
let lastAtPos = this.state.email.lastIndexOf('@');
let lastDotPos = this.state.email.lastIndexOf('.');
if (this.state.email==''|| !(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
                classFormControlEmail='form-control is-invalid'
              }else{
                classFormControlEmail='form-control'
              }

//MESSAGE
let classFormControlMessage=''
if(this.state.message==''){
classFormControlMessage='form-control is-invalid'
}else{
classFormControlMessage='form-control'
}


this.setState({
  nameFormControl:classFormControlFirstName,
  lastNameFormControl:classFormControlLastName,
  emailFormControl:classFormControlEmail,
  messageFormControl:classFormControlMessage
})


},

/**click on single blog product**/
toFilteredProduct:(e)=>{

let clickedEl=e.target.getAttribute('data-index')-1
let curentElFurniture=this.state.allProductsData[clickedEl].furniture


  // let link=curentElFurniture==='chair'&&'/chair'||
  //   curentElFurniture==='officechair'&&'/chair'||
  //   curentElFurniture==='sofa'&&'/sofa'||
  //   curentElFurniture==='table'&&'/table'||
  //   curentElFurniture==='bed'&&'/bedroom'






let filteredEllement

if(curentElFurniture){
  filteredEllement=this.state.allProductsData.filter((all)=>all.furniture===curentElFurniture).map((all)=>{
       return all
     })
     }



this.setState({
  selectFilterByPrice:filteredEllement,
  // linkToClickedProduct:link,
  nvigationOfSingleProduct:curentElFurniture,
},()=>{


})

if(this.state.linkToClickedProduct){

}
},

/**click on read more in blog page**/
readMorePageClick:(e)=>{
let currentIndex=e.target.getAttribute('data-index')
this.setState({
  readMoreContentPage:this.state.blogContentAll[currentIndex],
  theposition:window.scrollTo(0, 0),
},()=>{
   localStorage.setItem('readMoreContentPageStorage', JSON.stringify(this.state.readMoreContentPage));

})
//https://www.templatemonsterpreview.com/demo/54608.html?aff=wptemplate
}
      }}>
   {this.props.children}
    </UserContext.Provider>

    </>
  )
  }
}

export default UserProvider;
