import { Loader } from "../../components/Loader";
import { useEffect, useState } from "react";
import { styles } from "./TestLoader.css"

export function TestLoader(){
const [error, setError] = useState()
const [dataCat, setDataCat] = useState()
const [removeLoading, setRemoveLoading] = useState(false)

useEffect(() => {
  setTimeout(() => {
    const url = "https://catfact.ninja/fact"
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const json = await res.json()
        setDataCat(json)
        setRemoveLoading(true)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData()
  }, (3000))
}, [])
  return(
<div className="container-test">
{dataCat?.length > 0 && <h1>{dataCat?.fact}</h1>}
{!removeLoading && <Loader/>}
</div>
  )
}


