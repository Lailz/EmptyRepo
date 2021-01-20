function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <header className="App-header"></header>
      <h1
        style={{
          color: "brown",
          marginLeft: "30%",
          marginRight: "20%",
        }}
      >
        PETSHOP
      </h1>

      <p style={{ color: "pink", marginLeft: "30%", marginRight: "20%" }}>
        Large range of Products for Pets that include Food, Accessories, Litter,
        Cages, Supplement and more at affordable prices
      </p>
      <img
        alt="Pet shop"
        style={{
          border: "10px solid #f5f5f5",

          marginLeft: "20%",
          marginRight: "20%",
          width: "500px",
        }}
        src=" https://i.ytimg.com/vi/W6O4niAicTQ/maxresdefault.jpg"
      />
    </div>
  );
}

export default App;
