import { createSwitchNavigator,createAppContainer } from 'react-navigation';

import HOME from "./App";
import INICIO from './fotos';

const router = createSwitchNavigator({
    home: HOME,
    inicio: INICIO
});

export default createAppContainer(router);