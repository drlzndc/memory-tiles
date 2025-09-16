import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { texts } from '../constants/texts'

import App from '../App'
import { flashSeconds } from '../components/game/Tile'


describe('App tests', async () => {
    it('Renders the start screen correctly', () => {
        render(<App />)

        // Header with app title is rendered
        expect(screen.getAllByRole('heading')).toHaveLength(1)
        expect(screen.getByRole('heading')).toHaveTextContent(texts.appTitle)

        // Paragraph with game instructions is rendered
        expect(screen.getAllByRole('paragraph')).toHaveLength(1)
        expect(screen.getByRole('paragraph')).toHaveTextContent(texts.instructions)

        // Button to start the game is rendered
        expect(screen.getAllByRole('button')).toHaveLength(1)
        expect(screen.getByRole('button')).toHaveTextContent(texts.start)
    })

    it('Renders the game screen correctly', async () => {
        // Navigate to game screen
        render(<App />)
        await userEvent.click(screen.getByRole('button'))

        // Paragraph with current level is rendered
        expect(screen.getAllByRole('paragraph')).toHaveLength(1)
        expect(screen.getByRole('paragraph')).toHaveTextContent('Level 1')

        // Grid of size 3x3 is rendered
        expect(screen.getAllByRole('grid')).toHaveLength(1)
        expect(screen.getAllByRole('gridcell')).toHaveLength(9)

        // Wait until flashing is done and click on target tiles
        await new Promise(_ => setTimeout(_, flashSeconds * 1_000))
        for (const target of screen.getAllByRole('gridcell')) {
            if (target.dataset.isTarget === "true") {
                await userEvent.click(target)
            }
        }
        // Expect level to be increased
        expect(screen.queryByRole('paragraph')).toHaveTextContent('Level 2')
    })

    it('Renders the end screen correctly', async () => {
        // Navigate to game screen
        render(<App />)
        await userEvent.click(screen.getByRole('button'))

        // Wait until flashing is done and click on first non-target tile
        await new Promise(_ => setTimeout(_, flashSeconds * 1_000))
        for (const target of screen.getAllByRole('gridcell')) {
            if (target.dataset.isTarget === "false") {
                await userEvent.click(target)
                break
            }
        }

        // Header with game over message is rendered
        expect(screen.getAllByRole('heading')).toHaveLength(1)
        expect(screen.getByRole('heading')).toHaveTextContent(texts.gameOver)

        // Paragraph with level reached is rendered
        expect(screen.getAllByRole('paragraph')).toHaveLength(1)
        expect(screen.getByRole('paragraph')).toHaveTextContent(
            texts.levelReached.replace('{level}', '1')
        )

        // Button to play again is rendered
        expect(screen.getAllByRole('button')).toHaveLength(1)
        expect(screen.getByRole('button')).toHaveTextContent(texts.playAgain)

        // Button restarts level 1
        await userEvent.click(screen.getByRole('button'))
        expect(screen.getByRole('paragraph')).toHaveTextContent('Level 1')
        expect(screen.getAllByRole('grid')).toHaveLength(1)
        expect(screen.getAllByRole('gridcell')).toHaveLength(9)
    })
})
