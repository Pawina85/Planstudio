import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { TiShoppingCart } from "react-icons/ti";


export default function CartLogin() {
    return (
        <section style={{
            padding: '2rem',
            backgroundColor: 'white'
        }}>
            <div style={{display: 'flex',
                alighnItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
            }}>
            <h1 style={{display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '2.5rem',
                margin: '0'}}>
                <TiShoppingCart /> 
                <span>Oder summary</span>
            </h1>
            <p>Remove all</p>
            </div>
        </section>
    )
}