import * as React from 'react'
import type { Session, User } from '@supabase/supabase-js'

export type AuthContextData = { user?: User; session?: Session }
export const AuthContext = React.createContext<AuthContextData>({})
export const useAuth = () => React.useContext(AuthContext)
