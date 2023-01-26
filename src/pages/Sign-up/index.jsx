import { useState } from "react"
import { Link } from "react-router-dom"
import { api } from "../../config/api"
import * as S from "./styles"

function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleChange(e) {
        e.preventDefault()
        signUp()
    }

    const signUp = async () => {
        try {
            const result = await api.post('/sign-up', {name, email, password, confirmPassword})
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <S.Container>
            <S.Card>
                <S.Form onSubmit={handleChange}>
                    <S.Input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required={true} />
                    <S.Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required={true} autoComplete='off' />
                    <S.Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required={true} autoComplete='new-password' />
                    <S.Input type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required={true} />
                    <S.ButtonSubmit>Criar conta</S.ButtonSubmit>
                    <Link to="/sign-in">
                        <S.Login>Já tem conta? Entre</S.Login>
                    </Link>
                </S.Form>
            </S.Card>
        </S.Container>
    )
}

export default SignUp