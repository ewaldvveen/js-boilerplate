// Dummy code to check if everything is working from the start.
import './index.css';
import numeral from 'numeral';

const boilerplateValue = numeral(1000).format('$0,0.00');

console.log(
  `I would pay ${boilerplateValue} for this awesome JavaScript boilerplate!`
);
