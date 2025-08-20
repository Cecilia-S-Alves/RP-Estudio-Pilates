import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Painel from './Screens/Painel';
import Mensalidade from './Screens/Mensalidade';

export default function App() {
  const bottom = createBottomTabNavigator();
  return (
    
    <NavigationContainer>
      <bottom.Navigator>
        <bottom.Screen name='Painel' component={Painel} />
        <bottom.Screen name='Mensalidade' component={Mensalidade}/>
      </bottom.Navigator>
    </NavigationContainer>
  )
}

