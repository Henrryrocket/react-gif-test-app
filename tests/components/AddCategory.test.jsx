import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"


describe('Test in <AddCategory/> ', () => { 
    test('should change the value on the input box', () => { 
        //Arrange: Creamos el Sujeto de prueba
        render( <AddCategory onNewCategory={()=>{}}/> );
        //Act: Extraemos el input element
        const input = screen.getByRole('textbox');1
        //Disparamos el evento
        fireEvent.input(input, { target: { value: "Saitama" }});
        //Assert of what we expect happens
        expect( input.value ).toBe("Saitama");
        
        // screen.debug();
        
     });

     test('should call onNewCategory if the input has a value', () => { 
        const inputValue = "Saitama";
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: inputValue }});
        fireEvent.submit( form );

        expect(input.value).toBe("");
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);


        // screen.debug();
      });

      test('should not call onNewCategory if the input is empty', () => { 
        const onNewCategory = jest.fn();
        

        render( <AddCategory onNewCategory={ onNewCategory }/> );
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect(onNewCategory).toHaveBeenCalledTimes(0);

      })

 });
 