import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../config/api"
import { AuthContext } from "../../contexts/auth/AuthContext"
import * as S from "./styles"

function SignIn() {
    const { saveTokenAndUserId } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleChange(e) {
        e.preventDefault()
        signIn()
    }

    const signIn = async () => {
        try {
            const result = await api.post('/sign-in', { email, password })
            saveTokenAndUserId(result.data)
            navigate("/")
        } catch (error) {
            alert("Os dados estão incorretos!")
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