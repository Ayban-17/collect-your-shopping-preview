import { useState } from "react"

const useFetchContents = () => {
    const [contents, setContents] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const getContents = async (language) => {
        try {
            const result = await fetch(`/locales/${language}/common.json`);
            const data = await result.json();
            setContents(data)
          } catch (error) {
            setError(error)
          } finally{
            setLoading(false)
          }
    }
    return {contents, loading, error, getContents};
}

export default useFetchContents;


