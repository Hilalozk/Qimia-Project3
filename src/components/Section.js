import React from 'react'

export default function Section(props){
    return(
        <section className = {props.className} id = {props.features}>
            <div className = "container-fluid">
                {props.content}
            </div>
        </section>
    )
}
