import React from 'react';
import { StyleSheet, } from 'react-native';
import { MathApp} from './maths/components/MathApp';
import { FAB } from 'react-native-paper';
const App = () => {
function refreshPage() {
        return ( <>
            <MathApp />
            <FAB
                  style={styles.fab}
                  medium
                  icon="plus"
                  label='Next'
                  onPress={refreshPage}
                /> 
            </>)
  }
  return refreshPage();

//   return (
//       <>
//     <MathApp />
//     <FAB
//           style={styles.fab}
//           medium
//           icon="plus"
//           label='Next'
//           onPress={refreshPage}
//         /> 
//     </>
//   );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
});

export default App;