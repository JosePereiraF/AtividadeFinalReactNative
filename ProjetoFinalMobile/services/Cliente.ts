import { AxiosError, AxiosResponse } from "axios";
import { Api } from "./api";

export interface Pessoa{
    nome: string,
    telefone: string,
    email: string,
    cpf: string,
    senha: string,
}

export interface PessoaLog{
    email: string,
    senha:string,
}


export const addCliente = (newCliente:Pessoa, cep:string):Promise< AxiosResponse< Pessoa> >=>{
    return Api.post<Pessoa>("clientes/cadastrar/"+cep ,newCliente)
    .then((response:AxiosResponse<Pessoa>)=>{
        return response;
    })
    .catch((error:AxiosError)=>{
        console.error(error);
        throw error;
    })
}

export const LogCliente = (login:PessoaLog):Promise <AxiosResponse <Pessoa> >=>{
    return Api.post<Pessoa>("clientes/logar", login)
    .then((response:AxiosResponse<Pessoa>)=>{
        return response;
    })
    .catch((erro:AxiosError)=>{
        console.error(erro);
        throw erro;
    })
}