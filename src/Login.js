import React from "react"

export default function Login(){
    const [userLogin, setUserLogin] = useState("")
const handleSubmit = (e) => {
  e.preventDefault()
  findCurrentUser(userLogin)
}
const handleChange = e => {
  setUserLogin(e.target.value)
}
}