// import React, { Suspense } from 'react';
import React from 'react';
import './App.css'; 
import { ThemeContext, themes } from './views/example-context/theme-context';
import ThemedButton from './views/example-context/themed-button'; 

function ToolBar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change theme
    </ThemedButton>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.dark
    }

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    return(
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ToolBar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemedButton />
        </section>
      </div>
    );
  }
}