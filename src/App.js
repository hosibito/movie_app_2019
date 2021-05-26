import React from 'react';

function Food({fav}){         //function Food(props)
  //console.log(fav);     // console.log(props.fav)
  return <h1>난 {fav}를 좋아한다.</h1>;
}


function App() {
  return (
    <div >
       <h1>안녕안녕!!!!</h1>
       <Food fav="김치" />
       <Food fav="라면" />
       <Food fav="삼겹살" />
       <Food fav="족발" />
    </div>
  );
}

export default App;
