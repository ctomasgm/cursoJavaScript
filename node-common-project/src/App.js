import React from 'react';
import Bulbs from './components/Bulbs';

function App() {
  return (
    <div>
      <table background = "/images/house.jpg" width="100%" height="100%">
        <tbody>
          <td>
            <tr><Bulbs ubication="Baños"/></tr>
            <tr><Bulbs ubication="Recamara principal"/></tr>
            
          </td>
          <td>
            <tr><br/></tr>
            <tr><br/></tr>
            <tr><br/></tr>
          </td>
          <td>
            <tr></tr>
            <tr><Bulbs ubication="Sala"/></tr>
            <tr></tr>
            <tr></tr>
          </td>
          <td>
            <tr><Bulbs ubication="Cocina"/></tr>
            <tr><br/></tr>
            <tr><Bulbs ubication="Estancia"/></tr>
            <tr><br/><br/><br/><br/><br/><br/></tr>
            <tr><Bulbs ubication="Recamara de los niños"/></tr>
          </td>
          <td>
            <tr><Bulbs ubication="Comedor"/></tr>
          </td>
        </tbody>
      </table>
    </div>
  );
}

export default App;
