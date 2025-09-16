import { useState } from 'react'

import type { Action } from '../../types/Action'

export const flashSeconds = 3

interface TileProps {
    isTarget: boolean
    onClick: Action
}

const Tile: React.FC<TileProps> = ({ isTarget, onClick }) => {
    const [isOn, setIsOn] = useState<boolean>(false)
    const background = isOn ? 'bg-tile_on' : 'bg-tile_off'

    let isClickDisabled = true
    setTimeout(() => { isClickDisabled = false }, flashSeconds * 1_000)

    const handleClick: Action = () => {
        if (isClickDisabled || isOn) {
            return
        }

        if (isTarget) {
            setIsOn(true)
        }
        onClick()
    }

    return (
        <div
            role="gridcell"
            data-is-target={isTarget ? "true" : "false"}
            className={`cursor-pointer ${background}`}
            style={isTarget ? { animation: `tile-flash ${flashSeconds}s` } : {}}
            onClick={handleClick}
        >
        </div>
    )
}

export default Tile
