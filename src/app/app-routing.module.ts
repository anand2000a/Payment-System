import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';

const routes: Routes = [
  {
    path: 'login', component:
        LoginComponent
  },
  {
    path: 'transfer', component:
        TransferComponent
  },
  {
    path: 'history', component:
        TransactionHistoryComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}