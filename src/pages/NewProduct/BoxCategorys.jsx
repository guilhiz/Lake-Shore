
import * as S from './styles';

import { Armchair, CoatHanger, DesktopTower, Wrench } from "phosphor-react";

export default function BoxCategorys({ setCategory }) {
    return (
        <>
            <S.Title>
                O que você vai anunciar?
            </S.Title>
            <S.BoxItens>
                <S.Box onClick={() => setCategory("moveis")}>
                    <Armchair size={50} color="#232946" />
                    <p>Móveis</p>
                </S.Box>
                <S.Box onClick={() => setCategory("vestuario")}>
                    <CoatHanger size={50} color="#232946" />
                    <p>Vestuário</p>
                </S.Box>
                <S.Box onClick={() => setCategory("eletronicos")}>
                    <DesktopTower size={50} color="#232946" />
                    <p>Eletrônicos</p>
                </S.Box>
                <S.Box onClick={() => setCategory("serviços")}>
                    <Wrench size={50} color="#232946" />
                    <p>Serviços</p>
                </S.Box>
            </S.BoxItens>
        </>
    )
};