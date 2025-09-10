import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Painel from '../pilatesStudio/screens/Painel';
import Mensalidade from '../pilatesStudio/screens/Mensalidade';
import Alunos from '../pilatesStudio/screens/Alunos';
import Turmas from '../pilatesStudio/screens/Turmas';

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

