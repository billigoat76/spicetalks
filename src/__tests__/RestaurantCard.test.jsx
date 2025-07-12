
import { render,screen } from '@testing-library/react';
import MOCK_DATA from '../mocks/mockResData.json'
import RestaurantCard from '../components/RestaurantCard';
import "@testing-library/jest-dom"

test('should render restaurantcard component with props data', () => { 
    render(<RestaurantCard resData={MOCK_DATA}/>) 
    
   const resName =  screen.getByText('Kwality Walls Ice Cream and More');
   expect(resName).toBeInTheDocument();
   

 })