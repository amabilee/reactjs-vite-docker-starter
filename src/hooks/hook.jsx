import { AuthContext } from "../contexts/auth_context.jsx";
import { useContext } from "react";

export function UseAuth() {
    const context = useContext(AuthContext);

    return context
}