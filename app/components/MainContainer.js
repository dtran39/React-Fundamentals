React = require('react'); // Although we do not use React directly in code,
// since JSX runs on react, it is always required
styles = require('../styles');
function MainContainer(props) {
  return (
    <div className="jumbotron col-sm-12 text-center" styles={styles.transparentBg}>
      {props.children}
    </div>
  );
};
module.exports = MainContainer;
