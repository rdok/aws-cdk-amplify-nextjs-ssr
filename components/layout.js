import Header from './header';

const layoutStyle = {
  padding: 16
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
