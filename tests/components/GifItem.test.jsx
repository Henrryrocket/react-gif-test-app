import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Tests in <GifItem />', () => {
    const title = 'Test-Title';
    const url = 'https://testpage.com/test.jpg';

    test('should make match with the snapshot', () => { 
        const { container } = render( <GifItem title={ title } url={ url }/> );
        expect(container).toMatchSnapshot();
    });

    test('should show the title and url given', () => { 
        render( <GifItem title={ title } url={ url }/> );
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe( url );
        // expect(screen.getByRole('img').alt).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should show a title', () => { 
        render( <GifItem title={ title } url={ url }/> );
        expect(screen.getByText( title )).toBeTruthy();
    })
});
