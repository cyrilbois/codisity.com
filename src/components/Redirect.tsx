import React, { useEffect, useState } from "react"

export default function Redirect(destinationUrl: string) {
  const [delayed, setDelayed] = useState(false)

  useEffect(() => {
    window.location.assign(destinationUrl)
    setTimeout(() => setDelayed(true), 1000)
  }, [])

  if (delayed) {
    return (
      <div className="p-2">
        If you were not redirected automatically,&nbsp;
        <a href={destinationUrl}>please click here &raquo;</a>
      </div>
    )
  }

  return null
}
