import React, { useState } from 'react';
import { ContainerLogin, Formulario, TituloLogin, InputCampo, BotaoEnviar } from './style';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

   
    const lidarComLogin = (event) => {
        event.preventDefault(); 
        
        
        alert(`Login realizado com sucesso!\nE-mail: ${email}`);
    };

    return (
        <ContainerLogin>
            <Formulario onSubmit={lidarComLogin}>
                <TituloLogin>Acessar o App</TituloLogin>
                
               
                <InputCampo 
                    type="email" 
                    placeholder="Digite seu e-mail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <InputCampo 
                    type="password" 
                    placeholder="Digite sua senha" 
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                <BotaoEnviar type="submit">Entrar</BotaoEnviar>
            </Formulario>
        </ContainerLogin>
    );
};

    
