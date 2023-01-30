import React from "react";
import { useFooter } from "./hooks";
import * as S from "./styles";
import {
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo,
  InstagramLogo,
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
} from "phosphor-react";

function Footer() {
  useFooter()
  return (
    <S.Container data-aos="fade-up">
      <S.Content>
        <div>
          <h2>Lake Shore</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eros. Nulla quis ante sed tortor
            efficitur facilisis.
          </p>
          <S.IconsGroup>
            <FacebookLogo size={28} color="#b8c1ec7a" />
            <TwitterLogo size={28} color="#b8c1ec7a" />
            <YoutubeLogo size={28} color="#b8c1ec7a" />
            <InstagramLogo size={28} color="#b8c1ec7a" />
          </S.IconsGroup>
        </div>
        <ul>
          <li>Catálogo</li>
          <li>Marcas</li>
          <li>FAQ</li>
          <li>Pagamento</li>
        </ul>
        <ul>
          <li>Sobre</li>
          <li>Contatos</li>
          <li>Blog</li>
          <li>Notícias</li>
        </ul>
        <ul>
          <li>
            <Phone size={24} color="#b8c1ec7a" /> 8 800 799 99 99
          </li>
          <li>
            <EnvelopeSimple size={24} color="#b8c1ec7a" /> lakeshore@gmail.com
          </li>
          <li>
            <MapPin size={24} color="#b8c1ec7a" /> St. São Paulo, Vila da Saúde 28
          </li>
          <li>
            <Clock size={24} color="#b8c1ec7a" /> Daily 10:00–22:00
          </li>
        </ul>
        <div>
          <p>Inscreva-se para atualizações</p>
          <S.Input type="email" placeholder="Seu e-mail" />
          <p>Nam quibusdam laboriosam vel quia rerum nam error exercitationem.</p>
        </div>
      </S.Content>
    </S.Container>
  );
}

export default Footer;
