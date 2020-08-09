// import React, { Suspense } from 'react';
import React from 'react';
import './App.css'; 
import { ThemeContext, themes } from './views/example-context/theme-context';
// import ThemedButton from './views/example-context/themed-button';
import ThemeTogglerButton from './views/example-context/theme-toggler-button'; 

// function ToolBar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       Change theme
//     </ThemedButton>
//   );
// }

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggleTheme = () => {
//       this.setState((state) => ({
//         theme: state.theme === themes.dark ? themes.light : themes.dark
//       }));
//     };

//     this.state = {
//       theme: themes.dark,
//       toggleTheme: this.toggleTheme
//     }
//   }

//   render() {
//     return(
//       <div>
//         <ThemeContext.Provider value={this.state}>
//           <Content />
//         </ThemeContext.Provider>
//       </div>
//     );
//   }
// }

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Table />
      </div>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}

class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Bonjour</td>
        <td>Tout le monde</td>
      </>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}