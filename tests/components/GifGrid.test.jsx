import { render, screen } from "@testing-library/react";
import PropTypes from "prop-types";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')


describe('Tests in <GifGrid/>', () => {
    const category = 'One Punch';
    test('should show loading message first', () => { 
        //Simulate the firts stage when there are not data yet
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category}/>);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

     })

     test('should load images from useFetchGifs', () => { 

        //Sujeto de prueba
        const gifs = [
            {
                id: 'ABC1',
                title: 'image1',
                url: 'https://testurl.com/image2.jpg'
            },
            {
                id: 'ABC2',
                title: 'image2',
                url: 'https://testurl.com/image2.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);

     });
});

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}