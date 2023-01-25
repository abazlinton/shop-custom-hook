import styled from "styled-components";

const ItemImage = styled.img`
  height: 300px;
  box-shadow: 2px 2px 4px grey;
  align-self: center;
`;

export default ({ item }) => (
  <ItemImage src={require("../images/" + item.image)} alt="item" />
);
