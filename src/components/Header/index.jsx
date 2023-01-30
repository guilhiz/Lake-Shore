import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartSimple, User, MagnifyingGlass, House, PlusCircle } from "phosphor-react";
import * as S from "./styles";

function Header() {
  return (
    <S.Header>
      <S.Content>
        <Link to="/">

          <h1>Lake Shore</h1>
        </Link>

        <S.IconsGroup>
          <MagnifyingGlass size={32} color="#b8c1ec" />
          <Link to="/">
            <House size={32} color="#b8c1ec" />
          </Link>
          <Link to="/new-product">
            <PlusCircle size={32} color="#b8c1ec" />
          </Link>
          <Link to="/sign-in">
            <User size={32} color="#b8c1ec" />
          </Link>
          <Link to="/cart">
            <ShoppingCartSimple size={32} color="#b8c1ec" />
          </Link>
        </S.IconsGroup>
      </S.Content>
    </S.Header>
  );
}

export default Header;
