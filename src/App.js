import React from 'react';

const foodILike = [
  {
    id:1,
    name: "김치",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id:2,
    name: "삼겹살",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id:3,
    name: "비빔밥",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id:4,
    name: "돈까스",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id:5,
    name: "김밥",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

// function renderFood(dish){  
//   return <Food fav={dish.name} picture={dish.image}/> 
// }


function Food({name , picture }){         
  return <div>
        <h2>난 {name}를 좋아한다.</h2>
        <img src={picture} alt={name}/>
    </div>;
}


function App() {
  return (
    <div >
       <h1>안녕안녕!!!!</h1>
       {/* { foodILike.map( renderFood ) } */}
       { foodILike.map( (dish) => <Food key={dish.id} fav={dish.name} picture={dish.image}/> ) }        
    </div>
  );
}

export default App;
