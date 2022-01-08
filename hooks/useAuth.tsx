import React, { useState, useEffect, useContext } from "react";
import { supabase } from "../lib/db/supabase";

type AuthContextType = {
	signUp: typeof supabase.auth.signUp,
	signIn: typeof supabase.auth.signIn,
	signOut: typeof supabase.auth.signOut,
	user: typeof supabase.auth.user,
}

const AuthContext = React.createContext<AuthContextType>({
	signUp: supabase.auth.signUp,
	signIn: supabase.auth.signIn,
	signOut: supabase.auth.signOut,
	user: null,
});

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const session = supabase.auth.session();

		const updateState = (session) => {
			setUser(session?.user ?? null);
			setLoading(false);
		}
		updateState(session);

		const { data: listener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				console.log(event);
				updateState(session);
			}
		)

		return () => {
			listener?.unsubscribe();
		}
	})

	const value = {
		signUp: (data) => supabase.auth.signUp(data),
		signIn: (data) => supabase.auth.signIn(data),
		signOut: () => supabase.auth.signOut(),
		user,
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}

export default function useAuth() {
	return useContext(AuthContext);
}

