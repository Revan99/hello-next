import { useRouter } from "next/dist/client/router"

function Doc() {
  const router = useRouter()
  const {params = []} = router.query
  
  if(params.length ===2) return <h1>viewing doc for feature {params[0]} and concept {params[1]}</h1>
  
  if(params.length === 1) return <h1>viewing doc for feature {params[0]}</h1>
  
  return (
    <h1>Doc Home Page</h1>
  )
}

export default Doc