import { collection, doc, onSnapshot } from "firebase/firestore";
import { createContext, useState, useEffect} from "react";
import { db } from "../fireBaseConnection";
import { ImageSourcePropType } from "react-native";

export interface Personal{
    id:number
    Nome:string
    Idade:string
    Especialização:string
    Imagem:string
    Bio:string
    Experiencia:string
}
// const cartContext = createContext([]);
export const[listaPersonal,setListaPersonal]= useState<Personal[]>([]);

export function carregarPersonal(){
    
    useEffect(()=>{
        const personais = onSnapshot(collection(db,"Personais"),(snapshot)=>{
            const personaisList:any= [];//sera que funciona?
            snapshot.forEach((doc)=>{
                personaisList.push({id:doc.id,...doc.data()});
            });
            setListaPersonal(personaisList);
        })
        personais();
    },[])
    
    };