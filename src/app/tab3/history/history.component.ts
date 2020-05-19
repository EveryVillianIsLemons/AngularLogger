import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';


@Component({
  selector: 'history-tab',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss']
})
export class HistoryPageComponent implements OnInit{
  groceries = ['milk','egg','sauce']

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    
  }

  public onDismiss (){
    this.modalCtrl.dismiss();
  }

  public logGrocery(grocery){
    console.log(grocery)
  }


}