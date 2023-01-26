import { useState } from "react"
import { Link } from "react-router-dom"
import { api } from "../../config/api"
import * as S from "./styles"

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleChange(e) {
        e.preventDefault()
        signIn()
    }

    const signIn = async () => {
        try {
            const result = await api.post('/sign-in', { email, password })
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <S.Container>
            <S.Card>
                <S.Form onSubmit={handleChange}>
                    <S.Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required={true} />
                    <S.Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required={true} />
                    <S.ButtonSubmit>Entrar</S.ButtonSubmit>
                    <Link to="/sign-up">
                        <S.Cadastro>Primeira vez aqui? Cadastra-se!</S.Cadastro>
                    </Link>
                </S.Form>
            </S.Card>
        </S.Container>
    )
}

export default SignIn