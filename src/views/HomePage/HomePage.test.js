/* eslint-disable jest/valid-title */
/* eslint-disable jest/no-identical-title */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable react/forbid-foreign-prop-types */
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import HomePage from "./../HomePage/index.js";



configure({adapter: new Adapter()});


describe("HomePage component",()=>{
    let component;
    beforeEach(()=>{
        component=shallow(<HomePage/>);
    })

    


    describe("All sub  component should be rendered",()=>{

        it("should not throw a warning",()=>{
           const mainBanner=component.find("MainBanner");
           const staticBanner=component.find("StaticBanner");
           const sectionProductDisplay=component.find("SectionProductDisplay");
           expect(mainBanner && staticBanner && sectionProductDisplay ).toBeDefined;
        });

    });

    describe("Both classes must be there in sectiontab",()=>{

        it("Section Tabs Should render without errror",()=>{
        
            // console.log(component.debug());
            const classes1=component.find(".makeStyles-main-4");
            const classes2=component.find(".makeStyles-mainRaised-5");
    
            expect(classes1.length && classes2.length).toBe(1);
            
        });
    });
    
});



