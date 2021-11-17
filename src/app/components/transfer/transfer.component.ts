import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  inrAmt:number;
  transferForm!: FormGroup;
  constructor(private router: Router, private apisvc: ApiService) {
    this.inrAmt = 0;
   }

  ngOnInit(): void {
    this.transferForm = new FormGroup({
      receiverBic: new FormControl(''),
      receiverAcno: new FormControl(''),
      receiverName: new FormControl(''),
      inrAmt: new FormControl(''),
      currency: new FormControl(''),
      transferType: new FormControl('')
    })
  }

  onSubmit(transferForm: FormGroup) {
    console.log(transferForm);
    this.router.navigate(['/history']);
  }
}

