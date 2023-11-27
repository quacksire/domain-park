'use client'
import {useEffect, useState} from "react";


export default function DomainCTA() {
    const [typing, setTyping] = useState("")
    const [domain, setDomain] = useState("")
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static.cloudflareinsights.com/beacon.min.js";
        script.setAttribute('data-cf-beacon', '{"token": "f3b2a3f7e5f64d0f9f1a5e3e4d4f9d2a"}');
        document.body.appendChild(script);
    })


    useEffect(() => {
      setDomain(document.location.hostname)
    })

    // have it type out the domain name
    useEffect(() => {
      if (domain) {
        let i = 0
        const interval = setInterval(() => {
          setTyping(domain.slice(0, i))
          i++
        },
            // randomize the typing speed
            100 + Math.floor(Math.random() * 100)
            )
        return () => clearInterval(interval)
      }
    }, [domain])

    return typing


}