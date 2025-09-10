import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Painel from './screens/Painel';
import Mensalidade from './screens/Mensalidade';
import Alunos from './screens/Alunos';
import Turmas from './screens/Turmas';

export default function App() {
  const bottom = createBottomTabNavigator();
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