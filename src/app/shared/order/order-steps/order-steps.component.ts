import { Component, OnInit } from '@angular/core';
import { IssuingAgencyService, IssuingAgency } from '../../issuing-agency';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { InputHoverDirective } from '../../../directives';
import { LoaderService } from '../../loader';

@Component({
  selector: 'app-order-steps',
  templateUrl: './order-steps.component.html',
  styleUrls: ['./order-steps.component.scss'],
  providers: [
    IssuingAgencyService,
    OrderService
  ]
})
export class OrderStepsComponent implements OnInit {

  public isSendOrderButtonDisabled = false;
  public dataSended = false;
  public issuingAgencies: Array<IssuingAgency>;
  public order: Order;

  constructor(
    private issuingAgencyService: IssuingAgencyService,
    private orderService: OrderService,
    private loaderService: LoaderService
  ) {
    this.initIssuingAgencies();
    this.initOrderModel();
  }

  ngOnInit() {
  }

  initIssuingAgencies() {
    this.issuingAgencyService.getAll().subscribe(data => {
      this.issuingAgencies = data;
    });
  }

  initOrderModel() {
    this.order = {
      rg: '',
      issue_date: '',
      gender: 'male',
      issuing_agency: ''
    };
  }

  sendOrderForm(orderForm) {
    if (!orderForm.form.valid) {
      this.isSendOrderButtonDisabled = true;
      return;
    }

    this.loaderService.show();
    this.orderService.create(this.order).subscribe(data => {
      this.dataSended = true;
      this.initOrderModel();
      this.isSendOrderButtonDisabled = false;

      this.loaderService.hide();

      setTimeout(() => {
        this.dataSended = false;
      }, 3000);
    });
  }
}
