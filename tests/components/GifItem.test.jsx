import { render, renderHook } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Tests in <GifItem />', () => {
    const title = 'Test-Title';
    const url = 'https://testPage.com/test.jpg';

    test('should make match with the snapshot', () => { 
        const { container } = render( <GifItem title='title' url='url'/> );
        expect(container).toMatchSnapshot();
    })
});
