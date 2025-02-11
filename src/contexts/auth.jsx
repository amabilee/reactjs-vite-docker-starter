import { AuthContext } from "./auth_context";
import React, { useState, useEffect } from "react";
import { api } from "../services/server";

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState();
    const [userLevel, setUserLevel] = useState();
    const [userToken, setUserToken] = useState();
    const [auth, setAuth] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        const verification = async () => {
            if (userToken) {
                try {
                    await api.post("", null, {
                        headers: {
                            Authorization: `Bearer ${userToken}`,
                        },
                    });
                } catch (err) {
                    signOut();
                }
            }
        };
        verification();
    }, [userToken]);

    const signIn = async (email, senha) => {
        try {
            const response = await api.post("", { email, senha }, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.data.access_token) {
                setAuth(true);
                setError("");

                const level = response.data.is_superuser ? 0 : 1;
                const token = response.data.access_token;

                setUserLevel(level);
                setUserToken(token);

                sessionStorage.setItem("user_token", JSON.stringify(token));
                sessionStorage.setItem("user_level", JSON.stringify(level));

                return true;
            } else {
                setError("Credenciais inválidas");
                return false;
            }
        } catch (err) {
            if (err.response) {
                setError('E-mail ou senha incorretos')
            } else {
                setError("Erro desconhecido. Tente novamente mais tarde.");
            }
            return false;
        }
    };

    const signOut = () => {
        setUserData({})
        setUserLevel(undefined)
        setUserToken(undefined)
        setAuth(false);
        setError("");
        sessionStorage.removeItem("user_level");
        sessionStorage.removeItem("user_token");
        sessionStorage.removeItem("user_data");
    };

    return (
        <AuthContext.Provider value={{ userData, userLevel, userToken, isAuthenticated: auth, error, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;