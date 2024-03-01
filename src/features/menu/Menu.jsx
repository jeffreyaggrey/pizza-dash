import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';

import { getMenu } from '../../services/apiRestaurant';

function Menu() {
  // Get the menu from the loader
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
