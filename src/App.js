import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Thang",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: "Trinh",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: "Xinh",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: "Nhàn",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: "Hoàng",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    }
  ];
  return (
    <div className="categories-container">
      {categories.map((el) => (
        <div className="category-container" key={el.id}>
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${el.imageUrl})`
            }}
          />
          <div className="category-body-container">
            <h2>{el.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
