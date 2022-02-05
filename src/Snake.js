import React from 'react';

export default (props) => {
    return (
        <div>
            {props.snakeDots.map((dot, i, back) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return (
                    <div className='snake-dot-head' key={i} style={style}></div>
                )
            })}
        </div>
    )
}