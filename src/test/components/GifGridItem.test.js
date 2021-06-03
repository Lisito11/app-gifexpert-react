import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';
import React from 'react';
describe('Pruebas en el componente <GifGridItem />', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg'

    const wrapper = shallow(<GifGridItem url={url} title={title}/>)

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //const src = img.props().src;
        const src = img.prop('src');
        const alt = img.prop('alt');

        expect(src).toBe(url);
        expect(alt).toBe(title);


    });


    test('debe de tener animate_fadeInd', () => {
        const div = wrapper.find('div');
        
        const className = div.props().className;

        expect(className.includes('animate__fadeIn')).toBe(true);
        
    })
    
    
    
    
})
