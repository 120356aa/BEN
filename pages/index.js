import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { UserContext } from "../context/user.context"
import Landing from '../components/landing'

export default function Index() {
  const router = useRouter()

  const { status } = useContext(UserContext)
  const [ signInStatus ] = status

  useEffect(() => {( signInStatus ? router.push('/home') : null )}, [])

  return <Landing />
}
