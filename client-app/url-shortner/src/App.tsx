import * as React from 'react';
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Container from './components/Container/Container.tsx';

 interface IAppProps {
  title: string;
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header title={''} />
      <Container title=''/>
      <Footer title={''}/>
    </>
  );
};

export default App;
