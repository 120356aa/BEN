import { useContext } from "react"
import Layout from "../components/layout/layout"
import { UserContext } from "../context/user.context"

export default function Home() {
  const { currentUser, status } = useContext(UserContext)
  
  const [user, setUser] = currentUser
  const [signInStatus, setSigninStatus] = status

  return (
    <Layout>

    </Layout>
  )
}
