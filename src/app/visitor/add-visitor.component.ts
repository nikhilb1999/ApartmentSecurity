import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Visitor } from '../visitor';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {

  visitor!: Visitor;

  visitorId: number=0;
  addVisitorForm! : FormGroup;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: VisitorService, private toastr: ToastrService) { }
  ngOnInit(): void {
  }

}
