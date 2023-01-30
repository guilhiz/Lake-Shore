import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartSimple, User, MagnifyingGlass, House, PlusCircle } from "phosphor-react";
import * as S from "./styles";

function Header() {
  return (
    <S.Header>
      <S.Content>
        <Link to="/">
          <h1>LakeShore</h1>
        </Link>

        <S.IconsGroup>
          <MagnifyingGlass size={32} color="#fffffe" />
          <Link to="/">
            <House size={32} color="#fffffe" />
          </Link>
          <Link to="/new-product">
            <PlusCircle size={32} color="#fffffe" />
          </Link>
          <Link to="/sign-in">
            <User size={32} color="#fffffe" />
          </Link>
          <Link to="/cart">
            <ShoppingCartSimple size={32} color="#fffffe" />
          </Link>
        </S.IconsGroup>
      </S.Content>
    </S.Header>
  );
}

export default Header;
