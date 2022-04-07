import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import {
  ContainerLogin,
  DivForm,
  TitleLogin,
  Input,
  ContainerForm,
  Botao,
  DivLogo,
  DivInfo,
  Subtitulo,
  Paragrafo,
  DivCadastrar,
  SubCadastrar,
  SignUp,
  TrocarSenha,
} from "./Login.styles";
import { loginDTO } from "../../model/LoginDTO";
import logoForm from "../../images/logo.png";
const Login = () => {
  const { handleLogin } = useContext<any>(AuthContext);
  const [pass, setPass] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("key");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <ContainerLogin>
        <Formik
          initialValues={{
            usuario: "",
            senha: "",
          }}
          onSubmit={(
            values: loginDTO,
            { setSubmitting }: FormikHelpers<loginDTO>
          ) => {
            handleLogin(values);
            setSubmitting(false);
          }}
        >
          <ContainerForm>
            <DivLogo>
              <img src={logoForm} width="84px" height="84px"></img>
              <TitleLogin>Login Vemser</TitleLogin>
            </DivLogo>
            <DivInfo>
              <Subtitulo>Log In to Dashboard Kit</Subtitulo>
              <Paragrafo>Enter your email and password below</Paragrafo>
            </DivInfo>
            <DivForm>
              <label htmlFor="usuario">Usuário</label>
              <Input
                name="usuario"
                id="usuario"
                placeholder="Digite o nome do usuário"
              />
            </DivForm>
            <DivForm>
              <label htmlFor="senha">Senha</label>
              <Input
                type={pass ? "password" : "text"}
                name="senha"
                id="senha"
                placeholder="Digite sua senha"
              />
              <TrocarSenha onClick={() => setPass(!pass)}>
                {pass ? <AiFillEyeInvisible /> : <AiFillEye />}
              </TrocarSenha>
            </DivForm>
            <Botao type="submit">Login</Botao>
            <DivCadastrar>
              <SubCadastrar>Don't have an account? </SubCadastrar>
              <SignUp>Sign up</SignUp>
            </DivCadastrar>
          </ContainerForm>
        </Formik>
      </ContainerLogin>
    </div>
  );
};

export default Login;