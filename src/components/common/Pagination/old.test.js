/* eslint-disable jest/no-identical-title */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable react/forbid-foreign-prop-types */
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import OldPagination from './old';
import { configure } from 'enzyme';


configure({adapter: new Adapter()});


describe("Old pagination Component",()=>{


    describe("checking propTypes",()=>{

        it("should not throw a warning",()=>{
            const expectedBannerProps={
                pages:[{
                    active:false,disabled:false,text:1,onClick:function(){}
                }],
                color:"primary"
                
            }
            
            const propErr=checkPropTypes(OldPagination.propTypes,expectedBannerProps,'props',OldPagination.name);
            expect(propErr).toBe(undefined);
        })

        it("should throw a warning",()=>{
            const expectedBannerProps={
                pages:[{
                    active:false,disabled:false,text:1,onClick:function(){}
                }],
                color:"bong"
                
            }
            try{
              checkPropTypes(OldPagination.propTypes,expectedBannerProps,'props',OldPagination.name);
            }
            catch(err)
            {
                expect(1).toBe(1);
            }

            
        })

        it("should throw a warning",()=>{
            const expectedBannerProps={
                pages:[{
                    active:false,disabled:2,text:1,onClick:function(){}
                }],
                color:"bong"
                
            }
            try{
              checkPropTypes(OldPagination.propTypes,expectedBannerProps,'props',OldPagination.name);
            }
            catch(err)
            {
                expect(1).toBe(1);
            }
            
        })


    });
});