import React from 'react';
import { HashRouter as Router , Route} from 'react-router-dom';
import FinancialMagage from './../components/income-detail/financial-manage'
import CashOut from './../components/income-detail/cash-out'
class Content extends  React.Component {
  render(){
    return (
      <Router>
          <Route path={'/'} exact component={CashOut}></Route>
          <Route path={'/index/income'} exact component={FinancialMagage}></Route>
      </Router>
    )
  }
}
export default Content