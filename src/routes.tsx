import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cartao from "./pages/cartao";
import Configuracao from "./pages/Configuracao";
import Conta from "./pages/conta";
import Landing from "./pages/landing";
import Pagamento from "./pages/pagamento";
import Transferencia from "./pages/Transferencia";

function Routes(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Conta} />
          <Route exact path="/Cartao" component={Cartao} />
          <Route exact path="/Transferencia" component={Transferencia} />
          <Route exact path="/Pagamento" component={Pagamento} />
          <Route exact path="/Configuracao" component={Configuracao} />
        </Switch>
      </BrowserRouter>
    );
}

export default Routes;