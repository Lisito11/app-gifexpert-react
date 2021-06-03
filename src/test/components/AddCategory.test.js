import {shallow} from 'enzyme';
import React from 'react';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: {value} });

    });

    test('no debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect( setCategories ).not.toHaveBeenCalled();
    });


    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';

        //Simular el inputChange
        input.simulate('change', { target: {value} });

        //Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        //setCategories debe ser llamado
        
        //expect( setCategories ).toHaveBeenCalled();

        //expect( setCategories ).toHaveBeenCalledTimes(1);

        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function));

        //el valor del input despues debe de estar '
        expect( input.text() ).toBe("");



    })
    



    
})
