import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonLabel, IonGrid, IonRow, IonButtons } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonButtons, IonRow,RouterLink, IonGrid, IonLabel, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DashboardPage implements OnInit {
  subjects: { img: string; name: string; }[] | undefined;

  constructor(private router : Router) { }

  ngOnInit() {
    this.subjects = [
   
      {
        img: 'assets/icon/profits.png',
        name: 'Incomes'
      },
      {
        img: 'assets/icon/budget.png',
        name: 'Expenses'
      },
      {
        img: 'assets/icon/invoice.png',
        name: 'Receipts'
      },
      {
        img: 'assets/icon/bar-chart.png',
        name: 'Reports'
      },
      {
        img: 'assets/icon/application.png',
        name: 'Categories'
      },
      {
        img: 'assets/icon/budget.png',
        name: 'Budget'
      },
      {
        img: 'assets/icon/setting.png',
        name: 'Settings'
      },
      
      {
        img: 'assets/social.png',
        name: 'Others'
      },
      {
        img: 'assets/social.png',
        name: 'Social Science'
      }
    ];
  }

}

