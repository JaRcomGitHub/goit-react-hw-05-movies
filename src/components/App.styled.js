import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
`;

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastListItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastName = styled.p`
  margin: 8px;
`;

export const CastCharacter = styled.p`
  margin: 8px;
`;

export const MovieCard = styled.div`
  display: flex;
  grid-gap: 16px;
`;

export const LinkGoBack = styled(NavLink)`
  display: inline-block;
  margin-bottom: 8px;
  padding: 2px 4px;
  border: 1px solid black;
  border-radius: 8px;
  text-decoration: none;
  font-size: 12px;
`;

export const SearchFormInput = styled.input`
  padding: 4px 8px;
  width: 320px;
  font-size: 16px;
  border: 1px solid grey;
`;

export const SearchFormButton = styled.button`
  padding: 4px 8px;
  font-size: 16px;
  border: 1px solid grey;
`;