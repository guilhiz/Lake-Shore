import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartSimple, User, MagnifyingGlass } from "phosphor-react";
import * as S from "./styles";

function Header() {
  return (
    <S.Header>
      <S.Content>
        <h1>Lake Shore</h1>
        <S.IconsGroup>
          <MagnifyingGlass size={32} color="#fffffe" />
          <Link to="/sign-in">
            <User size={32} color="#fffffe" />
          </Link>
          <ShoppingCartSimple size={32} color="#fffffe" />
        </S.IconsGroup>
      </S.Content>
    </S.Header>
  );
}

export default Header;
