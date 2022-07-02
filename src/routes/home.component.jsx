import Directory from "../components/directory/directory.component";
const Home = () => {
  console.log("context");
  const categories = [
    {
      id: 1,
      title: "Thang",
      imageUrl: "https://i.ibb.co/JBCC0X7/my-love-tyt.jpg"
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
  return <Directory categories={categories} />;
};

export default Home;
