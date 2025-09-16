import type { Action } from '../../types/Action'

import { generateTiles } from '../../helpers/GridGenerator'

import Tile from './Tile'


interface GridProps {
    level: number
    onComplete: Action
    onFail: Action
}

const Grid: React.FC<GridProps> = ({ level, onComplete, onFail }) => {
    const tiles = generateTiles(level)
    let leftToGuess = tiles.filter(tile => tile.isOn).length

    const checkTile = (position: number) => {
        if (!tiles[position].isOn) {
            return onFail()
        }

        leftToGuess--
        if (leftToGuess === 0) {
            return onComplete()
        }
    }

    return (
        <div role="grid" className="grid p-4 w-4/5 sm:w-lg aspect-square mx-auto">
            <div
                style={
                    { "--size": Math.sqrt(tiles.length) } as React.CSSProperties
                }
                className={
                    `grid gap-2 sm:gap-3 w-full h-full
                    [grid-template-columns:repeat(var(--size),minmax(0,1fr))]`
                }
            >
                {tiles.map(
                    (tile, position) => (
                        <Tile
                            key={tile.key}
                            isTarget={tile.isOn}
                            onClick={() => checkTile(position)}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default Grid
