import { render, screen } from "@testing-library/react";
import PropTypes from "prop-types";
import { GifGrid } from "../../src/components";


describe('Tests in <GifGrid/>', () => {
    const category = 'One Punch';
    test('should show loading message first', () => { 

        render(<GifGrid category={category}/>);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

     })
});

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}