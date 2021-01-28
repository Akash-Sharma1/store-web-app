/* eslint-disable jest/valid-title */
/* eslint-disable jest/no-identical-title */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable react/forbid-foreign-prop-types */
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import LandingPage from "./LandingPage";



configure({adapter: new Adapter()});


describe("Landing Page component",()=>{
    let component;
    beforeEach(()=>{
        component=shallow(<LandingPage/>);
    })

    


    describe("All sub  component should be rendered",()=>{

        it("should not throw a warning",()=>{
           const parallax=component.find("Parallax");
           const gridContainer=parallax.find("GridContainer");
           const gridItem=gridContainer.find("GridItem")
           
           expect(parallax&& gridContainer && gridItem).toBeDefined;
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



