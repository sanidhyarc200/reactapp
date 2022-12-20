import AppV1CC from "./props";

const cardContainer = {
  display: "flex",
  gap: 12,
  justifyContent: "space-between",
  alignItems: "center",
};

const container = {
  padding: 12,
  backgroundColor: "#e9e9e9",
};
const AppV1 = () => {
  return (
    <div style={container}>
      <p>Hello Component</p>
      <div style={cardContainer}>
        <AppV1CC name="Saurav" city="Mumbai" />
        <AppV1CC name="Sanidhya" />
        <AppV1CC name="Hareesh" city="Bangalore" />
        <AppV1CC name="Pragati" city= "jaora"/>
      </div>
    </div>
  );
};

export default AppV1;
