import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Painel from './screens/Painel';
import Mensalidade from './screens/Mensalidade';
import Alunos from './screens/Alunos';
import Turmas from './screens/Turmas';
import { Image } from 'react-native-web';
import IconDash from './assets/iconDash';
import Addalunos from './screens/Addalunos';
import { createStackNavigator } from '@react-navigation/stack';
import DetalhesAluno from './screens/DetalhesAluno';

export default function App() {
  const bottom = createBottomTabNavigator();
  const stack = createStackNavigator();

  function AlunoStack(){
    return(
    <stack.Navigator>
        <stack.Screen name='Aluno' component={Alunos} options={{headerShown:false}}/>
        <stack.Screen name='DetalhesAluno' component={DetalhesAluno} options={{headerTintColor:'#4e5a5e',title:'Voltar',headerTransparent:true}}/>
        <stack.Screen name='AddAluno' component={Addalunos} options={{headerTintColor:'#4e5a5e',title:'Voltar',headerTransparent:true}}/>
    </stack.Navigator>
    )
  }
  return (
    
    <NavigationContainer>
      <bottom.Navigator>
        <bottom.Screen name='Painel' component={Painel} options={{headerShown:false, tabBarIcon:()=>(<IconDash/>)}}/>
        <bottom.Screen name='Mensalidade' component={Mensalidade} options={{headerShown:false, tabBarIcon:()=>(<IconDash/>)}}/>
        <bottom.Screen name='Alunos' component={AlunoStack} options={{headerShown:false, tabBarIcon:()=>(<IconDash/>)}}/>
        <bottom.Screen name='Turmas' component={Turmas} options={{headerShown:false, tabBarIcon:()=>(<IconDash/>)}}/>
      </bottom.Navigator>
    </NavigationContainer>
  )
}