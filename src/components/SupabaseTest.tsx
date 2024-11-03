import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function SupabaseTest() {
  const [data, setData] = useState<any[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      // Replace 'your_table' with an actual table name from your Supabase database
      const { data, error } = await supabase
        .from('your_table')
        .select('*')
        .limit(5)

      if (error) {
        setError('Could not fetch data')
        console.error('Error:', error)
      } else {
        setData(data)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>Supabase Connection Test</h2>
      {error && <p>Error: {error}</p>}
      {data && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}
      {!data && !error && <p>Loading...</p>}
    </div>
  )
}

