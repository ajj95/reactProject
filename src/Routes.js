import BankCO from './pages/bank/BankCO';
import BankTA from './pages/bank/BankTA';
import MainCO from './pages/Main/MainCO';
import MainTA from './pages/Main/MainTA';
import DocrequestCO from './pages/docrequest/DocrequestCO';
import DocrequestTA from './pages/docrequest/DocrequestTA';

const Routes = [
  {
      path: '/bank/bankco',
      component: BankCO
  },
  {
    path: '/bank/bankta',
    component: BankTA
  },
  {
    path: '/main/mainco',
    component: MainCO
  },
  {
    path: '/main/mainta',
    component: MainTA
  },
  {
    path: '/docrequest/docrequestco',
    component: DocrequestCO
  },
  {
    path: '/docrequest/docrequestta',
    component: DocrequestTA
  },
]

export default Routes;