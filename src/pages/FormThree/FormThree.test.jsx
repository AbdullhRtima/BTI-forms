import { render, screen, fireEvent, waitFor } from '@testing-library/react' // (or /dom, /vue, ...)
import FormThree from './FormThree';


describe('FormThree', () => {
    test('test basic renders', async () => {
        render(<FormThree />)
        // screen.debug();
        screen.getByText('Register you account')
        screen.getByTestId('email')
        // await waitFor(() => fireEvent.)
        expect(screen.getByRole('button')).toBeDisabled();
        await waitFor(()=> fireEvent.click(screen.getByRole('checkbox')))
        expect(screen.getByRole('button')).not.toBeDisabled();
        fireEvent.change(screen.getByTestId('email'), {target: {value: 'abd@gmail.com'}})
        expect(screen.getByTestId('email')).toHaveAttribute('value', 'abd@gmail.com')

    })
})