import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Painel from './Screens/Painel';
import Mensalidade from './Screens/Mensalidade';
import Alunos from './Screens/Alunos';
import Turmas from './Screens/Turmas';

export default function App() {
  const bottom = createBottomTabNavigator();
  const drawer = createDrawerNavigator();
  return (
    
    <NavigationContainer>
      <bottom.Navigator>
        <bottom.Screen name='Painel' component={Painel} />
        <bottom.Screen name='Mensalidade' component={Mensalidade}/>
        <bottom.Screen name='Alunos' component={Alunos}/>
        <bottom.Screen name='Turmas' component={Turmas}/>
      </bottom.Navigator>
    </NavigationContainer>
  )
}

