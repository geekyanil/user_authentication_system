import { useEffect } from 'react'
import { useAuth } from '../store/auth'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {
    const { LogoutUser } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        LogoutUser()
    }, [LogoutUser])
    return navigate('/login')
}

