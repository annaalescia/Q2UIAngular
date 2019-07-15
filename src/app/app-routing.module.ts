import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentTableComponent } from './components/document-table/document-table.component';
import { UploadPdfComponent } from './components/upload-pdf/upload-pdf.component';
import { ProtocolDetailsComponent } from './components/protocol-details/protocol-details.component';

const routes: Routes = [
  { path: '', component: DocumentTableComponent },
  { path: 'upload-protocol', component: UploadPdfComponent },
  { path: 'protocol-details/:id', component: ProtocolDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
