import type { TileData } from "../types/TileData"


export const generateTiles: (level: number) => TileData[] = (level) => {
    const tilesOn = level + 2
    const rows = Math.ceil(Math.sqrt(2 * tilesOn))

    const grid = Array(rows ** 2)
        .fill(null)
        .map(
            (_, index) => ({
                key: `${index}-${Math.random()}`,
                isOn: index < tilesOn
            })
        )

    return shuffle(grid)
}


const shuffle = (array: any[]) => {
    for (let right = array.length - 1; right > 0; right--) {
        const left = Math.floor(Math.random() * (right + 1));

        [array[right], array[left]] = [array[left], array[right]]
    }

    return array
}
