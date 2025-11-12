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
import MensalidadesPagas from './screens/MensalidadesPagas';
import DetalhesTurma from './screens/DetalhesTurma';
import InfoTurmas from './screens/InfoTurmas';
import IconMensalidade from './assets/iconMensalidade';
import Icona from './assets/icona';
import Icont from './assets/icont';

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
   function TurmasStack(){
    return(
    <stack.Navigator>
        <stack.Screen name='Turma' component={Turmas} options={{headerShown:false}}/>
        <stack.Screen name='InfoTurmas' component={InfoTurmas} options={{headerTintColor:'#4e5a5e',title:'Voltar',headerTransparent:true}}/>
        <stack.Screen name='DTurma' component={DetalhesTurma} options={{headerTintColor:'#4e5a5e',title:'Voltar',headerTransparent:true}}/>
    </stack.Navigator>
    )
  }
    function MensalidadeStack(){
    return(
    <stack.Navigator>
        <stack.Screen name='Mensalidade' component={Mensalidade} options={{headerShown:false}}/>
        <stack.Screen name='MensalidadesPagas' component={MensalidadesPagas} options={{headerTintColor:'#4e5a5e',title:'Voltar',headerTransparent:true}}/>
    </stack.Navigator>
    )}
    function PainelStack(){
    return(
    <stack.Navigator>
        <stack.Screen name='Dashboard' component={Painel} options={{headerShown:false}}/>
        <stack.Screen name='DAluno' component={DetalhesAluno} options={{headerTintColor:'#4e5a5e',title:'Voltar',headerTransparent:true}}/>
        <stack.Screen name='D2Turma' component={DetalhesTurma} options={{headerTintColor:'#4e5a5e',title:'Voltar',headerTransparent:true}}/>
    </stack.Navigator>
    )
    
  }
  return (
    
    <NavigationContainer>
      <bottom.Navigator>
        <bottom.Screen name='Painel' component={PainelStack} options={{headerShown:false, tabBarIcon:()=>(<IconDash/>),tabBarActiveTintColor:"#b86516"}}/>
        <bottom.Screen name='Mensalidades' component={MensalidadeStack} options={{headerShown:false, tabBarIcon:()=>(<IconMensalidade/>),tabBarActiveTintColor:"#b86516"}}/>
        <bottom.Screen name='Alunos' component={AlunoStack} options={{headerShown:false, tabBarIcon:()=>(<Icona/>),tabBarActiveTintColor:"#b86516"}}/>
        <bottom.Screen name='Turmas' component={TurmasStack} options={{headerShown:false, tabBarIcon:()=>(<Icont/>),tabBarActiveTintColor:"#b86516"}}/>
      </bottom.Navigator>
    </NavigationContainer>
  )
}