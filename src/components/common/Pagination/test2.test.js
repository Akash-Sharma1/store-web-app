/* eslint-disable jest/valid-title */
/* eslint-disable jest/no-identical-title */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable react/forbid-foreign-prop-types */
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import Pagination from './Pagination';
import { configure } from 'enzyme';


configure({adapter: new Adapter()});


describe("pagination Component",()=>{


    describe("checking propTypes",()=>{

        it("it should not throw a warning",()=>{
            const expectedBannerProps={
                
                color:"primary"
                
            }
            
            const propErr=checkPropTypes(Pagination.propTypes,expectedBannerProps,'props',Pagination.name);
            expect(propErr).toBe(undefined);
        })

        it("it should throw a warning",()=>{
            const NotexpectedBannerProps={
                
                color:"jaguar"
                
            }
          const error='Failed props type: Invalid props `color` of value `'+NotexpectedBannerProps.color+'` supplied to `Pagination`, expected one of [\"primary\",\"info\",\"success\",\"warning\",\"danger\"].';
            
            const propErr=checkPropTypes(Pagination.propTypes,NotexpectedBannerProps,'props',Pagination.name);
            expect(propErr).toEqual(error);
        })



    });
});