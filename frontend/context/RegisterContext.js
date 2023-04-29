import React,{ createContext, useState } from "react";
import axios from 'axios';
import { BASE_URL } from "../config";

export const RegisterContext = createContext()


export const RegisterProvider = ({children}) => {

    const registerPeople = (
        nam,
        lastanme,
        borndate,
        sex,
        direction,
        telephone
    ) => {
        axios.post(`${BASE_URL}/people` ,{
            nam,
            lastanme,
            borndate,
            sex,
            direction,
            telephone
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(e => {
            console.log(`Login error ${e}`)
        })
    }


    return (
        <RegisterContext.Provider value={{
            registerPeople
        }}>
            {children}
        </RegisterContext.Provider>
    )
}