import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const NavigationLink = styled(Link)`
  color: green;
`