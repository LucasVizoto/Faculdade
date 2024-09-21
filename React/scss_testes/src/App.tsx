 import Button from "./components/SCSS/Button/Button";
 import Header from "./components/SCSS/Header/Header";

// import CardComponent from "./components/MUI/CardComponent";
// import Header from "./components/MUI/Header";

function App() {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  // const handleClick = () => {
  //   alert('Button clicked!');
  // };

  return (
    // USING SCSS COMPONENTS

    // npm install -D sass-embedded

     <div>
       <Header />
       <div style={{ textAlign: 'center', marginTop: '20px' }}>
       <Button label="Click Me" onClick={handleClick} />
       </div>
     </div>

//----------------------------------------------------------------

    // USING MUI COMPONENTS

    // npm install @mui/material @emotion/react @emotion/styled
    // npm install @mui/icons-material

    // <div>
    //   <Header />
    //   <CardComponent />
    // </div>

//----------------------------------------------------------------

    //USING EMOTION

    // npm install styled-components @emotion/react @emotion/styled
  
  
  );
}

export default App;
