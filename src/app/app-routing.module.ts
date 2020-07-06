import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { BarchartComponent } from "./barchart/barchart.component";  
import { LinechartComponent } from "./linechart/linechart.component";  
import { PiechartComponent } from "./piechart/piechart.component";  
import { DoughnutComponent } from "./doughnut/doughnut.component"; 
import { SavePdfComponent } from "./save-pdf/save-pdf.component"; 
const routes: Routes = [  
  {  
    path: 'LineChart', component: LinechartComponent  
  },  
  {  
    path: 'BarChart', component: BarchartComponent  
  },  
  {  
    path: 'PieChart', component: PiechartComponent  
  },  
  {  
    path: 'DoughnutChart', component: DoughnutComponent  
  },  
  {path: 'save-pdf', component: SavePdfComponent}
  
];  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }
