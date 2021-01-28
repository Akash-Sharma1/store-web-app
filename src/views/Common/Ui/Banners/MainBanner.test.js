/* eslint-disable jest/valid-title */
/* eslint-disable jest/no-identical-title */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable react/forbid-foreign-prop-types */
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import MainBanner from './MainBanner';
import { configure } from 'enzyme';


configure({adapter: new Adapter()});


describe("Main Banner Component",()=>{


    describe("checking propTypes",()=>{

        it("it should not throw a warning",()=>{
            const expectedBannerProps={
                image:"testing image url",
                buttonText : "testing button test",
                buttonRoute : "testing the button route",
                title :"testing the title"
            }
            
            const propErr=checkPropTypes(MainBanner.propTypes,expectedBannerProps,'props',MainBanner.name);
            expect(propErr).toBe(undefined);
        })
    });
});